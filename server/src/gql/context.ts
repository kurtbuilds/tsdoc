import * as express from "express"
import { User } from "src/lib/db"
import {get_session_from_request, SessionId} from "src/auth/session.controller"
import {Uuid} from "share/gqltype"
import {getConnection} from "typeorm"


export class GraphQLContext {
    req: express.Request
    res: express.Response
    _user: User | null | undefined
    _user_uuid: Uuid | null | undefined
    _session_id: SessionId | null | undefined

    constructor(req: express.Request, res: express.Response) {
        this.req = req
        this.res = res
    }

    async user(): Promise<User | null> {
        if (this._user !== undefined) return this._user
        const uuid = await this.user_uuid()
        if (uuid === null) {
            this._user = null
        } else {
            this._user = await getConnection().getRepository(User).findOneOrFail(uuid)
        }
        return this._user
    }

    async user_uuid(): Promise<Uuid | null> {
        if (this._user_uuid !== undefined) return this._user_uuid
        const {session_id, user_uuid} = await get_session_from_request(this.req)
        this._user_uuid = user_uuid
        this._session_id = session_id
        return this._user_uuid
    }

    async user_uuid_or_fail(): Promise<Uuid> {
        const user_uuid = await this.user_uuid()
        if (user_uuid === null) throw new Error("User is not authenticated.")
        return user_uuid
    }

    async user_or_fail(): Promise<User> {
        const user = await this.user()
        if (user === null) throw new Error("User is not authenticated.")
        return user
    }

    async session_id(): Promise<SessionId | null> {
        if (this._session_id !== undefined) return this._session_id
        await this.user_uuid()
        return this._session_id!
    }
}