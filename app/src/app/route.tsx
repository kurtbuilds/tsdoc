import {Signup} from "src/auth/signup"
import {Landing} from "src/landing"
import {Navigate, Route, Routes as Switch} from "react-router-dom"
import {Login} from "src/auth/login"
import {UserState} from "./user_state"
import {Page} from "src/app/page"
import {Package, RedirectToLatest, SourceFile} from "src/app/package"

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

const DEFAULT_LOGGED_IN_PATH = "/account"


export function Routes() {
    const user = UserState.use()

    return <Switch>
        <Route path="/" element={<Landing/>}/>
        <Route path="/login" element={user ? <Navigate replace to={DEFAULT_LOGGED_IN_PATH}/> : <Login/>}/>
        <Route path="/signup" element={user ? <Navigate to={DEFAULT_LOGGED_IN_PATH}/> : <Signup/>}/>

        <Route path="/account" element={<Page alerts={[]} left="menu" title="Account">
            Welcome!
        </Page>}/>

        <Route path="/:package" element={<RedirectToLatest/>}/>

        <Route path="/:package/:version/" element={<Package/>}/>
        <Route path="/:package/:version/src/*" element={<SourceFile/>}/>
        {/*<Route path="*" element={<NotFound/>}/>*/}
    </Switch>
}