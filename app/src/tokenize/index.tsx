import {ReactChild} from "react"

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
    ]
    const tokens: ReactChild[] = []

    while (comment) {
        const next_token = get_next_token(comment, regexes)
        if (next_token.regex_index === 1) {
            tokens.push(<br/>)
        } else if (next_token.regex_index === 2) {
            tokens.push(" ")
        } else if (next_token.regex_index === 3) {
            tokens.push(<a href={next_token.groups[2]}>{next_token.groups[4]}</a>)
        } else if (next_token.regex_index === 0) {
            tokens.push(<pre className="no-line-numbers"><code className="language-typescript">{next_token.groups[2]}</code></pre>)
        } else {
            tokens.push(next_token.content)
        }
        comment = comment.slice(next_token.content.length)
    }

    return tokens
}
