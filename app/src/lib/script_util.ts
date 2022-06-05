import {readdirSync} from "fs"

export function safe_readdirSync(p: string): string[] {
    try {
        return readdirSync(p)
    } catch (e) {
        return []
    }
}