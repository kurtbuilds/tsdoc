import {useNavigate} from "react-router-dom"
import {parameterize_url, safe_exec} from "src/lib/util"
import {LandingContainer, SearchBar} from "src/tsdoc/landing"
import libdoc_index from "../libdoc-index.json"
import React, {useEffect, useState} from "react"
import {useQuery} from "src/app/page"


export function Search() {
    const url_query = useQuery<{ q?: string }>()
    const navigate = useNavigate()

    const [submit_package, set_submit_package] = useState<string>(url_query.q ?? "")

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


    const on_submit_job = (query: string) => {
        console.log("submit job", query)
        navigate("/builds")
    }

    let results
    if (!result_data.length) {
        results = <div>
            <div className="text-center mt-6 text-gray-500">
                No results found.
            </div>
            <div className="mt-6 text-semibold text-xl">Should there be results?</div>
            <div className="mt-6">
                <p>We haven't generated docs for every Typescript library yet!</p>
                <p>Help us out by adding this library.</p>
            </div>
            <div className="mt-6 flex items-center">
                <div className="font-bold mr-1">Package Name (or NPM URL)</div>
                <SearchBar className="flex-grow" initial={url_query.q}
                       placeholder="Package name or NPM URL..." onSubmit={on_submit_job}
                />
            </div>
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
        <SearchBar onSubmit={onSubmit} initial={url_query.q} className="max-w-xl mx-auto mt-6"/>
        <div className="max-w-xl w-full mx-auto">
            {results}
        </div>
    </LandingContainer>
}