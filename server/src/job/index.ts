import { Result } from "@kurtbuilds/lib"
export { Job } from "./model"

export type JobError = Error

export type JobResult<T> = Result<T, JobError>