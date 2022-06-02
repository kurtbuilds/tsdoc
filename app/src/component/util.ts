export function classes(...classes: (string | undefined)[]): string {
    return classes.filter(Boolean).join(" ")
}