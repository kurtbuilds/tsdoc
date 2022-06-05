// noinspection DuplicatedCode

import * as fs from "fs"
import * as path from "path"
import {safe_readdirSync} from "../src/lib/script_util"

async function main() {
    const result: any = { libraries: []}
    const avoid_repeat = []
    for (const name of safe_readdirSync("stage")) {
        if (name.includes(".")) {
            continue
        }
        const version = JSON.parse(fs.readFileSync(path.join("stage", name, "package.json"), "utf-8")).version
        result.libraries.push({
            name,
            path: `/${name}/${version}`
        })
        avoid_repeat.push(name)
    }
    for (const name of fs.readdirSync("library")) {
        if (avoid_repeat.includes(name)) {
            continue
        }
        const version = fs.readdirSync(path.join("library", name))[0]
        result.libraries.push({
            name,
            path: `/${name}/${version}`
        })
    }
    console.log(JSON.stringify(result, null, 4))
    const output_fpath = "src/tsdoc/libdoc-index.json"
    fs.writeFileSync(output_fpath, JSON.stringify(result))
    console.log(`${output_fpath}: Wrote file.`)
}

main().catch(e => console.error(e))