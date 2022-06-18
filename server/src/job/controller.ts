import {Job, JobName} from "./model"
import {Uuid} from "../lib/type"
import {getConnection} from "typeorm"
import {captureException} from "@sentry/node"
import {choose_job} from "./register"
import {UpdateQuery} from "src/lib/typeorm_types"


export async function create_job(name: JobName, data: object, scheduled_at?: Date): Promise<Job> {
    const job = new Job({
        name,
        data,
        scheduled_at,
    })
    return job.save()
}

export async function create_jobs(name: JobName, ls_data: object[]): Promise<Job[]> {
    const jobs = ls_data.map(data => new Job({
        name,
        data,
    }))
    return getConnection().getRepository(Job).save(jobs)
}


export async function mark_job_as_completed(job_uuid: Uuid, result_data: object): Promise<void> {
    await getConnection().getRepository(Job).update(job_uuid, {
        completed_at: new Date(),
        result_data,
    })
}


export async function mark_job_as_failed(job: Job, error: Error) {
    const stack = error.stack
    await getConnection().getRepository(Job).update(job.uuid, {
        completed_at: new Date(),
        error_stack: stack,
    })
}


export async function reset_incomplete_jobs(): Promise<Uuid[]> {
    const [result, _] = await getConnection().query(`UPDATE job
SET started_at = null
WHERE started_at < now() - interval '10 minute'
AND completed_at is null
RETURNING uuid`) as UpdateQuery<{ uuid: Uuid }>
    return result.map(row => row.uuid)
}


const ONE_DAY = 1000 * 60 * 60 * 24

export async function process_job(job: Job): Promise<void> {
    const name = job.name as JobName
    try {
        if (+job.created_at < +new Date() - ONE_DAY) {
            throw new Error("Attempted to process job, but it is more than a day old.")
        }
        const job_fn = choose_job(name)
        const result = await job_fn(job)
        if (result.is_ok()) {
            return mark_job_as_completed(job.uuid, result.unwrap())
        } else {
            throw result.unwrap_err()
        }
    } catch (_e) {
        const e = _e as Error
        console.log(e)
        await mark_job_as_failed(job, e)
        captureException(e, {
            user: {
                id: undefined,
            },
            extra: {
                job_uuid: job.uuid,
                job_name: job.name,
            }
        })
    }
}

const GET_NEXT_JOB_QUERY = `
WITH selected as (
select
uuid
from job
where started_at is null
and (scheduled_at is null OR scheduled_at <= now())
limit 1
)

update job
set started_at = now()
from selected
where job.uuid = selected.uuid
returning job.*
`


export async function get_next_job(): Promise<Job | undefined> {
    const [result, affected] = await getConnection().query(GET_NEXT_JOB_QUERY)
    if (affected === 0) {
        return undefined
    } else {
        return new Job(result[0])
    }
}