// noinspection DuplicatedCode

import * as fs from "fs"
import * as path from "path"

const CWD = process.cwd()
const OUTPUT_DIR = path.join(CWD, "build")
const to_absolute = (p: string) => path.resolve(CWD, p)

const BASE_TEMPLATE = fs.readFileSync(to_absolute("build/index.html"), "utf-8")
const {render} = require(CWD + "/build/server/ssr.js")

const DEFAULT_PATHS = [
    "/",
    "/login",
    "/signup",
]

async function main() {
    for (const url of DEFAULT_PATHS) {
        const context = {}
        const appHtml = await render(url, context)

        const html = BASE_TEMPLATE.replace("<!--ssr-outlet-->", appHtml)

        fs.mkdirSync(path.join(OUTPUT_DIR, url), {recursive: true})
        const fpath = path.join(OUTPUT_DIR, url, "index.html")
        fs.writeFileSync(fpath, html)
        console.log(`${fpath}: Wrote file.`)
    }
}

main().catch(e => console.error(e))