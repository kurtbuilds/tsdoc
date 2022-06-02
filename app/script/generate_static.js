const fs = require("fs")
const path = require("path")

const CWD = process.cwd()
const OUTPUT_DIR = path.join(CWD, "build")
const toAbsolute = (p) => path.resolve(CWD, p)

const template = fs.readFileSync(toAbsolute("build/index.html"), "utf-8")
const { render } = require(CWD + "/build/server/ssr.js")

;(async () => {
    for (const url of [
        "/",
        "/login",
        "/signup",
    ]) {
        const context = {}
        const appHtml = await render(url, context)

        const html = template.replace("<!--ssr-outlet-->", appHtml)

        fs.mkdirSync(path.join(OUTPUT_DIR, url), { recursive: true })
        let fpath = path.join(OUTPUT_DIR, url, "index.html")
        fs.writeFileSync(fpath, html)
        console.log(`${fpath}: Wrote file.`)
    }
})()