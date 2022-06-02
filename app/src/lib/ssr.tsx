import React from "react"
import {App} from "../app"
import ReactDOMServer from "react-dom/server"
import {StaticRouter} from "react-router-dom/server"

export function render(url: string, _: any) {
    return ReactDOMServer.renderToString(
        <StaticRouter location={url}>
            <App/>
        </StaticRouter>
    )
}
