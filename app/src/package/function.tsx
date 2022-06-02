import {DarkModeToggle} from "src/app/theme_context"
import {PackageParams} from "src/package/index"
import {useParams} from "react-router-dom"
import {tokenize} from "src/tokenize"
import {typedoc} from "src/target"
import {extract, extract_item} from "src/package/extract"
import {Sidebar} from "src/package/sidebar"

interface ItemParams extends PackageParams {
    name: string
}

export function Function() {
    const params = useParams<ItemParams>()

    const {classes, functions, constants, interfaces} = extract()
    const item = typedoc.children.find(i => i.name === params.name)!

    const extracted = extract_item(item)
    const comment_data = item.signatures![0].comment
    const comment = tokenize(comment_data.shortText)
    const examples = comment_data.tags.filter(tag => tag.tag === "example")
        .map(tag => tokenize(tag.text))

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
                    <div className="flex-grow flex items-end">
                        <div className="text-gray-500 mr-1">{item.kindString.toLowerCase()}</div>
                        <h1 className="text-bold text-2xl inline-block flex-grow">
                            {item.name}
                        </h1>
                    </div>
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