import {Page} from "src/app/page"
import {Sidebar} from "src/package/sidebar"
import React from "react"
import {Constant, Func, Interface} from "src/package/type"
import {DarkModeToggle} from "src/app/theme_context"

interface ContainerProps {
    pkg: string
    version: string
    classes: any[]
    constants: Constant[]
    interfaces: Interface[]
    functions: Func[]
    children: React.ReactNode
}


export function Container({pkg, version, children, constants, interfaces, classes, functions}: ContainerProps) {
    return <Page>
        <div className="flex">
            <Sidebar package={pkg} version={version} classes={classes}
                     functions={functions} constants={constants} interfaces={interfaces}
            />
            <div className="flex-grow p-4">
                <div className="flex justify-end">
                    <DarkModeToggle/>
                </div>
                {children}
            </div>
        </div>
    </Page>
}