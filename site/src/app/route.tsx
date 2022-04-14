import {Landing} from "src/app/landing"
import {Redirect, Route, Switch} from "wouter-preact"
import {Library} from "src/library/library"

// interface PrivateRouteProps {
//     path: string,
//     component: any,
// }


// export function Private({path, component}: PrivateRouteProps) {
//     const user = UserState.use()
//     const authenticated = user !== null
//     const url = new URL(window.location.toString())
//     url.pathname = "/login"
//     url.searchParams.set("next", path)
//     return <Route path={path}>
//         {authenticated ? component : <Redirect to={url.pathname + url.search}/>}
//     </Route>
// }

export function Routes() {
    return <Switch>
        {/*<Private path="/budget" component={Budget}/>*/}
        <Route path="/" component={Landing} />
        <Route path="/:library" component={Library} />
        <Route>Not found</Route>
    </Switch>
}
