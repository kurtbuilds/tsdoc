import {ChevronLeftIcon, MenuIcon} from "@heroicons/react/outline"
import React, {HTMLAttributes, useState} from "react"
import {Link} from "react-router-dom"
import {useNavigate} from "react-router-dom"
import {Component, MenuProps} from "./type"


export type ButtonType = "back" | "menu"


export function BackButton() {
    const navigate = useNavigate()
    return <NavBarButton onClick={() => navigate(-1)} Icon={ChevronLeftIcon}/>
}


export function OpenMenuButton({onClick}: { onClick: (e: any) => void }) {
    return <NavBarButton className="md:invisible" onClick={onClick} Icon={MenuIcon}/>
}


interface NavBarButtonProps extends Component {
    onClick?: (e: any) => void,
    className?: string
    Icon?: React.ComponentType<any>
    to?: string
}

export function NavBarButton({onClick, children, className, Icon, to}: NavBarButtonProps) {
    className = "w-11 h-11 flex items-center justify-center " + (className ?? "")
    if (to) {
        return <Link to={to} className={className}>
            {Icon ? <Icon className="w-8"/> : null}
            {children}
        </Link>
    } else {
        return <button className={className} onClick={onClick}>
            {Icon ? <Icon className="w-8"/> : null}
            {children}
        </button>
    }
}

export interface NavBarProps {
    title?: string,
    left: ButtonType | React.ReactNode,
    right?: React.ReactNode,
}

export interface NeedsMenu {
    Menu: React.ComponentType<HTMLAttributes<any> & MenuProps>
}

export function NavBar({Menu, left, right, title}: NavBarProps & NeedsMenu) {
    const [menu_visible, set_menu_visible] = useState(false)

    const left_button = <div className="">
        {left === "back" ?
            <BackButton/> :
            left === "menu" ?
                <OpenMenuButton onClick={() => set_menu_visible(!menu_visible)}/> :
                left
        }
    </div>

    const right_button = <div className="flex flex-1 justify-end">
        {right}
    </div>

    return <nav className="min-h-11 flex items-center w-full">
        <Menu className={`md:hidden overlay z-10 ${menu_visible ? "" : "hidden"}`}
            close={() => set_menu_visible(false)}/>
        {left_button}
        <div className="font-bold text-2xl whitespace-nowrap overflow-hidden">
            {title}
        </div>
        {right_button}
    </nav>
}
