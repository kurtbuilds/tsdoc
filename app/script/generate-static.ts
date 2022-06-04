import * as fs from "fs"
import * as path from "path"

const CWD = process.cwd()
const OUTPUT_DIR = path.join(CWD, "build")
const to_absolute = (p: string) => path.resolve(CWD, p)

const template = fs.readFileSync(to_absolute("index.html"), "utf-8")
// import {render} from "src/lib/ssr"
const {render} = require(CWD + "/build/server/assets/ssr.js")

const DEFAULT_PATHS = [
    "/",
    "/login",
    "/signup",
]

async function main() {
    const paths_file = process.argv[2]
    const output_dir = process.argv[3] || OUTPUT_DIR
    let paths
    if (paths_file) {
        paths = fs.readFileSync(paths_file, "utf-8").split("\n")
    } else {
        paths = DEFAULT_PATHS
    }
    for (const url of paths) {
        const context = {}
        const appHtml = await render(url, context)

        const html = template.replace("<!--ssr-outlet-->", appHtml)

        fs.mkdirSync(path.join(output_dir, url), {recursive: true})
        const fpath = path.join(output_dir, url, "index.html")
        fs.writeFileSync(fpath, html)
        console.log(`${fpath}: Wrote file.`)
    }
}

main().catch(e => console.error(e))
