import React from "react"
import {Link} from "react-router-dom"
import {Page} from "./page"

export function NotFound() {
    return <Page alerts={[]} left="back">
        <div className="w-full h-full flex flex-col justify-center space-y-6 items-center">
            <h1 className="text-2xl font-bold">Oops! We couldn't find this page.</h1>
            <button className="text-xl text-blue-500" onClick={() => history.back()}>Go back</button>
            <Link className="text-xl text-blue-500" to="/">Go home</Link>
        </div>
    </Page>
}