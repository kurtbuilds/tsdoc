import {randomBytes} from "crypto"
import {ENV} from "@kurtbuilds/env"
import {Not} from "typeorm"
import {Request, Response} from "express"

import {Session} from "./session.model"
import {Err, Ok, Result} from "@kurtbuilds/lib"
import {getConnection} from "typeorm"
import * as JWT from "jsonwebtoken"
import {parameterize_url} from "src/lib/util"
import {Uuid} from "share/gqltype"

export type SessionId = string

const SESSION_COOKIE_KEY = "sid"
const JWT_SECRET = Buffer.from(ENV.JWT_SECRET, "base64")
const HOSTNAME = ENV.REACT_HOSTNAME
const SECURE = HOSTNAME.startsWith("https:")


function create_session_id() {
    return randomBytes(30).toString("base64")
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
}


async function create_session(user_uuid: Uuid, user_agent: string, ip_address: string): Promise<Session> {
    const session = new Session()
    session.session_id = create_session_id()
    session.user_uuid = user_uuid
    session.last_accessed_at = new Date()
    session.user_agent = user_agent
    session.ip_address = ip_address
    return getConnection().getRepository(Session).save(session)
}


/**
 * Create a jwt token to authenticate the user.
 * @param user_uuid
 * @param expiresIn Seconds. 60 * X is X minutes. 60*60*24*X is X days.
 */
function generate_token(user_uuid: Uuid, expiresIn: number) {
    return  JWT.sign({
        user_uuid,
    }, JWT_SECRET, { expiresIn })
}


export function generate_login_link(user_uuid: Uuid, next: string | null): string {
    const token = generate_token(user_uuid, 60 * 10)
    return parameterize_url(HOSTNAME + "/login", {
        token,
        next: next ?? "/budget"
    })
}


export function get_user_uuid_from_token(jwt: string): Result<Uuid, Error> {
    try {
        const payload: any = JWT.verify(jwt, JWT_SECRET, {
            algorithms: ["HS256"]
        })
        return Ok(payload.user_uuid)
    } catch (e) {
        return Err(e as Error)
    }
}


export type SessionInfo = {
    session_id: SessionId | null,
    user_uuid: Uuid | null,
}

async function get_session_user(sid: SessionId): Promise<SessionInfo | undefined> {
    const r = await getConnection().getRepository(Session).createQueryBuilder()
        .update(Session, {last_accessed_at: new Date()})
        .where("session_id=:session_id", {session_id: sid})
        .andWhere("revoked_at is null")
        .returning(["session_id", "user_uuid"])
        .execute()
    if (r.raw.length) {
        return r.raw[0]
    } else {
        return undefined
    }
}


export async function clear_other_sessions(user_uuid: Uuid, sid: SessionId): Promise<number> {
    const r = await getConnection().getRepository(Session).update({
        user_uuid,
        session_id: Not(sid),
        revoked_at: null,
    }, {
        revoked_at: new Date(),
    })
    return r.affected ?? 0
}


export async function get_session_from_request(req: Request): Promise<SessionInfo> {
    const sid = (req.cookies ?? {})[SESSION_COOKIE_KEY]
    let info: SessionInfo = {
        session_id: null,
        user_uuid: null,
    }
    if (sid) {
        info = await get_session_user(sid) ?? info
    }
    return info
}


export async function get_user_uuid_from_request(req: Request): Promise<Uuid> {
    const ses = await get_session_from_request(req)
    if (!ses.user_uuid) {
        throw new Error("Not logged in.")
    }
    return ses.user_uuid!
}


export async function list_active_sessions(user_uuid: Uuid): Promise<Session[]> {
    return getConnection().getRepository(Session).find({
        where: {
            user_uuid,
            revoked_at: null
        },
        order: { last_accessed_at: "DESC" }
    })
}


export async function clear_session(sid: SessionId, res: Response) {
    await getConnection().getRepository(Session).update(sid, {
        revoked_at: new Date(),
    })
    res.clearCookie(SESSION_COOKIE_KEY)
}


export async function store_session(user_uuid: Uuid, req: Request, res: Response) {
    const user_agent = req.header("User-Agent") ?? ""
    const ip_address = req.headers["x-forwarded-for"] as string || req.connection.remoteAddress as string || ""
    const session = await create_session(user_uuid, user_agent, ip_address)
    res.cookie(SESSION_COOKIE_KEY, session.session_id, {
        expires: new Date(+new Date() + (1000 * 60 * 60 * 24 * 365)),
        httpOnly: true,
        secure: SECURE,
        sameSite: "lax",
    })
}