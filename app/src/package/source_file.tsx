import {useParams} from "react-router-dom"
import target from "src/docsite/target"
import {PackageParams} from "src/package/module"
import {Page} from "src/app/page"
import {CodeBlock} from "src/component/code"


export function SourceFile() {
    const url_match = useParams<PackageParams>()
    const source_path = url_match["*"]!
    const identifier = "/stage/query-registry/" + source_path
    const inner = target[identifier] as any as string
    return <Page>
        <CodeBlock line_numbers={true} code={inner} language="typescript" id="source"/>
    </Page>
}
