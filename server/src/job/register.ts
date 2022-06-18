import {Job, JobName} from "./model"
import {JobResult} from "./index"
import {infallible} from "@kurtbuilds/lib"
import {handle_build_docs} from "../doc_build/job"

export type JobFunction<T> = (job: Job) => Promise<JobResult<T>>

export function choose_job(name: JobName): JobFunction<any> {
    if (name === "build") {
        return handle_build_docs
    } else {
        infallible(name)
    }
}