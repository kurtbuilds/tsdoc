import fs from "fs"
import path from "path"
import {extract_package} from "../typedoc/extract"


function* walk(root: string): Iterable<[string, string[], string[]]> {
    const dirs = []
    const files = []
    for (const d of fs.readdirSync(root)) {
        const entry = path.join(root, d)
        const stat = fs.statSync(entry)
        if (stat.isDirectory()) {
            dirs.push(entry)
        } else if (stat.isFile()) {
            files.push(entry)
        }
    }
    yield [root, dirs, files]
    for (const d of dirs) {
        //@ts-ignore
        yield* walk(d)
    }
}


export function create_static_urls(project_path: string, package_name: string, version: string, typedoc: any): string[] {
    const paths: string[] = [
        path.join("/", package_name, version)
    ]
    for (const [cur, _dirs, files] of walk(project_path)) {
        if ([".git", "node_modules", "stage"].includes(cur)) {
            continue
        }
        for (const file of files) {
            if (![".js", ".ts"].includes(path.extname(file))) {
                continue
            }
            paths.push(path.join("/", package_name, version, "file", path.relative(project_path, file)))
        }
    }
    // add classes n stuff
    const {classes, interfaces, constants, functions} = extract_package(typedoc)
    for (const cls of classes) {
        paths.push(path.join("/", package_name, version, "class", cls.name))
    }
    for (const cls of interfaces) {
        paths.push(path.join("/", package_name, version, "interface", cls.name))
    }
    for (const cls of constants) {
        paths.push(path.join("/", package_name, version, "constant", cls.name))
    }
    for (const cls of functions) {
        paths.push(path.join("/", package_name, version, "function", cls.name))
    }
    return paths
}