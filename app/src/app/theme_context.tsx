import React, {useCallback} from "react"

type ThemeMode = "light" | "dark"

import {entity} from "simpler-state"


function getInitialTheme(): ThemeMode {
    if (typeof window !== "undefined" && window.localStorage) {
        const storedPrefs = window.localStorage.getItem("color-theme") as ThemeMode | undefined
        if (typeof storedPrefs === "string") {
            return storedPrefs
        }

        const userMedia = window.matchMedia("(prefers-color-scheme: dark)")
        if (userMedia.matches) {
            return "dark"
        }
    }
    return "light"
}


export function set_document_theme(value: ThemeMode) {
    const theme = ThemeState.get()
    const root = window.document.documentElement
    const isDark = theme === "dark"

    root.classList.remove(isDark ? "light" : "dark")
    root.classList.add(theme)

    localStorage.setItem("color-theme", theme)
}


export function DarkModeToggle() {
    const theme = ThemeState.use()

    const toggle = useCallback(() => {
        const new_theme = theme === "light" ? "dark" : "light"
        ThemeState.set(new_theme)
        set_document_theme(new_theme)
    }, [theme])

    return (
        <button
            className="dark-mode-toggle"
            onClick={toggle}
        >
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
    )
}

export const ThemeState = entity<ThemeMode>(getInitialTheme())