import {LIBRARIES} from "src/library"
import {Link} from "wouter-preact"

export function Landing() {
    return <div class="mt-4">
        <h1 class="text-4xl font-bold w-3/4 m-auto">Standardized docs for Typescript libraries</h1>
        <div class="w-1/2 lg:w-24 m-auto my-8">
            <input type="input" placeholder="Search..." class="m-auto w-full border m-1 rounded-lg border-black p-1"/>
        </div>
        <div class="grid grid-cols-2 mx-4">
            <div>
                <h3 class="text-2xl font-semibold">
                    Most viewed
                </h3>
                <ul>
                    {LIBRARIES.map(l => {
                        return <li><Link key={l.name} to={"/" + l.name}>{l.name}</Link></li>
                    })}
                </ul>
            </div>
            <div>
                <h3 class="text-2xl font-semibold">
                    Most recently updated
                </h3>
                <ul>
                    {LIBRARIES.map(l => {
                        return <li><Link key={l.name} to={"/" + l.name}>{l.name}</Link></li>
                    })}
                </ul>
            </div>
        </div>
    </div>
}