import { Request, Response } from 'express'
import {getConnection} from "typeorm";
import {Event} from "./event.model";
import {get_session_from_request} from "../auth/session.controller";

async function log_request_as_event(req: Request, res: Response) {
    let event = new Event()
    event.url = req.originalUrl
    event.name = "log_request"
    event.ipAddress = req.headers['x-forwarded-for'] as string || req.connection.remoteAddress as string || ''
    if (req.method === "GET") {
        event.data = req.query
    } else {
        event.data = {}
    }
    event.method = req.method
    event.status = res.statusCode
    event.user_uuid = (await get_session_from_request(req)).user_uuid ?? undefined
    await getConnection().getRepository(Event).save(event, {transaction: false})
}

const eventMiddleware = (req: Request, res: Response, next: any) => {
    let postProcess = () => {
        res.removeListener('finish', postProcess)
        res.removeListener('close', postProcess)
        process.nextTick(() => {
            log_request_as_event(req, res)
        })
    }
    if (req.path === '/healthcheck' || /^\/favicon/.exec(req.path)) {
    } else {
        res.on('finish', postProcess)
        res.on('close', postProcess)
    }
    next()
}

export default eventMiddleware
