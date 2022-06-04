import React from "react"
import {App} from "./app"
import {render} from "react-dom"
import "src/index.css"
import {BrowserRouter} from "react-router-dom"
import * as Sentry from "@sentry/react"

const SENTRY_DSN = import.meta.env.VITE_SENTRY_DSN as string | undefined
Sentry.init({dsn: SENTRY_DSN})

render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
)