import * as db from "src/lib/db";
import * as gql from "share/gqltype";
import {SessionId} from "src/auth/session.controller";

export function user(user: db.User): gql.User {
    return {
        ...user,
    }
}

export function session(s: db.Session, current_sid: SessionId): gql.Session {
    return {
        ...s,
        last_accessed_at: s.last_accessed_at.toISOString(),
        self: s.session_id === current_sid,
    }
}