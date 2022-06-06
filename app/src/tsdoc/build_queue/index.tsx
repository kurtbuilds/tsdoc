import {LandingContainer, SearchBar} from "src/tsdoc/landing"

export function BuildQueue() {
    const on_submit_job = (query: string) => {
        console.log("submit job", query)
    }
    return <LandingContainer>
        Submit a job:
        <SearchBar onSubmit={on_submit_job} className="w-full"
                   placeholder="Package name or NPM URL..."/>
        This is a list of current and recently completed builds.
        <div>
            <h3 className="text-bold">Pending</h3>
            <div>query-registry</div>
        </div>
        <div>
            <h3 className="text-bold">Recently completed</h3>
            <div>query-registry</div>
        </div>
    </LandingContainer>
}