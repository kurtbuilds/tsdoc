import React, {useEffect} from "react"
import {set_document_theme, ThemeState} from "src/app/theme_context"
import {Routes} from "./route"

export function App() {
    useEffect(() => {
        set_document_theme(ThemeState.get())
    }, [])

    return <Routes/>
}