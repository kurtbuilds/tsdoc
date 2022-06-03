import {useParams} from "react-router-dom"
import * as target from "src/target"
import {PackageParams} from "src/package/index"

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

    console.log(identifier)
    //@ts-ignore
    const inner = target[identifier]
    console.log(inner)
    return <div>
        <pre className="line-numbers linkable-line-numbers" id="source"><code
            className="language-typescript">{inner}</code></pre>
    </div>
}