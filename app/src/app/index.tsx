import React from "react"
import {Routes} from "./route"
import {set_user, USER_FIELDS } from "./user_state"
import {Loading} from "src/component/loading"
import { DEFAULT_NEXT_PAGE } from "src/auth/login"
import { gql_fetch } from "src/gql/client"
import { safe_exec } from "src/lib/util"
import { useEffect } from "react"
import {useLocation, useNavigate} from "react-router-dom"
import {usePageState} from "@kurtbuilds/pagestate"
import {set_document_theme, ThemeState} from "src/app/theme_context"

const query = `query {
    me { 
        ${USER_FIELDS}
    }
}`


export function App() {
    const page = usePageState()
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        set_document_theme(ThemeState.get())
    }, [])

    // useEffect(() =>
    //         safe_exec(async () => {
    //             const res = await gql_fetch(query)
    //             res.map_err(e => page.set_errors(e.errors))
    //             res.map(d => {
    //                 set_user(d.me)
    //                 page.set_state({})
    //                 if (d.me && location.pathname === "/") {
    //                     navigate(DEFAULT_NEXT_PAGE)
    //                 }
    //             })
    //         })
    //     , [])

    // if (page.loading && location.pathname !== "/") {
    //     return <Loading/>
    // } else {
        return <Routes/>
    // }
}