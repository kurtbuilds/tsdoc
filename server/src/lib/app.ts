import {NextFunction, Request, Response} from 'express'
import {HttpError} from "./httperror";

const SHOW_TRACEBACK = process.env.SHOW_TRACEBACK


export function global_error_handler(err: Error, req: Request, res: Response, next: NextFunction) {
    const send_json = req.accepts().includes('application/json')
    let message = err.message || 'Something went wrong.'
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
            body = (err.stack ?? message).replace(/(?:\r\n|\r|\n)/g, '<br/>')
        } else {
            body = message
        }
        res.send(body)
    }
}
