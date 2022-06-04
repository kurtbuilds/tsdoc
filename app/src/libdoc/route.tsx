import {Route, Routes as Switch} from "react-router-dom"
import {Package} from "src/package/module"
import {Function} from "src/package/function"
import {SourceFile} from "src/package/source_file"
import {Interface} from "src/package/interface"

export function Routes() {
    return <Switch>
        <Route path="/:package/:version/" element={<Package/>}/>

        {/*TODO: This needs to be generic for deep namespaces */}
        <Route path="/:package/:version/class/:name" element={<Package/>}/>
        <Route path="/:package/:version/function/:name" element={<Function/>}/>
        <Route path="/:package/:version/interface/:name" element={<Interface/>}/>
        <Route path="/:package/:version/constant/:name" element={<Package/>}/>
        <Route path="/:package/:version/file/*" element={<SourceFile/>}/>
    </Switch>
}