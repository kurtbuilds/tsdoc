import {Signup} from "src/auth/signup"
import {Landing} from "src/landing"
import {Navigate, Route, Routes as Switch, useParams} from "react-router-dom"
import {Login} from "src/auth/login"
import {UserState} from "./user_state"
import {NotFound} from "src/app/not_found"
import {Page, useQuery} from "src/app/page"
import {DarkModeToggle} from "src/app/theme_context"
import * as importest from "src/importtest"

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


interface BasePackageParams extends Record<string, string | undefined> {
    package: string | undefined
}

interface PackageParams extends BasePackageParams {
    version: string
}

export function Package() {
    const params = useParams<PackageParams>()

    return <div className="flex flex-col w-full">
        <div className="bg-gray-400 dark:bg-gray-600 p-2">
            <a className="" href="/">Site-wide navigation</a>
        </div>
        <div className="flex">
            <div className="bg-gray-300 p-2 dark:bg-gray-700">Side Bar</div>
            <div className="flex-grow p-4">
                <div className="flex justify-end">
                    <DarkModeToggle/>
                </div>
                <div className="border-b-2 flex justify-between">
                    <h1 className="text-bold text-2xl inline-block">
                        {params.package}
                    </h1>
                    <a href={`/${params.package}/${params.version}/src/index.ts#source.100`}
                       className="link">[src]</a>
                </div>
            </div>
        </div>
    </div>

}

export function RedirectToLatest() {
    const params = useParams<BasePackageParams>()
    console.log(params)
    return <Navigate to={`/${params.package}/2.5.0`}/>
}


interface SourceFileQuery extends Record<string, string>{
    line: string
}

export function SourceFile() {
    const url_match = useParams<PackageParams>()
    const query = useQuery<SourceFileQuery>()
    // const line = query ? parseInt(query.line) : undefined
    const inner = importest.index
    return <div>
        <pre className="line-numbers linkable-line-numbers" id="source"><code className="language-typescript">{inner}</code></pre>
    </div>
}


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