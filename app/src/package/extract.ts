import {typedoc} from "src/target"
import {Class, Constant, Func, Interface, Item, Property} from "src/package/type"


interface ExtractResult {
    classes: Class[]
    interfaces: Interface[]
    constants: Constant[]
    functions: Func[]
}

export function extract_package(): ExtractResult {
    //@ts-ignore
    const classes: CodeObject[] = typedoc.groups.find(group => group.kind === 128)?.children
        .map(child_idx => typedoc.children.find(child => child.id === child_idx)!) ?? []
    //@ts-ignore
    const functions: CodeObject[] = typedoc.groups.find(group => group.kind === 64)?.children
        .map(child_idx => typedoc.children.find(child => child.id === child_idx)!) ?? []
    //@ts-ignore
    const interfaces: CodeObject[] = typedoc.groups.find(group => [256, 4194304].includes(group.kind))?.children
        .map(child_idx => typedoc.children.find(child => child.id === child_idx)!) ?? []
    //@ts-ignore
    const constants: CodeObject[] = typedoc.groups.find(group => [32].includes(group.kind))?.children
        .map(child_idx => typedoc.children.find(child => child.id === child_idx)!) ?? []

    return {classes, functions, interfaces, constants}
}


interface ExtractItemResult {
    constructors: unknown[],
    methods: unknown[],
    properties: Property[],
}


export function extract_function(item: Func): ExtractItemResult {
    const children = item.children ?? [] as unknown[]

    const constructors = children.filter(child => child.kind === 512)
    const properties = children.filter(child => child.kind === 1024) as Property[]
    const methods = children.filter(child => child.kind === 2048)
    return {constructors, methods, properties}
}

export function extract_interface(item: Interface): {properties: Property[]} {
    const children = item.children ?? [] as unknown[]

    const properties = children.filter(child => child.kind === 1024) as Property[]
    return {properties}
}

export function normalize_filepath(path: string): string {
    return path.split("/").slice(2).join("/")
}