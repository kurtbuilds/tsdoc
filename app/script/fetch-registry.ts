import {getPackageManifest, getRegistryMetadata, searchPackages} from "query-registry";

(async () => {
    const metadata = await getRegistryMetadata()

    const results = await searchPackages({
        query: {text: "typescript"},
    })
    const manifest = await getPackageManifest({ name: "query-registry" })

    const url = manifest.gitRepository?.url
    console.log(url)
    console.log(manifest.version)
    //

    /*
    cd stage
    git clone url query-registry
    g checkout tags/v2.5.0 -b v2.5.0
    pnpm install
    pnpm install -D @types/node
    ../../node_modules/.bin/typedoc --json ../output.json src/index.ts

     */
})()
