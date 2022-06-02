import {Navigate, useParams} from "react-router-dom"
import {useQuery} from "src/app/page"
import * as importest from "src/importtest"
import {tokenize} from "src/tokenize"
import typedoc from "../../stage/typedoc.json"
import {DarkModeToggle} from "src/app/theme_context"

interface BasePackageParams extends Record<string, string | undefined> {
    package: string | undefined
}

interface PackageParams extends BasePackageParams {
    version: string
}


type CodeObject = typeof typedoc.children[number]

interface SidebarProps {
    package: string
    version: string
    classes: CodeObject[],
    functions: CodeObject[],
    constants: CodeObject[],
    interfaces: CodeObject[],
}


interface SidebarGroupProps {
    title: string
    package: string
    version: string
    items: CodeObject[]
}


export function SidebarGroup(props: SidebarGroupProps) {
    return <div className="mb-4">
        <h3 className="text-bold text-xl">{props.title}</h3>
        {props.items.map(c => <a className="block link ml-3" key={c.name}
                                   href={`/${props.package}/${props.version}/class/${c.name}`}>
            {c.name}
        </a>)}
    </div>
}


export function Sidebar(props: SidebarProps) {
    return <div className="bg-gray-300 p-2 dark:bg-gray-700 pt-4">
        <SidebarGroup title="Classes" package={props.package} version={props.version} items={props.classes}/>
        <SidebarGroup title="Functions" package={props.package} version={props.version} items={props.functions}/>
        <SidebarGroup title="Interfaces" package={props.package} version={props.version} items={props.interfaces}/>
        <SidebarGroup title="Constants" package={props.package} version={props.version} items={props.constants}/>
    </div>
}

export function Package() {
    const params = useParams<PackageParams>()

    const comment = tokenize(typedoc.comment.shortText)
    const groups = typedoc.groups

    const examples = typedoc.comment.tags.filter(tag => tag.tag === "example")
        .map(tag => tokenize(tag.text))

    const classes = typedoc.groups.find(group => group.kind === 128)?.children
        .map(child_idx => typedoc.children.find(child => child.id === child_idx)!) ?? []

    const functions = typedoc.groups.find(group => group.kind === 64)?.children
        .map(child_idx => typedoc.children.find(child => child.id === child_idx)!) ?? []

    const interfaces = typedoc.groups.find(group => [256, 4194304].includes(group.kind))?.children
        .map(child_idx => typedoc.children.find(child => child.id === child_idx)!) ?? []

    const constants = typedoc.groups.find(group => [32].includes(group.kind))?.children
        .map(child_idx => typedoc.children.find(child => child.id === child_idx)!) ?? []

    return <div className="flex flex-col w-full">
        <div className="bg-gray-400 dark:bg-gray-600 p-2">
            <a className="" href="/">Site-wide navigation</a>
        </div>
        <div className="flex">
            <Sidebar package={params.package!} version={params.version!} classes={classes}
                     functions={functions} constants={constants} interfaces={interfaces}
            />

            <div className="flex-grow p-4">
                <div className="flex justify-end">
                    <DarkModeToggle/>
                </div>
                <div className="border-b-2 flex justify-between">
                    <h1 className="text-bold text-2xl inline-block">
                        {params.package}
                    </h1>
                    <a href={`/${params.package}/${params.version}/src/index.ts#source.100`}
                       className="link">[src]</a>
                </div>
                <div className="mt-3" children={comment}/>
                <div className="mt-6">
                    <h3 className="text-bold text-xl border-b">Examples</h3>
                    {examples.map((example, i) => <div key={i} className="mt-2 mb-6" children={example}/>)}
                </div>
            </div>
        </div>
    </div>
}

export function RedirectToLatest() {
    const params = useParams<BasePackageParams>()
    return <Navigate to={`/${params.package}/2.5.0`}/>
}

interface SourceFileQuery extends Record<string, string> {
    line: string
}

export function SourceFile() {
    const url_match = useParams<PackageParams>()
    const query = useQuery<SourceFileQuery>()
    // const line = query ? parseInt(query.line) : undefined
    const inner = importest.index
    return <div>
        <pre className="line-numbers linkable-line-numbers" id="source"><code
            className="language-typescript">{inner}</code></pre>
    </div>
}