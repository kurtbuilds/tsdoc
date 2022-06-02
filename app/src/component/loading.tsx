import React, {useEffect, useState} from "react"

export function Loading({loading}: { loading?: boolean }) {
    loading = loading ?? true
    const [n, set_n] = useState(1)

    useEffect(() => {
        const id = setTimeout(() => {
            set_n(n + 1)
        }, 600)
        return () => {
            clearInterval(id)
        }
    }, [n])

    if (!loading) return null
    return <div id="loading" className="h-full w-full flex items-center justify-center text-xl font-bold">{"Loading" + ".".repeat((n % 3) + 1)}</div>
}