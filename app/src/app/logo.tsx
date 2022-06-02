import React from "react"
import Icon from "./icon.png?width=100&height=100"


export function Logo() {
    return <div className="h-12 text-primary text-2xl font-bold flex content-between items-center rounded-xl mx-auto">
        <img src={Icon} className="w-12 mr-2" alt=""/>
        Template
    </div>
}