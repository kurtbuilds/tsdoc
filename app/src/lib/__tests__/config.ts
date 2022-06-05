import {describe, it} from "vitest"
import {do_rewrite} from "../config"
import * as assert from "@kurtbuilds/assert"

describe("config.ts", () => {
    it("do_rewrite", () => {
        assert.is_true(do_rewrite("/query-registry/2.5.0"))
        assert.is_true(do_rewrite("/query-registry/2.5.0/class/FetchError"))
        assert.is_true(do_rewrite("/query-registry/2.5.0/file/src/index.ts"))
        assert.is_true(do_rewrite("/@kurtbuilds/assert/1.0.12/class/AssertionError"))

        assert.is_true(!do_rewrite("/query-registry/2.5.0/assets/index.123123.js"))
        assert.is_true(!do_rewrite("/src/libdoc/index.tsx"))
        assert.is_true(!do_rewrite("/@vite/client"))
        assert.is_true(!do_rewrite("/src/index.css"))
        assert.is_true(!do_rewrite("/stage/typedoc.json?import"))
        assert.is_true(!do_rewrite("/prism.js"))
        assert.is_true(!do_rewrite("/@react-refresh"))
        assert.is_true(!do_rewrite("/favicon.ico"))
        assert.is_true(!do_rewrite("/node_modules/.pnpm/vite@2.9.9/node_modules/vite/dist/client/env.mjs"))
    })
})