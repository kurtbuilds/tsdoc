import {ChevronLeftIcon} from "@heroicons/react/outline"

import { Component } from "src/component"
import React, {MouseEventHandler} from "react"


export function Back() {
    return <NavBarButton onClick={() => history.back()}>
        <ChevronLeftIcon className="w-8"/>
    </NavBarButton>
}


interface NavBarButtonProps extends Component {
    onClick: MouseEventHandler,
    className?: string
}

export function NavBarButton({onClick, children, className}: NavBarButtonProps) {
    className = "w-11 h-11 flex justify-center items-center " + (className ?? "")
    return <button className={className} onClick={onClick}>
        {children}
    </button>
}