import React, {ReactNode} from "react"

interface NavbarLinkProps {
    href?: string;
    onClick?: React.MouseEvent<HTMLAnchorElement>
    removeActive?: () => void;
    children?: ReactNode,
}


export interface Component {
    className?: string,
    children?: ReactNode
}

export interface MenuProps {
    close?: () => void,
    className?: string,
}