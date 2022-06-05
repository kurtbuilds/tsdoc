import {useNavigate} from "react-router-dom"
import {parameterize_url, safe_exec} from "src/lib/util"
import {LandingContainer, SearchBar} from "src/tsdoc/landing"
import libdoc_index from "../libdoc-index.json"
import React, {useEffect, useState} from "react"
import {useQuery} from "src/app/page"


export function Search() {
    const url_query = useQuery<{ q?: string }>()
    const navigate = useNavigate()
    const [result_data, set_result_data] = useState<{
        name: string,
        path: string
    }[]>([])

    const onSubmit = (query: string) => {
        navigate(parameterize_url(location.pathname, {q: query}))
    }

    const fetch_data = async (query: string) => {
        set_result_data(libdoc_index
            .libraries
            .filter(x => x.name.includes(query))
        )
    }

    useEffect(() => {
        const qs = url_query.q ?? ""
        safe_exec(() => fetch_data(qs))
    }, [url_query.q])


    let results
    if (!result_data.length) {
        results = <div className="text-center">
            No results found.
        </div>
    } else {
        results = <div>
            {result_data.map(x => <div key={x.name}>
                <a className="link" href={x.path}>{x.name}</a>
            </div>)}
        </div>
    }

    return <LandingContainer>
        Search Results
        <SearchBar onSubmit={onSubmit} initial={url_query.q}/>
        <div className="max-w-xl w-full mx-auto">
            <h3 className="text-xl font-semibold mt-6">Results</h3>
            {results}
        </div>
    </LandingContainer>
}