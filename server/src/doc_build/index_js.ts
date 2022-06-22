import path from "path"
import {Expression, Project, SourceFile, SyntaxKind} from "ts-morph"
import {readFileSync} from "fs"


interface Item {
    type: "class" | "function" | "interface" | "constant"
    name: string,
    path: string,
    line: number,
}

interface Require {
    type: "require"
    path: string
}

interface ExportMap {
    type: "map"

    [key: string]: Exportable | "map"
}

type Exportable = Require | Item | ExportMap

interface Module {
    path: string,
    exports: Exportable
}

interface JavascriptProject {
    entry_point: string,
    modules: Record<string, Module>
}


function relative_filepath(prefix: string, source: SourceFile): string {
    return source.getFilePath().slice(prefix.length + 1)
}


function is_require(node: Expression | undefined): string | undefined {
    if (!node) {
        return undefined
    }
    const call = node.asKind(SyntaxKind.CallExpression)
    if (call && call.getChildAtIndex(0).asKind(SyntaxKind.Identifier)!.getText(false) === "require") {
        return call.getArguments()[0].asKind(SyntaxKind.StringLiteral)!.getLiteralValue()
    }
}


function get_exports(file: SourceFile, path: string): Record<string, Exportable> | Exportable {
    let exports = {type: "map"} as Record<string, Exportable> | Exportable
    for (const statement of file.getStatements()) {
        if (statement.getChildCount() === 0) {
            continue
        }
        const child = statement.getChildAtIndex(0)
        const expressionStatement = child.asKind(SyntaxKind.BinaryExpression)
        if (expressionStatement) {
            if (["==", "==="].includes(expressionStatement.getOperatorToken().getText())) {
                continue
            }
            const assign = expressionStatement.getLeft().getText(false)
            if (assign === "module.exports") {
                const right = expressionStatement.getRight()
                const require = is_require(right)
                if (require) {
                    exports = {
                        type: "require",
                        path: require,
                    }
                    continue
                }
                const fn_declaration = right.asKind(SyntaxKind.FunctionExpression)
                if (fn_declaration) {
                    exports = {
                        type: "function",
                        name: fn_declaration.getName() ?? "",
                        path,
                        line: fn_declaration.getStartLineNumber(),
                    }
                }
            } else if (assign.startsWith("exports.")) {
                const value = assign.slice("exports.".length)
                if (exports.type !== "map") {
                    exports = {type: "map"}
                }
                // TODO this is incomplete.
                exports[value] = {
                    type: "function",
                    name: value,
                    path,
                    line: expressionStatement.getChildAtIndex(0).getStartLineNumber(false),
                }
            }
        }
    }
    return exports
}

export function get_entry_point(project_path: string): string {
    const package_json = readFileSync(path.join(project_path, "package.json"), "utf-8")
    const package_meta = JSON.parse(package_json)
    // source is the source of the entry point. Example: https://github.com/velut/node-query-registry/blob/main/package.json#L7
    // TODO we don't currently support configuring whether we want browser entrypoint right now
    return package_meta.source ?? package_meta.main
}


/** Creates an index of exports of *javascript* files.
 * Use this for source map of the .d.ts files back to the Javascript files.
 *
 * In theory, the code should work for Typescript, but that's not what it's aimed at.
 * @param project_path
 */
export function index_source_files(project_path: string): JavascriptProject {
    const project = new Project()
    project.addSourceFilesAtPaths(path.join(project_path, "**/*.{js,ts}"))
    project.resolveSourceFileDependencies()
    const prefix = path.join(process.cwd(), project_path)
    const entry_point = get_entry_point(project_path)

    const files = project.getSourceFiles()

    const modules: Record<string, Module> = {}
    for (const file of files) {
        const path = relative_filepath(prefix, file)

        const exports = get_exports(file, path)
        modules[path] = {
            path,
            exports,
        } as Module
    }
    Object.keys(modules).forEach(key => {
        const module = modules[key]
        if (module.exports.type === "require") {
            const relative_path = path.join(path.dirname(key), module.exports.path + ".js")
            modules[key] = Object.assign({}, modules[relative_path])
            modules[key].path = module.path
        }
    })
    return {
        modules,
        entry_point,
    }
}