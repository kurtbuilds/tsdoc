import React from "react"
import {Link, useNavigate} from "react-router-dom"
import {gql_fetch} from "src/gql/client"
import {slugify} from "src/lib/util"
import {log_out, UserState} from "./user_state"
import {XIcon} from "@heroicons/react/solid"
import {NavBarButton} from "./nav"
import * as gql from "share/gqltype"


const query = `mutation {
    log_out
}`


function NavLink({...rest}) {
    return <div className="text-lg mb-1">
        <Link className="nav-link" to={rest.to} {...rest}>
        </Link>
    </div>
}


function Divider() {
    return <hr className="my-2" style={{border: "solid #00000022 1px"}}/>
}

interface MenuProps {
    close?: () => void,
    className?: string,
}

export function Menu({close, className}: MenuProps) {
    const navigate = useNavigate()

    const close_button = close ? <NavBarButton onClick={close}>
        <XIcon className='w-8'/>
    </NavBarButton> : null
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    close = close ?? (() => {})
    const user = UserState.use()

    const handle_log_out = async function () {
        await gql_fetch(query)
        log_out()
        navigate("/", {replace: true})
        close!()
    }

    const menu_items = <>
        <div className="mb-3">
            {user?.email}
        </div>
        {/*<NavLink to="/budget" onClick={close}>Cash Flow - Current Month</NavLink>*/}
        {/*<Divider/>*/}
        {/*<NavLink className="italic" to="/transaction/review" onClick={close}>Recent Transactions</NavLink>*/}
        {/*<NavLink to="/transaction" onClick={close}>All transactions</NavLink>*/}
        {/*{user?.accounts?.map((a: gql.Account) => {*/}
        {/*    const slug = `/account/${a.uuid}/${slugify(a.nickname!)}`*/}
        {/*    return <NavLink key={a.uuid} to={slug} onClick={close}>{a.nickname}</NavLink>*/}
        {/*})}*/}
        {/*<Divider/>*/}
        {/*<NavLink to="/settings" onClick={close}>Settings</NavLink>*/}
        {/*<NavLink to="/support" onClick={close}>Support</NavLink>*/}
        <button onClick={handle_log_out}>Log out</button>
    </>

    return <menu className={className + " bg-purple-600 overflow-y-scroll overflow-x-hidden hide-scrollbar text-purple-200"}>
        {close_button}
        <div className="pl-3 pr-6 pt-1 text-lg">
            {menu_items}
        </div>
    </menu>
}
