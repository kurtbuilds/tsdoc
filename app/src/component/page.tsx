import {HomeIcon} from "@heroicons/react/outline"
import React from "react"
import {classes} from "./util"
import {Link, useNavigate} from "react-router-dom"
import {Alerts} from "./alert"
import {Loading} from "./loading"
import {NavBar, NavBarProps, NeedsMenu} from "./nav"
import {Alert} from "@kurtbuilds/lib"


const navigation = [
    {name: "Account", href: "/account", icon: HomeIcon, current: true},
    // { name: 'Team', href: '#', icon: UsersIcon, current: false },
    // { name: 'Projects', href: '#', icon: FolderIcon, current: false },
    // { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
    // { name: 'Documents', href: '#', icon: InboxIcon, current: false },
    // { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
]



interface NavProps {
    log_out: () => void
}


export function Nav({log_out}: NavProps) {
    const navigate = useNavigate()

    return <nav className="mt-5 flex-1 px-2 space-y-1 flex flex-col">
        {navigation.map((item) => (
            <Link
                key={item.name}
                to={item.href}
                className={classes(
                    item.current ? "bg-indigo-800 text-white" : "text-white hover:bg-indigo-600 hover:bg-opacity-75",
                    "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                )}
            >
                <item.icon className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" aria-hidden="true"/>
                {item.name}
            </Link>
        ))}
        <div className="flex-grow"/>
        <button onClick={() => {
            log_out()
            navigate("/")
        }} className="text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md">Log out</button>
    </nav>
}


export interface PageProps extends NavBarProps {
    alerts: Alert[] | null,
    children: React.ReactNode,
    loading?: boolean,
    className?: string,
}


export function PageNeedsMenu({loading=false, alerts, children, title, left, right, className, Menu}: PageProps & NeedsMenu) {
    className = "overflow-y-auto overflow-x-hidden flex-grow overscroll-none " + (className ?? "")
    return <>
        <Menu className="md:block hidden"/>
        <main className="h-full flex-grow flex flex-col">
            <NavBar title={title} left={left} right={right} Menu={Menu}/>
            <main className={className}>
                <Loading loading={loading}/>
                <Alerts alerts={alerts}/>
                {children}
            </main>
        </main>
    </>
}
