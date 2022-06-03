import {CodeIcon} from "@heroicons/react/solid"

interface Props {
    pkg: string
    version: string
    file: string
    line: number
}

export function SourceButton({pkg, version, file, line}: Props) {
    return <a href={`/${pkg}/${version}/file/${file}#source.${line}`}
       className="text-gray-400 hover:text-gray-600" >
        <CodeIcon className="w-6 mt-1"/>
    </a>
}