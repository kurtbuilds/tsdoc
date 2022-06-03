import {ReactChild} from "react"
import {Type} from "src/package/type"
import {infallible} from "@kurtbuilds/lib"

interface NextToken {
    content: string,
    regex_index: number,
    groups: string[],
}

export function get_next_token(comment: string, regexes: RegExp[]): NextToken {
    let idx_of_first_regex = -1
    let location_of_first_regex = comment.length
    let match_length = 0
    let groups: string[] = []
    for (let i = 0; i < regexes.length; i++) {
        const regex_result = regexes[i].exec(comment)
        if ((regex_result?.index ?? comment.length) < location_of_first_regex) {
            groups = regex_result?.map(x => x.toString()) ?? []
            idx_of_first_regex = i
            location_of_first_regex = regex_result!.index
            match_length = regex_result![0].length
        }
    }
    if (location_of_first_regex !== 0) {
        return {
            content: comment.slice(0, location_of_first_regex),
            groups,
            regex_index: -1,
        }
    } else {
        return {
            content: comment.slice(0, match_length),
            groups,
            regex_index: idx_of_first_regex,
        }
    }
}

export function tokenize(comment: string): ReactChild[] {
    comment = comment.trim()
    const regexes = [
        /```\n?(\w+)\n([\s\S]*?)```/m,
        /\n\n/m,
        /\n/m,
        /{@(\w+) (.*?)( \| (.*?))?}/m,
        /`(.*?)`/,
    ]
    const tokens: ReactChild[] = []

    let i = 0
    while (comment) {
        const next_token = get_next_token(comment, regexes)
        if (next_token.regex_index === 0) {
            tokens.push(<pre key={i} className="no-line-numbers"><code
                className="language-typescript">{next_token.groups[2]}</code></pre>)
        } else if (next_token.regex_index === 1) {
            tokens.push(<br key={i}/>)
        } else if (next_token.regex_index === 2) {
            tokens.push(" ")
        } else if (next_token.regex_index === 3) {
            tokens.push(<a key={i} href={next_token.groups[2]} className="link" target="_blank" referrerPolicy="no-referrer">{next_token.groups[4]}</a>)
        } else if (next_token.regex_index === 4) {
            tokens.push(<span key={i} className="code">{next_token.groups[1]}</span>)
        } else {
            tokens.push(next_token.content)
        }
        i += 1
        comment = comment.slice(next_token.content.length)
    }

    return tokens
}


function intersperse<T>(arr: T[], s: T) {
    return [...Array(2 * arr.length - 1)]
        .map((_, i) => 
            i % 2
                ? s 
                : arr[i / 2]
        )
}


interface Context {
    package: string,
    version: string,
}

export function tokenize_type(type: Type, context: Context): ReactChild {
    if (type.type === "intrinsic") {
        return type.name
    } else if (type.type === "reference") {
        if (type.typeArguments) {
            const middle = intersperse(type.typeArguments.map(x => tokenize_type(x, context)), ", ")
            return <span>{type.name}&lt;{middle}&gt;</span>
        } else {
            return <a key={type.name} className="hover:text-gray-400" href={`/${context.package}/${context.version}/interface/${type.name}`}>{type.name}</a>
        }
    } else if (type.type === "reflection") {
        return <span>Unsupported</span>
    } else {
        infallible(type)
    }
}