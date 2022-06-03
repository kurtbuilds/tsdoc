import {CodeIcon} from "@heroicons/react/solid"
import {Link} from "react-router-dom"
import {classes} from "src/component/util"
import {useEffect, useRef} from "react"

interface Props {
    pkg: string
    version: string
    file: string
    line: number
}

export function SourceButton({pkg, version, file, line}: Props) {
    return <Link to={`/${pkg}/${version}/file/${file}#source.${line}`}
                 className="text-gray-400 hover:text-gray-600">
        <CodeIcon className="w-6 mt-1"/>
    </Link>
}


interface CodeProps {
    code: string
    language: string
    line_numbers?: boolean
    well?: boolean
    id?: string
}

export function Code({code, language, line_numbers, well, id}: CodeProps) {
    if (line_numbers && !id) {
        throw new Error("line_numbers requires id")
    }
    const className = classes(
        line_numbers ? "line-numbers linkable-line-numbers" : "no-line-numbers",
        well ? "well" : "",
        `language-${language}`
    )
    const ref = useRef(null)

    useEffect(() => {
        (window as any).Prism.highlightElement(ref.current)
    }, [])

    return <pre className={className} id={id}>
        <code className={`language-${language}`} ref={ref}>
            {code}
        </code>
    </pre>
}
