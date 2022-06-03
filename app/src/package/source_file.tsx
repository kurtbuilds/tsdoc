import {useParams} from "react-router-dom"
import * as target from "src/target"
import {PackageParams} from "src/package/module"
import {Page} from "src/app/page"

export function SourceFile() {
    const url_match = useParams<PackageParams>()
    const source_path = url_match["*"]!
    let identifier = source_path
        .split("/")
        .slice(1)
        .join("/")
        .replaceAll("/", "_")
        .replaceAll("-", "_")
    identifier = identifier.slice(0, -(identifier.split(".")[1].length + 1))

    //@ts-ignore
    const inner = target[identifier]
    return <Page>
        <pre className="line-numbers linkable-line-numbers" id="source"><code
            className="language-typescript">{inner}</code></pre>
    </Page>
}