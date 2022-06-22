import * as fs from "fs"
import * as path from "path"
import {getPackageManifest, getRegistryMetadata, searchPackages} from "query-registry"
import {exec} from "child_process"
import {extract_package} from "../src/package/extract"


async function subcommand(command: string) {
    return new Promise((resolve, reject) => {
        console.log(command)
        const process = exec(command)

        process.stdout?.on("data", (data) => {
            console.log(data.toString())
        })

        process.stderr?.on("data", (data) => {
            console.log(data.toString())
        })

        process.on("exit", (code) => {
            if (code === 0) {
                resolve(0)
            } else {
                reject(code)
            }
        })
    })
}


function generate_target_file(name: string) {
    const template = `\
import typedoc from "../../stage/typedoc.json"
const files = import.meta.globEager(
    "/stage/${name}/src/**/*.ts",
    //@ts-ignore
    { as: "raw" }
)
export {typedoc}
export default files
`
    fs.writeFileSync("src/libdoc/target.ts", template)
}


async function generate_typedoc(name: string) {
    await subcommand(`cd stage/${name} && ../../node_modules/.bin/typedoc --json ../typedoc.json src/index.ts`)
}

function generate_static_urls_file(name: string, version: string) {
    const paths: string[] = [
        path.join("/", name, version)
    ]
    // add files
    //@ts-ignore
    for (const [cur, dirs, files] of walk(`stage/${name}/src`)) {
        for (const file of files) {
            paths.push(path.join("/", name, version, "file", "src", path.relative(`stage/${name}/src`, file)))
        }
    }
    // add classes n stuff
    const typedoc = JSON.parse(fs.readFileSync("stage/typedoc.json", "utf-8"))
    const {classes, interfaces, constants, functions} = extract_package(typedoc)
    for (const cls of classes) {
        paths.push(path.join("/", name, version, "class", cls.name))
    }
    for (const cls of interfaces) {
        paths.push(path.join("/", name, version, "interface", cls.name))
    }
    for (const cls of constants) {
        paths.push(path.join("/", name, version, "constant", cls.name))
    }
    for (const cls of functions) {
        paths.push(path.join("/", name, version, "function", cls.name))
    }
    fs.writeFileSync("stage/static_urls.txt", paths.join("\n"))
}

async function main() {
    // const _metadata = await getRegistryMetadata()
    //
    // const _results = await searchPackages({
    //     query: {text: "typescript"},
    // })
    const package_name = process.argv[1]
    const requested_version = process.argv[2]
    const manifest = await getPackageManifest({ name: package_name })

    const url = manifest.gitRepository?.url
    const latest_version = manifest.version
    const name = manifest.name

    await subcommand("mkdir -p stage")
    await subcommand("cd stage && rm -rf *")
    await subcommand(`cd stage && git clone ${url} ${name}`)
    await subcommand(`cd stage/${name} && git checkout tags/v${latest_version} -b v${latest_version}`)
    await subcommand(`cd stage/${name} && pnpm install --config.auto-install-peers=true`)
    await subcommand(`cd stage/${name} && pnpm install @types/node`)

    await generate_typedoc(name)
    generate_target_file(name)
    generate_static_urls_file(name, latest_version)
}

main().catch(e => {
    console.error(e)
    process.exit(1)
})