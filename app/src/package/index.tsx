import {Navigate, useParams} from "react-router-dom"
import * as target from "src/target"
import {tokenize} from "src/tokenize"
import typedoc from "../../stage/typedoc.json"
import {DarkModeToggle} from "src/app/theme_context"
import {ReactChild} from "react"
import {Sidebar} from "src/package/sidebar"
import {extract} from "src/package/extract"
import {CodeObject} from "src/package/type"

interface BasePackageParams extends Record<string, string | undefined> {
    package: string | undefined
}

export interface PackageParams extends BasePackageParams {
    version: string
}


interface IntroductionProps {
    examples: ReactChild[][]
    package: string
    version: string
    comment: ReactChild[],
}

export function Introduction(props: IntroductionProps) {
    return <div>
        <div className="border-b-2 flex justify-between">
            <h1 className="text-bold text-2xl inline-block">
                {props.package}
            </h1>
            <a href={`/${props.package}/${props.version}/src/index.ts#source.100`}
               className="link">[src]</a>
        </div>
        <div className="mt-3" children={props.comment}/>
        <div className="mt-6">
            <h3 className="text-bold text-xl border-b">Examples</h3>
            {props.examples.map((example, i) => <div key={i} className="mt-2 mb-6" children={example}/>)}
        </div>
    </div>
}

interface SectionProps {
    package: string
    version: string
    title: string,
    type: string,
    items: CodeObject[],
}

export function Section(props: SectionProps) {
    return <div className="mb-4">
        <h3 className="text-bold text-xl border-b">{props.title}</h3>
        <div className="grid-cols-4 grid space-y-1">
            {props.items.map(c => <>
                    <a className="link" key={c.name}
                       href={`/${props.package}/${props.version}/${props.type}/${c.name}`}>
                        {c.name}
                    </a>
                    <div className="col-span-3">{c.comment?.shortText}</div>
                </>
            )}
        </div>
    </div>
}

export function Package() {
    const params = useParams<PackageParams>()

    const comment = tokenize(typedoc.comment.shortText)

    const examples = typedoc.comment.tags.filter(tag => tag.tag === "example")
        .map(tag => tokenize(tag.text))

    const {classes, functions, constants, interfaces} = extract()

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
                <Introduction version={params.version!} package={params.package!} examples={examples}
                              comment={comment}/>
                <Section title="Classes" items={classes} type="class" package={params.package!}
                         version={params.version!}/>
                <Section title="Functions" items={functions} type="function" package={params.package!}
                         version={params.version!}/>
                <Section title="Interfaces" items={interfaces} type="constant" package={params.package!}
                         version={params.version!}/>
                <Section title="Constants" items={constants} type="constant" package={params.package!}
                         version={params.version!}/>
            </div>
        </div>
    </div>
}

export function RedirectToLatest() {
    const params = useParams<BasePackageParams>()
    return <Navigate to={`/${params.package}/2.5.0`}/>
}

// interface SourceFileQuery extends Record<string, string> {
//     line: string
// }

export function SourceFile() {
    // const url_match = useParams<PackageParams>()
    // const query = useQuery<SourceFileQuery>()
    const inner = target.index
    return <div>
        <pre className="line-numbers linkable-line-numbers" id="source"><code
            className="language-typescript">{inner}</code></pre>
    </div>
}