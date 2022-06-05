import React, {useEffect} from "react"
import {Routes} from "./route"
import {USER_FIELDS} from "src/app/user_state"
import {set_document_theme, ThemeState} from "src/app/theme_context"

const query = `query {
    me { 
        ${USER_FIELDS}
    }
}`


export function App() {
    useEffect(() => {
        set_document_theme(ThemeState.get())
    }, [])
    return <Routes/>
}