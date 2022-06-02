import {typedoc} from "src/target"
import {CodeObject} from "src/package/type"


export function extract() {
    const classes = typedoc.groups.find(group => group.kind === 128)?.children
        .map(child_idx => typedoc.children.find(child => child.id === child_idx)!) ?? []
    const functions = typedoc.groups.find(group => group.kind === 64)?.children
        .map(child_idx => typedoc.children.find(child => child.id === child_idx)!) ?? []
    const interfaces = typedoc.groups.find(group => [256, 4194304].includes(group.kind))?.children
        .map(child_idx => typedoc.children.find(child => child.id === child_idx)!) ?? []
    const constants = typedoc.groups.find(group => [32].includes(group.kind))?.children
        .map(child_idx => typedoc.children.find(child => child.id === child_idx)!) ?? []

    return {classes, functions, interfaces, constants}
}


interface ExtractItemResult {
    constructors: CodeObject[],
    methods: CodeObject[],
    properties: CodeObject[],
}


export function extract_item(item: CodeObject): ExtractItemResult {
    const children = item.children ?? [] as CodeObject[]

    const constructors = children.filter(child => child.kind === 512)
    const properties = children.filter(child => child.kind === 1024)
    const methods = children.filter(child => child.kind === 2048)
    return {constructors, methods, properties}
}