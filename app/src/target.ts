import typedoc from "../stage/typedoc.json"
const files = import.meta.globEager(
    "/stage/query-registry/src/**/*.ts",
    //@ts-ignore
    { as: "raw" }
)
export {typedoc}
export default files
