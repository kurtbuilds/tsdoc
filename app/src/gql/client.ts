/***
 * This library provides a GraphQL client to fetch data from the server.
 */
import {timeout} from "src/lib/util"
import {Err, Ok, Result, unimplemented} from "@kurtbuilds/lib"
import {GQLQuery, GQLQueryDescription, gql_mutation, gql_query} from "src/gql/query"
export {gql_query, gql_mutation} from "./query"

const SUPPORT_EMAIL = import.meta.env.VITE_SUPPORT_EMAIL!

interface GQLExceptionInfo {
    stacktrace?: string[]
}

interface GQLErrorExtension {
    exception: GQLExceptionInfo & any
    variant?: "danger" | "success"
}

interface GQLErrorData {
    message: string,
    extensions?: GQLErrorExtension,
}

export class GQLError extends Error {
    constructor(error_data: GQLErrorData) {
        super(error_data.message)
    }
}


export class GQLErrorContainer extends Error {
    public errors: GQLError[]

    constructor(errors: GQLError[]) {
        super(errors.map(e => e.message).join("\n"))
        this.errors = errors
    }

    static from_gql_errors(error_data: GQLErrorData[]): GQLErrorContainer {
        return new GQLErrorContainer(error_data.map(e => new GQLError(e)))
    }

    static from_string(message: string): GQLErrorContainer {
        return new GQLErrorContainer([new GQLError({message})])
    }
}


interface RestOptions {
    method?: "GET" | "POST",
    body?: object,
}


export async function rest_fetch<RestData = any>(path: string, options?: RestOptions): Promise<Result<RestData, GQLErrorContainer>> {
    options = options ?? {}
    let res
    try {
        res = await timeout(10_000, fetch(path, {
            method: options.method ?? "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "same-origin",
            body: JSON.stringify(options.body ?? {})
        }))
    } catch (e) {
        // the request timed out or we couldn't connect to the server at all (e.g. server is down).
        return Err(GQLErrorContainer.from_string("There is a problem with your internet connection. Check your connection and try again."))
    }
    if (res.status === 500) {
        return Err(GQLErrorContainer.from_string(`There was a server error. Please try again later, or contact ${SUPPORT_EMAIL}`))
    } else if (res.status >= 400) {
        // TODO can we give a better error message??
        return Err(GQLErrorContainer.from_string("Client error."))
    }
    const data = await res.json()
    return Ok(data as RestData)
}


export async function gql_fetch<T = any>(query: string, variables?: Record<string, any>): Promise<Result<T, GQLErrorContainer>> {
    const body = {query, variables}
    let res
    try {
        res = await timeout(10_000, fetch("/gql", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "same-origin",
            body: JSON.stringify(body)
        }))
    } catch (e) {
        // the request timed out or we couldn't connect to the server at all (e.g. server is down).
        return Err(GQLErrorContainer.from_string("There is a problem with your internet connection. Check your connection and try again."))
    }
    if (res.status === 500) {
        return Err(GQLErrorContainer.from_string(`There was a server error. Please try again later, or contact ${SUPPORT_EMAIL}`))
    }
    const {data, errors} = await res.json()
    if (errors) {
        return Err(GQLErrorContainer.from_gql_errors(errors))
    } else {
        return Ok(data)
    }
}


interface GQLResult<T> {
    data?: T
    errors?: GQLError[]
}

interface GqlFetchOptions {
    cache: boolean
}

export async function gql_fetch2<T = any>(query: string, variables?: Record<string, any>, _opts?: GqlFetchOptions): Promise<GQLResult<T>> {
    const body = {query, variables}
    // let key: string
    // if (opts?.cache ?? true) {
    //     key = JSON.stringify([query, variables])
    //     const cached_value = CACHE.get(key)
    //     console.log("checking cache", key, cached_value)
    //     if (cached_value) {
    //         return {data: JSON.parse(cached_value)}
    //     }
    // }
    let res
    try {
        // await delay(FAKE_DELAYS)
        res = await timeout(10_000, fetch("/gql", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "same-origin",
            body: JSON.stringify(body)
        }))
    } catch (e) {
        return {
            errors: [new GQLError({
                message: "There is a problem with your internet connection. Check your connection and try again."
            })]
        }
    }
    if (res.status === 500) {
        return {
            errors: [new GQLError({
                message: `There was a server error. Please try again later, or contact ${SUPPORT_EMAIL}`
            })]
        }
    }
    const {data, errors} = await res.json()
    if (errors) {
        return {
            errors: errors.map((e: any) => new GQLError(e))
        }
    } else {
        // if (opts?.cache ?? true) {
        //     CACHE.set(key!, JSON.stringify(data))
        // }
        return {data}
    }
}

type GQLResponse<T> = {
    [P in keyof T]: any
}


export async function gql_fetch3<D extends GQLQueryDescription>(query: GQLQuery<D>, variables?: Record<string, any>, opts?: GqlFetchOptions): Promise<GQLResult<GQLResponse<D>>> {
    let query2
    if ("query" in query) {
        query2 = gql_query(query.query)
    } else if ("mutation" in query) {
        query2 = gql_mutation(query.mutation)
    } else {
        unimplemented()
    }
    return gql_fetch2(query2, variables, opts)
}