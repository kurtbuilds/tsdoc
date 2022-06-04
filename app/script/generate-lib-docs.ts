// noinspection DuplicatedCode

import * as fs from "fs"
import * as path from "path"

/**
 * Usage: generate-docsite.ts $PACKAGE_NAME $PACKAGE_VERSION $URL_LIST
 * Example: generate-docsite.ts query-registry 1.4.0 stage/static_urls.txt
 */
const NAME = process.argv[2]
const VERSION = process.argv[3]
const PATHS_FILE = process.argv[4]

const CWD = process.cwd()
const OUTPUT_DIR = path.join("library", NAME, VERSION)

function to_absolute(p: string) {
    return path.resolve(CWD, p)
}


const BASE_TEMPLATE = fs.readFileSync(to_absolute(path.join("library", NAME, VERSION, "index.html")), "utf-8")

const {render} = require(CWD + "/build/server/ssr.js")

async function main() {
    const paths = fs.readFileSync(PATHS_FILE, "utf-8").split("\n")

    for (const url of paths) {
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