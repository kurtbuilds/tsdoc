import {Request, Response, Router} from "express"
import {safe_call} from "src/lib/handler"
import {create_job} from "./controller"
import {DateTime} from "luxon"
import {Job, JOB_TYPES, JobName} from "./model"
import {Uuid} from "share/gqltype"


async function handle_trigger_spending_summary(req: Request, res: Response) {
    const name = req.params["name"] as JobName
    if (!JOB_TYPES.includes(name)) {
        res.status(400).send(`Invalid job name: ${name}. Valid names are: ${JOB_TYPES.join(", ")}`)
        return
    }
    const user_uuid = req.body.user_uuid
    await create_job(name, req.body || {}, user_uuid, DateTime.now().toJSDate())
    res.status(200).send("Ok")
}


async function handle_reset_job(req: Request, res: Response) {
    const job_uuid = req.params["uuid"] as Uuid
    const job = await Job.findOneOrFail(job_uuid)
    job.started_at = null
    job.completed_at = null
    job.result_data = null
    job.error_stack = null
    await job.save()
    res.status(200).send("Ok")
}

export const job_router = Router()

/**
 * Trigger as:
 *
 * req localhost:5000/api/__debug/job/trigger/spending-summary --json user_uuid=$USER_UUID
 */
job_router.post("/trigger/:name", safe_call(handle_trigger_spending_summary))
job_router.post("/reset/:uuid", safe_call(handle_reset_job))
