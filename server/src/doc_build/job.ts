import {Job, JobResult} from "../job"
import {Ok} from "@kurtbuilds/lib"
import {ENV} from "@kurtbuilds/env"
import {exec} from "child_process"
import path from "path"
import fs from "fs/promises"


interface CommandResult {
    status: number
    stdout: string,
    stderr: string,
}

export async function subcommand(command: string): Promise<CommandResult> {
    return new Promise((resolve, reject) => {
        console.log(command)
        const process = exec(command)
        let stdout = ""
        let stderr = ""

        process.stdout?.on("data", (data) => {
            const s = data.toString()
            console.log(s.trim())
            stdout += s
        })

        process.stderr?.on("data", (data) => {
            const s = data.toString()
            console.log(s.trim())
            stderr += s
        })

        process.on("exit", (code) => {
            if (code === 0) {
                resolve({
                    status: 0,
                    stderr,
                    stdout,
                })
            } else {
                reject({
                    status: code,
                    stderr,
                    stdout,
                })
            }
        })
    })
}


async function exists(path: string): Promise<boolean> {
    return fs.stat(path)
        .then(() => true)
        .catch(() => false)
}


interface BuildJobSuccess {
    success: true
}

interface BuildJobData {
    package: string,
    version: string,
}

const DOC_BUILD_DIR = ENV.DOC_BUILD_DIR
const REPO_PATH = path.join(DOC_BUILD_DIR, "tsdoc")
const APP_DIR = path.join(REPO_PATH, "app")
const GITHUB_USERNAME = ENV.GITHUB_USERNAME
const GITHUB_TOKEN = ENV.GITHUB_TOKEN


export async function handle_build_docs(job: Job): Promise<JobResult<BuildJobSuccess>> {
    const data = job.data as BuildJobData
    // const package_name = data.package
    const package_name = "@types/qrcode"
    const version = data.version
    const repo_exists = await exists(REPO_PATH)
    const GIT_REPO = `https://${GITHUB_USERNAME}:${GITHUB_TOKEN}@github.com/kurtbuilds/tsdoc`
    if (!repo_exists) {
        await fs.mkdir(DOC_BUILD_DIR)
        await subcommand(`cd ${DOC_BUILD_DIR} && git clone --filter=blob:none --no-checkout --depth 1 --sparse ${GIT_REPO}`)
        await subcommand(`cd ${REPO_PATH} && git sparse-checkout init --cone`)
        await subcommand(`cd ${REPO_PATH} && git sparse-checkout add app`)
        await subcommand(`cd ${REPO_PATH} && git checkout`)
    }
    /** prepare the repo */
    // await subcommand(`cd ${REPO_PATH} && git pull origin master`)
    // await subcommand(`cd ${APP_DIR} && NODE_ENV= pnpm install`)

    // what next?
    try {
        await subcommand(`cd ${APP_DIR} && just stage ${package_name}`)
    } catch (_e) {
        const e = _e as CommandResult
        console.error("Command failed", e.stderr, e.stdout)
        throw e
    }

    return Ok({success: true})
}