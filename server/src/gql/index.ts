import resolvers from "./resolver"
import * as fs from "fs"
const typeDefs = fs.readFileSync("./schema.graphql").toString()

export {typeDefs, resolvers}
