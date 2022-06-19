import {handle_build_docs} from "../src/doc_build/job"
import {Job} from "../src/job"

export {}

async function main() {
    await handle_build_docs({
        data: {}
    } as any as Job)
}

main()
    .catch(e => console.error(e))