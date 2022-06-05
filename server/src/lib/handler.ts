import {Request, Response, NextFunction} from "express"
import {HttpError} from "./httperror"


export type RouteFunction = (req: Request, res: Response, next?: NextFunction) => void
export type AsyncRouteFunction = (req: Request, res: Response, next?: NextFunction) => Promise<void>


const SHOW_TRACEBACK = process.env.NODE_ENV !== "production"

export function global_error_handler(err: Error, req: Request, res: Response, _next: NextFunction) {
    const send_json = req.accepts().includes("application/json")
    const message = err.message || "Something went wrong."
    console.log(err, err.stack)
    // res.status((err as HttpError).code ?? 500)
    res.status(err instanceof HttpError ? err.code : 500)
    if (send_json) {
        res.json({
            message
        })
    } else {
        let body: string
        if (SHOW_TRACEBACK) {
            body = (err.stack ?? message).replace(/(?:\r\n|\r|\n)/g, "<br/>")
        } else {
            body = message
        }
        res.send(body)
    }
}


export function safe_call(f: AsyncRouteFunction): RouteFunction {
    return async (req: Request, res: Response, next?: NextFunction) => {
        try {
            await f(req, res)
        } catch (e) {
            next!(e)
        }
    }
}