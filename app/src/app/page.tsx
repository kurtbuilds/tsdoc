import {PageNeedsMenu, PageProps} from "src/component/page"
import {Menu} from "src/app/menu"


export function useQuery<T extends Record<string, string>>(): T {
    const entries = typeof location !== "undefined" ? new URLSearchParams(location.search).entries() : []
    return Object.fromEntries(entries) as T
}


export function Page(props: PageProps) {
    return <PageNeedsMenu {...props} Menu={Menu} className="pt-6"/>
}
