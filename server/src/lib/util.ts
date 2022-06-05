import {Cent} from "./type"

/** A date function which takes sane input.
 * JS uses 0-11 for month and 1-31 for day and has no tz input, which is confusing AF.
 * @param year xxxx
 * @param month 1-12
 * @param day 1-31
 */
export function make_date(year: number, month: number, day: number): Date {
    return new Date(Date.UTC(year, month-1, day))
}


export function not_null<T>(v: T | null | undefined ): boolean {
    return v !== null
}

export function dollar_to_cents(n: number | null): Cent | null {
    if (n === null) return null
    return BigInt(Math.round(n * 100))
}


export const OK_JSON = {message: "OK"}
export const ERR_JSON = {message: "An error occurred."}

export function is_null_object(o: any): boolean {
    return !Object.keys(o).find(k => !!o[k])
}


export function log_error<T>(promise: Promise<T>) {
    promise.catch(e => {
        console.log("Encountered an error while executing promise.", e, e.stack)
    })
}

export function delay(ms: number): Promise<undefined> {
    return new Promise((resolve, reject) => {
        const id = setTimeout(() => {
            resolve(undefined)
        }, ms)
    })
}

export function parameterize_url(url: string, params: {[key: string]: string}): string {
    const args = Object.keys(params).map(k => `${k}=${encodeURIComponent(params[k])}`).join("&")
    return url + "?" + args
}

export function timeout<T>(ms: number, promise: Promise<T>): Promise<T> {
    let id: NodeJS.Timeout | null = null
    const t = new Promise<T>((resolve, reject) => {
        id = setTimeout(() => {
            reject(new Error("Timeout"))
        }, ms)
    })
    return Promise.race([promise, t])
        .finally(() => {
            if (id !== null) {
                clearTimeout(id)
            }
        })
}


export function deep_assign(o: any, next: any) {
    Object.keys(next).forEach(k => {
        if (typeof o[k] === "object") {
            deep_assign(o[k], next[k])
        } else {
            o[k] = next[k]
        }
    })
    return o
}

export function remove_undef_keys(o: Record<string, any>): Record<string, any> {
    for (const key of Object.keys(o)) {
        if (o[key] === undefined) {
            delete o[key]
        }
    }
    return o
}