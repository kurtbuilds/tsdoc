import {Page} from "src/app/page"
import {Sidebar} from "src/package/sidebar"
import React, {useEffect} from "react"
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
    name: string,
}


export function Container({pkg, version, children, constants, interfaces, classes, functions, name}: ContainerProps) {
    useEffect(() => {
        (window as any).Prism.highlightAll()
    }, [name])

    return <Page>
        <div className="flex w-screen">
            <Sidebar package={pkg} version={version} classes={classes}
                     functions={functions} constants={constants} interfaces={interfaces}
            />
            <div className="p-4 flex-grow min-w-0">
                <div className="flex justify-end">
                    <DarkModeToggle/>
                </div>
                {children}
            </div>
        </div>
    </Page>
}