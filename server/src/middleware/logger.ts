import {Request, Response} from "express"

const loggerMiddleware = (req: Request, res: Response, next: any) => {
    const postProcess = () => {
        res.removeListener("finish", postProcess)
        res.removeListener("close", postProcess)
        process.nextTick(() => {
            const date = new Date().toISOString()
            const len = res.getHeader("Content-Length") || ""
            console.log(`${date} ${req.method} ${req.originalUrl} HTTP/${req.httpVersion} ${res.statusCode} ${len}`)
        })
    }
    res.on("finish", postProcess)
    res.on("close", postProcess)
    next()
}

export default loggerMiddleware