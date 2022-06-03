import typedoc from "../stage/typedoc.json"
import index from "../stage/query-registry/src/index.ts?raw"
import data_registries from "../stage/query-registry/src/data/registries.ts?raw"
import endpoints_get_abbreviated_packument from "../stage/query-registry/src/endpoints/get-abbreviated-packument.ts?raw"
import endpoints_get_daily_package_downloads from "../stage/query-registry/src/endpoints/get-daily-package-downloads.ts?raw"
import endpoints_get_daily_registry_downloads from "../stage/query-registry/src/endpoints/get-daily-registry-downloads.ts?raw"
import endpoints_get_package_downloads from "../stage/query-registry/src/endpoints/get-package-downloads.ts?raw"
import endpoints_get_package_manifest from "../stage/query-registry/src/endpoints/get-package-manifest.ts?raw"
import endpoints_get_packument from "../stage/query-registry/src/endpoints/get-packument.ts?raw"
import endpoints_get_raw_abbreviated_packument from "../stage/query-registry/src/endpoints/get-raw-abbreviated-packument.ts?raw"
import endpoints_get_raw_package_manifest from "../stage/query-registry/src/endpoints/get-raw-package-manifest.ts?raw"
import endpoints_get_raw_packument from "../stage/query-registry/src/endpoints/get-raw-packument.ts?raw"
import endpoints_get_registry_downloads from "../stage/query-registry/src/endpoints/get-registry-downloads.ts?raw"
import endpoints_get_registry_metadata from "../stage/query-registry/src/endpoints/get-registry-metadata.ts?raw"
import endpoints_search_packages from "../stage/query-registry/src/endpoints/search-packages.ts?raw"
import types_abbreviated_packument from "../stage/query-registry/src/types/abbreviated-packument.ts?raw"
import types_bug_tracker from "../stage/query-registry/src/types/bug-tracker.ts?raw"
import types_dist_info from "../stage/query-registry/src/types/dist-info.ts?raw"
import types_dist_tags from "../stage/query-registry/src/types/dist-tags.ts?raw"
import types_download_period from "../stage/query-registry/src/types/download-period.ts?raw"
import types_downloads from "../stage/query-registry/src/types/downloads.ts?raw"
import types_git_repository from "../stage/query-registry/src/types/git-repository.ts?raw"
import types_npm_operational_internal from "../stage/query-registry/src/types/npm-operational-internal.ts?raw"
import types_package_json from "../stage/query-registry/src/types/package-json.ts?raw"
import types_package_manifest from "../stage/query-registry/src/types/package-manifest.ts?raw"
import types_packument from "../stage/query-registry/src/types/packument.ts?raw"
import types_person from "../stage/query-registry/src/types/person.ts?raw"
import types_raw_abbreviated_packument from "../stage/query-registry/src/types/raw-abbreviated-packument.ts?raw"
import types_raw_package_manifest from "../stage/query-registry/src/types/raw-package-manifest.ts?raw"
import types_raw_packument from "../stage/query-registry/src/types/raw-packument.ts?raw"
import types_registry_metadata from "../stage/query-registry/src/types/registry-metadata.ts?raw"
import types_repository from "../stage/query-registry/src/types/repository.ts?raw"
import types_search_criteria from "../stage/query-registry/src/types/search-criteria.ts?raw"
import types_search_results from "../stage/query-registry/src/types/search-results.ts?raw"
import types_versions_to_timestamps from "../stage/query-registry/src/types/versions-to-timestamps.ts?raw"
import utils_assert_valid_package_name from "../stage/query-registry/src/utils/assert-valid-package-name.ts?raw"
import utils_errors from "../stage/query-registry/src/utils/errors.ts?raw"
import utils_extract_package_manifest from "../stage/query-registry/src/utils/extract-package-manifest.ts?raw"
import utils_fetch_downloads_from_registry from "../stage/query-registry/src/utils/fetch-downloads-from-registry.ts?raw"
import utils_fetch_from_registry from "../stage/query-registry/src/utils/fetch-from-registry.ts?raw"
import utils_fetch from "../stage/query-registry/src/utils/fetch.ts?raw"
import utils_get_definitely_typed_name from "../stage/query-registry/src/utils/get-definitely-typed-name.ts?raw"
import utils_get_untyped_name from "../stage/query-registry/src/utils/get-untyped-name.ts?raw"
// import utils_log from "../stage/query-registry/src/utils/log.ts?raw"
// import utils_normalize_download_period from "../stage/query-registry/src/utils/normalize-download-period.ts?raw"
// import utils_normalize_raw_abbreviated_packument from "../stage/query-registry/src/utils/normalize-raw-abbreviated-packument.ts?raw"
// import utils_normalize_raw_license from "../stage/query-registry/src/utils/normalize-raw-license.ts?raw"
// import utils_normalize_raw_package_manifest from "../stage/query-registry/src/utils/normalize-raw-package-manifest.ts?raw"
// import utils_normalize_raw_packument from "../stage/query-registry/src/utils/normalize-raw-packument.ts?raw"
// import utils_normalize_raw_repository from "../stage/query-registry/src/utils/normalize-raw-repository.ts?raw"
// import utils_normalize_raw_search_criteria from "../stage/query-registry/src/utils/normalize-raw-search-criteria.ts?raw"
// export {typedoc, index, data_registries, endpoints_get_abbreviated_packument, endpoints_get_daily_package_downloads, endpoints_get_daily_registry_downloads, endpoints_get_package_downloads, endpoints_get_package_manifest, endpoints_get_packument, endpoints_get_raw_abbreviated_packument, endpoints_get_raw_package_manifest, endpoints_get_raw_packument, endpoints_get_registry_downloads, endpoints_get_registry_metadata, endpoints_search_packages, types_abbreviated_packument, types_bug_tracker, types_dist_info, types_dist_tags, types_download_period, types_downloads, types_git_repository, types_npm_operational_internal, types_package_json, types_package_manifest, types_packument, types_person, types_raw_abbreviated_packument, types_raw_package_manifest, types_raw_packument, types_registry_metadata, types_repository, types_search_criteria, types_search_results, types_versions_to_timestamps, utils_assert_valid_package_name, utils_errors, utils_extract_package_manifest, utils_fetch_downloads_from_registry, utils_fetch_from_registry, utils_fetch, utils_get_definitely_typed_name, utils_get_untyped_name, utils_log, utils_normalize_download_period, utils_normalize_raw_abbreviated_packument, utils_normalize_raw_license, utils_normalize_raw_package_manifest, utils_normalize_raw_packument, utils_normalize_raw_repository, utils_normalize_raw_search_criteria}
export {typedoc, index, endpoints_get_abbreviated_packument, endpoints_get_package_downloads}
