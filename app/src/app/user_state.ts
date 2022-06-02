import {entity} from "simpler-state"
import * as gql from "share/gqltype"

export const UserState = entity<gql.User | null>(null)

export function log_out() {
    UserState.set(null)
}

export function set_user(u: gql.User) {
    UserState.set(u)
}

export const USER_FIELDS = `
uuid
email
`