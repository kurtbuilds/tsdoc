import {Job, JobResult} from "../job"
import {Ok} from "@kurtbuilds/lib"


interface BuildJobSuccess {
    success: true
}

interface BuildJobData {
    package: string,
    version: string,
}

export async function handle_build_docs(job: Job): Promise<JobResult<BuildJobSuccess>> {
    const _data = job.data as BuildJobData
    return Ok({success: true})
}