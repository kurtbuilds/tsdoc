import {CodeObject} from "src/package/type"

export interface SidebarProps {
    package: string
    version: string
    classes: CodeObject[],
    functions: CodeObject[],
    constants: CodeObject[],
    interfaces: CodeObject[],
}

interface SidebarGroupProps {
    title: string
    package: string
    version: string
    type: string
    items: CodeObject[]
}

export function SidebarGroup(props: SidebarGroupProps) {
    return <div className="mb-4">
        <h3 className="text-bold text-xl">{props.title}</h3>
        {props.items.map(c => <a className="block link ml-3" key={c.name}
                                 href={`/${props.package}/${props.version}/${props.type}/${c.name}`}>
            {c.name}
        </a>)}
    </div>
}

export function Sidebar(props: SidebarProps) {
    return <div className="bg-gray-300 p-2 dark:bg-gray-700 pt-4">
        <div className="mb-4">
            <a className="text-bold text-xl" href={`/${props.package}/${props.version}`}>{props.package}</a>
        </div>
        <SidebarGroup title="Subdirectories" package={props.package} version={props.version} items={[]} type="subdir"/>
        <SidebarGroup title="Classes" package={props.package} version={props.version} items={props.classes}
                      type="class"/>
        <SidebarGroup title="Functions" package={props.package} version={props.version} items={props.functions}
                      type="function"/>
        <SidebarGroup title="Interfaces" package={props.package} version={props.version} items={props.interfaces}
                      type="interface"/>
        <SidebarGroup title="Constants" package={props.package} version={props.version} items={props.constants}
                      type="constant"/>
    </div>
}