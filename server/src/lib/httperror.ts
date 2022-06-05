export class HttpError extends Error {
    public code: number

    constructor(code: number, message: string) {
        super(message)
        this.code = code
    }
}

export class AuthorizationError extends HttpError {
    constructor(message: string = 'Not authorized') {
        super(403, message)
    }
}

export class AuthenticationError extends HttpError {
    constructor(message: string = 'Not authenticated') {
        super(401, message)
    }
}