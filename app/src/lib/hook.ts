import {useEffect} from "react"
import {safe_exec} from "src/lib/util"

type Hook = () => Promise<void>;

/***
 * Simplifies calling an async function on init.
 * @param init
 */
export function useInit(init: Hook): void {
    return useEffect(() => safe_exec(init), [])
}