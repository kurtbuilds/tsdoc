import {Link} from "react-router-dom"
import {Class, Constant, Func, Interface, Item} from "src/package/type"

export interface SidebarProps {
    package: string
    version: string
    classes: Class[],
    functions: Func[],
    constants: Constant[],
    interfaces: Interface[],
}

interface SidebarGroupProps {
    title: string
    package: string
    version: string
    type: string
    items: Item[]
}

export function SidebarGroup(props: SidebarGroupProps) {
    return <div className="mb-4">
        <h3 className="text-bold text-xl">{props.title}</h3>
        {props.items.map(c => <Link className="block link ml-3" key={c.name}
                                    to={`/${props.package}/${props.version}/${props.type}/${c.name}`}>
                {c.name}
            </Link>
        )}
    </div>
}

export function Sidebar(props: SidebarProps) {
    return <div className="bg-gray-300 p-2 dark:bg-gray-700 pt-4">
        <div className="mb-4">
            <Link className="text-bold text-xl" to={`/${props.package}/${props.version}`}>{props.package}</Link>
        </div>
        <SidebarGroup title="Modules" package={props.package} version={props.version} items={[]} type="subdir"/>
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