export interface CommentTag {
    tag: string
    text: string
}

export interface Comment {
    shortText: string
    tags: CommentTag[]
}

export interface Func extends BaseDeclaration {
    kind: 64,
    kindString: "Function",
    signatures: Signature[]
    sources: Source[]
    children: Item[]
    // comment apparently live on the signatures
    comment: undefined
}

export interface Project extends BaseDeclaration {
    id: number,
    kind: 1,
    kindString: "Project",
    flags: Flags,
    comment: Comment,
    originalName: "",
    children: Item[]
    sources: Source[]
    groups: unknown[]
}

export interface Signature {
    comment: Comment
    // return type
    type: Type,
    parameters: Parameter[]
}

export interface Parameter extends BaseDeclaration {
    flags: Flags,
    type: Type,
    defaultValue: unknown
}

export interface Source {
    fileName: string
    line: number
}

export interface Flags {
    isOptional?: boolean
    isReadonly?: boolean
    isConst?: boolean
}

export interface BaseDeclaration {
    id: number,
    name: string,
    kind: number,
    kindString: string,
}

export interface ReflectionDeclaration extends BaseDeclaration {
    type: "reflection"
    flags: Flags,
    children: DeclarationComponent[]
}

export interface DeclarationComponent extends BaseDeclaration {
    flags: Flags,
    sources: Source[],
    type: Type,
}

interface IntrinsicType {
    type: "intrinsic"
    name: "boolean" | "number" | "string",
}

interface TypeReference {
    type: "reference"
    id: number
    name: string
    typeArguments?: Type[]
}

export interface Class extends BaseDeclaration {
    comment: Comment
    children: ClassChild[]
    sources: Source[]
}

export interface Interface extends BaseDeclaration {
    kind: 256,
    comment: Comment
    children: InterfaceChild[]
    sources: Source[]
}

export interface ClassChild extends BaseDeclaration {
    flags: Flags,
}

export interface InterfaceChild extends BaseDeclaration {
    flags: Flags,
}

export interface Constant extends BaseDeclaration {
    flags: Flags,
    comment: Comment,
    sources: Source[]
    type: Type,
    defaultValue: unknown
}

export interface Property extends BaseDeclaration {
    kind: 1024,
    kindString: "Property",
    flags: Flags,
    comment: Comment,
    sources: Source[]
    type: Type,
    inheritedFrom?: Type,
}

export type Type = IntrinsicType | TypeReference | ReflectionDeclaration
export type Item = Class | Interface | Constant | Func

export interface BasePackageParams extends Record<string, string | undefined> {
    package: string | undefined
}