import { Request, Response, NextFunction } from "express"

interface Middleware {
    (req: Request, res: Response, next: NextFunction): void;
}

export default Middleware
