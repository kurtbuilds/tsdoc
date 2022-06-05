import {IResolvers} from "@graphql-tools/utils"
import {auth_resolvers} from "src/auth/auth.resolver"
import {push_notification_resolvers} from "src/push_notification/resolver"
import {deep_assign} from "src/lib/util"


const exported_resolvers: IResolvers = {
    Query: {},
    Mutation: {},
}

for (const resolver of [
    auth_resolvers,
    push_notification_resolvers,
]) {
    deep_assign(exported_resolvers, resolver)
}

export default exported_resolvers
