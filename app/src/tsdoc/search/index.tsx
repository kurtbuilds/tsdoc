import {useNavigate} from "react-router-dom"
import {parameterize_url, safe_exec} from "src/lib/util"
import {LandingContainer, SearchBar} from "src/tsdoc/landing"
import libdoc_index from "../docsite-index.json"
import React, {useEffect, useState} from "react"
import {useQuery} from "src/app/page"
import {gql_fetch3} from "src/gql"
import {GQLQuery} from "src/gql/query"

const query = {
    mutation: {
        create_docs_build: {
            args: {package: String},
            fields: "build_id",
        }
    }
} as GQLQuery

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


    const on_submit_job = (q: string) => safe_exec(async () => {
        await gql_fetch3(query, {package: q})
        navigate("/builds")
    })

    let results
    if (!result_data.length) {
        results = <div>
            <div className="text-center mt-6 text-gray-700 dark:text-gray-300">
                No results found. 😔 Think there should be?
            </div>
            <div className="mt-6 max-w-sm mx-auto">
                <p>We haven't generated docs for every Typescript library yet!
                   Help us out by adding this library.</p>
            </div>
            <div className="mt-6 flex flex-col items-center max-w-sm mx-auto">
                <div className="font-bold mr-1">Package Name (or NPM URL)</div>
                <SearchBar className="flex-grow w-full" initial={url_query.q} button={true}
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