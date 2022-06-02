import {getPackageManifest, getRegistryMetadata, searchPackages} from 'query-registry';

(async () => {
    const metadata = await getRegistryMetadata();

    const results = await searchPackages({
        query: {text: "typescript"},
    })
    const manifest = await getPackageManifest({ name: 'query-registry' });

    console.log(JSON.stringify(manifest, null, 2));
})();

