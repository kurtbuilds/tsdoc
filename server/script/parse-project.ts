import {index_source_files} from "../src/doc_build/index_js"
import path from "path"
import TypeDoc from "typedoc"
import {readFileSync, statSync, writeFileSync} from "fs"
import {create_static_urls} from "../src/doc_build/static_urls"


export function existsSync(path: string): boolean {
    try {
        statSync(path)
        return true
    } catch (e) {
        return false
    }
}


/** Find the location of the entry .ts or .d.ts file.
 *
 */
function find_type_entry_point(project_path: string): string {
    // Example: https://github.com/velut/node-query-registry/blob/main/package.json#L7
    if (existsSync(path.join(project_path, "package.json"))) {
        const package_json = readFileSync(path.join(project_path, "package.json"), "utf-8")
        const package_json_obj = JSON.parse(package_json)
        return package_json_obj.source
    }
    // Example: https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/qrcode
    const entry_point_candidate = path.join(project_path, "index.d.ts")
    if (existsSync(entry_point_candidate)) {
        return entry_point_candidate
    }
    throw new Error("Could not find type entry point.")
}

/** Run this on a typescript project OR on the type definitions (.d.ts) of a project */
async function run_typedoc(project_path: string) {
    const app = new TypeDoc.Application()

    // If you want TypeDoc to load tsconfig.json / typedoc.json files
    app.options.addReader(new TypeDoc.TSConfigReader())

    app.bootstrap({
        tsconfig: path.join(project_path, "tsconfig.json"),
        // typedoc options here
        entryPoints: [find_type_entry_point(project_path)],
    })

    const project = app.convert()
    if (!project) {
        throw new Error("Could not generate typedoc.json for project.")
    }

    const typedoc_json_path = path.join(project_path, "typedoc.json")
    await app.generateJson(project, typedoc_json_path)
    const typedoc_data = readFileSync(typedoc_json_path, "utf-8")
    return JSON.parse(typedoc_data)
}




async function main() {
    const working_dir = "workspace"
    // const project = index_source_files("workspace/qrcode")
    // console.log(JSON.stringify(project, null, 2))

    const typedoc = await run_typedoc(path.join(working_dir, "DefinitelyTyped/types/qrcode"))
    writeFileSync(path.join(working_dir, "typedoc.json"), JSON.stringify(typedoc, null, 2))

    const static_urls = create_static_urls("workspace/qrcode", "qrcode", "1.5.0", typedoc)
    writeFileSync(path.join(working_dir, "static_urls.txt"), static_urls.join("\n"))
}

main()
    .catch(e => console.error(e))