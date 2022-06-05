//                     @ team (optional); pkg name;    version; $ or file or function or interface or class
export const LIBDOC_REGEX = /^(\/@[a-zA-Z_-]+)?\/([a-zA-Z_-]+)\/([^/]+)($|\/file\/|\/function\/|\/interface\/|\/class\/)/

export function do_rewrite(path: string): boolean {
    const segment = path.split("/", 2)[1]
    if (["/@vite", "src", "stage"].includes(segment)) {
        return false
    }
    return LIBDOC_REGEX.test(path)
}
