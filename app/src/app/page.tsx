import React from "react"
import {TopNav} from "src/app/nav"


export function useQuery<T extends Record<string, string>>(): T {
    const entries = typeof location !== "undefined" ? new URLSearchParams(location.search).entries() : []
    return Object.fromEntries(entries) as T
}


export function Page({children}: { children: React.ReactNode }) {
    return <div className="flex flex-col w-full">
        <TopNav/>
        {children}
    </div>
}