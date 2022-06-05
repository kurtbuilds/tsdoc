import {PackageParams} from "src/package/module"
import {useParams} from "react-router-dom"
import {typedoc} from "src/libdoc/target"
import {extract_package} from "src/package/extract"
import {SourceButton} from "src/component/code"
import {Container} from "src/package/container"
import {Interface as InterfaceDeclaration} from "src/package/type"

interface ItemParams extends PackageParams {
    name: string
}


export function Interface() {
    const params = useParams<ItemParams>()

    const {classes, functions, constants, interfaces} = extract_package(typedoc)
    const item: InterfaceDeclaration = typedoc.children.find(i => i.name === params.name)! as any

    const {fileName, line} = item.sources![0]

    const kind = "interface"

    return <Container pkg={params.package!} version={params.version!} classes={classes}
                      functions={functions} constants={constants} interfaces={interfaces} name={item.name}>
        <div className="border-b-2 flex justify-between">
            <div className="flex-grow flex items-end font-mono">
                <div className="text-gray-500 mr-2 text-sm">{kind}</div>
                <h1 className="text-semibold text-xl inline-block">
                    {item.name}
                </h1>
            </div>
            <SourceButton pkg={params.package!} version={params.version!} file={fileName} line={line}/>
        </div>
    </Container>
}