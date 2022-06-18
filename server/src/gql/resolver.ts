import {IResolvers} from "@graphql-tools/utils"
import {auth_resolvers} from "src/auth/auth.resolver"
import {doc_build_resolvers} from "src/doc_build/resolver"
import {deep_assign} from "src/lib/util"


const exported_resolvers: IResolvers = {
    Query: {},
    Mutation: {},
}

for (const resolver of [
    doc_build_resolvers,
    auth_resolvers,
]) {
    deep_assign(exported_resolvers, resolver)
}

export default exported_resolvers
