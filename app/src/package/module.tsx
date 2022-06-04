import {Link, Navigate, useParams} from "react-router-dom"
import {tokenize} from "src/tokenize"
import typedoc from "../../stage/typedoc.json"
import {DarkModeToggle} from "src/app/theme_context"
import {ReactChild} from "react"
import {extract_package} from "src/package/extract"
import {CodeIcon} from "@heroicons/react/solid"
import {Item} from "src/package/type"
import {Container} from "src/package/container"

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
            <a href={`/${props.package}/${props.version}/file/src/index.ts`}
               className="text-gray-400 hover:text-gray-600"><CodeIcon className="w-6 mt-1"/></a>
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
    items: Item[],
}

export function Section(props: SectionProps) {
    return <div className="mb-4">
        <h3 className="text-bold text-xl border-b">{props.title}</h3>
        <div className="grid-cols-4 grid space-y-1">
            {props.items.map((c, i) => {
                    const description = tokenize(c.comment?.shortText ?? "")
                    return [
                        <Link className="link" key={c.name}
                           to={`/${props.package}/${props.version}/${props.type}/${c.name}`}>
                            {c.name}
                        </Link>,
                        <div className="col-span-3" key={i}>{description}</div>
                    ]
                }
            ).flat()}
        </div>
    </div>
}


export function Package() {
    const params = useParams<PackageParams>()

    const comment = tokenize(typedoc.comment.shortText)

    const examples = typedoc.comment.tags.filter(tag => tag.tag === "example")
        .map(tag => tokenize(tag.text))

    const {classes, functions, constants, interfaces} = extract_package(typedoc)

    return <Container pkg={params.package!} version={params.version!} classes={classes}
                      constants={constants} interfaces={interfaces} functions={functions} name={params.package!}>
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
    </Container>
}

export function RedirectToLatest() {
    const params = useParams<BasePackageParams>()
    return <Navigate to={`/${params.package}/2.5.0`}/>
}