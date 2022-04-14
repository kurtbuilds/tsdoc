import {getRegistryMetadata} from 'query-registry';

(async () => {
    const metadata = await getRegistryMetadata();

    // Output: 'registry'
    console.log(metadata.db_name);
})();
