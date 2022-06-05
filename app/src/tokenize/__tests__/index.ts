import {describe, it} from "vitest"
import {tokenize} from "src/tokenize"
import * as assert from "@kurtbuilds/assert"


describe("tokenize", function () {
    it("should tokenize a simple string", function () {
        // const tokens = tokenize("hello world")
        // assert.equal(tokens, ["hello world"])
    })
    // it("should tokenize a link", function () {
    //     const tokens = tokenize("This package exports several functions to query\nthe {@link https://www.npmjs.com | npm registry}\n(or one of its mirrors) through o")
    //     assert.equal(tokens.slice(0, 3), [
    //         "This package exports several functions to query",
    //         " ",
    //         "the ",
    //     ])
    //     const link = tokens[3] as JSX.Element
    //     assert.equal(link.props.children, "npm registry")
    //     assert.equal(link.props.href, "https://www.npmjs.com")
    // })
    // it("tokenize an example", function() {
    //     const tokens = tokenize("\nGet the metadata for the npm registry:\n\n```typescript\nimport { getRegistryMetadata } from 'query-registry';\n\n(async () => {\n    const metadata = await getRegistryMetadata();\n\n    // Output: 'registry'\n    console.log(metadata.db_name);\n})();\n```\n\"")
    //     assert.equal(tokens[0], "Get the metadata for the npm registry:")
    //     const code = tokens[2] as JSX.Element
    // })
})