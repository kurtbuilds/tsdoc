import {PackageParams} from "src/package/module"
import {useParams} from "react-router-dom"
import {tokenize, tokenize_type} from "src/tokenize"
import {typedoc} from "src/target"
import {extract_package, normalize_filepath} from "src/package/extract"
import {SourceButton} from "src/component/code"
import {Container} from "src/package/container"
import {Func} from "src/package/type"

interface ItemParams extends PackageParams {
    name: string
}


export function Function() {
    const params = useParams<ItemParams>()

    const {classes, functions, constants, interfaces} = extract_package(typedoc)
    const item: Func = typedoc.children.find(i => i.name === params.name)! as any

    const signature = item.signatures![0]
    const comment_data = signature.comment
    const comment = tokenize(comment_data.shortText)
    const examples = comment_data?.tags?.filter(tag => tag.tag === "example")
        .map(tag => tokenize(tag.text)) ?? []

    const {fileName, line} = item.sources![0]
    const source_path = normalize_filepath(fileName)

    let kind = item.kindString?.toLowerCase()
    if ((signature.type as any).name === "Promise") {
        kind = "async " + kind
    }

    const context = {
        package: params.package!,
        version: params.version!,
    }
    const fn_args = signature?.parameters?.map(p => {
        return [p.name, tokenize_type(p.type, context)]
    }).join(", ")

    const return_type = tokenize_type(signature.type, context)

    return <Container pkg={params.package!} version={params.version!} classes={classes}
                      functions={functions} constants={constants} interfaces={interfaces} name={item.name}>
        <div className="border-b-2 flex justify-between">
            <div className="flex-grow flex items-end font-mono flex-wrap">
                <span className="text-gray-500 mr-2 word">{kind}</span>
                <h1 className="text-semibold inline">
                    {item.name}
                </h1>
                <span className="inline">({fn_args})</span>
                <span className="inline">: {return_type}</span>
            </div>
            <SourceButton pkg={params.package!} version={params.version!} file={source_path} line={line}/>
        </div>
        <div className="mt-3" children={comment}/>
        <div className="mt-6">
            <h3 className="text-bold text-xl border-b">Examples</h3>
            {examples.map((example, i) => <div key={i} className="mt-2 mb-6 w-full well" children={example}/>)}
        </div>
    </Container>
}