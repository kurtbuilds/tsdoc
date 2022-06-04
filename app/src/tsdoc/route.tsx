import {Signup} from "src/auth/signup"
import {Landing} from "src/landing"
import {Navigate, Route, Routes as Switch, useParams} from "react-router-dom"
import {Login} from "src/auth/login"
import {UserState} from "../app/user_state"
import {useEffect} from "react"
import {BasePackageParams} from "src/package/type"

export function Private({children}: { children: JSX.Element }) {
    const user = UserState.use()
    const authenticated = user !== null
    const location = window.location
    const url = new URL(window.location.toString())
    url.pathname = "/login"
    url.searchParams.set("next", location.pathname)

    if (!authenticated) {
        return <Navigate to="/login" state={{from: location}} replace/>
    }
    return children
}


export function RedirectToLatest() {
    const params = useParams<BasePackageParams>()
    useEffect(() => {
        window.location.href = `/${params.package}/2.5.0`
    })
    return <div></div>
}

const DEFAULT_LOGGED_IN_PATH = "/account"


export function Routes() {
    const user = UserState.use()

    return <Switch>
        <Route path="/" element={<Landing/>}/>
        <Route path="/login" element={user ? <Navigate replace to={DEFAULT_LOGGED_IN_PATH}/> : <Login/>}/>
        <Route path="/signup" element={user ? <Navigate to={DEFAULT_LOGGED_IN_PATH}/> : <Signup/>}/>

        {/*<Route path="/:package" element={<RedirectToLatest/>}/>*/}
        <Route path="*" element={<div>Not Found</div>}/>
    </Switch>
}