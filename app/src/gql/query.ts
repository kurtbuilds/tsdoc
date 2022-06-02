/***
 * This library creates an API where you can write GQL queries without remembering the custom GraphQL syntax.
 * For example, instead of:
 *
 * const log_in_password = `mutation log_in_password($email: String!, $password: String!) {
 *     log_in_password(email: $email, password: $password) {
 *         ${USER_FIELDS}
 *     }
 * }`
 *
 * You can write:
 *
 * const log_in_password = gql_mutation({
 *     log_in_password: {
 *          fields: USER_FIELDS,
 *          args: {email: String, password: String}
 *     }
 * })
 */

/**
 * Defines permissible variable types for a JSON blob representing a GraphQL query.
 */
type GQLVariableType = typeof String | typeof Boolean | "id" | string

/**
 * This function is used by compose_gql_query to translate various Typescript types into GQL types.
 * @param s
 */
function convert_variable_type(s: GQLVariableType): string {
    switch (s) {
    case String:
        return "String!"
    case Boolean:
        return "Boolean!"
    case "id":
        return "ID!"
    default:
        return s as string
    }
}


type GQLQueryVariables = Record<string, GQLVariableType>

interface GQLQueryArguments {
    args?: GQLQueryVariables
    fields: string
}

export type GQLQueryDescription = Record<string, string | GQLQueryArguments>
export type GQLQuery<D=GQLQueryDescription> = {query: D} | {mutation: D}

function compose_query_variables(variables: GQLQueryVariables) {
    const var_names = Object.keys(variables || {})
    if (var_names.length === 0) return ""
    const inside = var_names.map(name => {
        return `$${name}: ${convert_variable_type(variables![name])}`
    }).join(", ")
    return `(${inside})`
}


function compose_gql_query(query_type: "query" | "mutation", all_description: GQLQueryDescription) {
    const query_names = Object.keys(all_description)
    const all_variables: GQLQueryVariables = {}
    const all_queries_text = query_names.map(query => {
        const query_description = all_description[query]
        let fields: string[]
        let args: GQLQueryVariables
        if (typeof query_description === "string") {
            fields = query_description.split(/\s+/)
            args = {}
        } else {
            fields = query_description.fields.split(/\s+/)
            args = query_description.args || {}
        }
        Object.assign(all_variables, args)
        let field_text = fields.join("\n")
        field_text = field_text ? "{" + field_text + "}" : ""
        const arg_names = Object.keys(args)
        let arg_text = arg_names.map(name => `${name}: $${name}`).join(", ")
        arg_text = arg_text ? "(" + arg_text + ")" : ""
        return `${query}${arg_text} ${field_text}`
    })
    return `${query_type} ${query_names[0]}${compose_query_variables(all_variables)} {
${all_queries_text}
}`
}


/**
 * Creates a GQL query from a JSON object. Example:
 gql_query({log_in_user: "id name"})
 gql_query({log_in_user: {fields: "id name"}})
 gql_query({log_in_password: {fields: "id name", args: {email: String, password: String}}})
 * @param description
 */
export function gql_query<D extends GQLQueryDescription>(description: D): string {
    return compose_gql_query("query", description)
}


/**
 * @param description
 */
export function gql_mutation<D extends GQLQueryDescription>(description: D): string {
    return compose_gql_query("mutation", description)
}

export function gql_mutation2<D extends GQLQueryDescription>(description: D): GQLQuery<D> {
    return {mutation: description}
}

export function gql_query2<D extends GQLQueryDescription>(description: D): GQLQuery<D> {
    return {query: description}
}