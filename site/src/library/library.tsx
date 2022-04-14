import {useEffect} from "preact/compat"
import { NotFound } from "src/app/not_found"
import {LIBRARIES} from "src/library/index"
import {Redirect} from "wouter-preact"

interface LibraryProps {
    params: {library: string}
}

export function Library({params}: LibraryProps) {
    const lib = LIBRARIES.find(l => l.name === params.library)
    if (lib === undefined) {
        return <NotFound/>
    }
    return <div>
        <h1>Library {lib.name}</h1>
    </div>

}