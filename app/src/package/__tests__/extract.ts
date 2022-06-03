import {it, describe} from "vitest"
import {normalize_filepath} from "src/package/extract"
import * as assert from "@kurtbuilds/assert"

describe("extract", function () {
    it("normalize_filepath", function () {
        const path = normalize_filepath("stage/node-query-registry/src/endpoints/get-daily-package-downloads.ts")
        assert.equal(path, "src/endpoints/get-daily-package-downloads.ts")
    })
})