import {IResolvers} from "@graphql-tools/utils"
import {GraphQLContext} from "src/gql/context"
import {PushDevice} from "./model"
import {getConnection} from "typeorm"
import * as gql from "share/gqltype"


const PLATFORMS = ["apns"] as const
type PlatformType = typeof PLATFORMS[number]

interface RegisterPushDeviceArgs {
    name: string
    device_token: string
    platform: PlatformType
}

export const push_notification_resolvers: IResolvers = {
    Query: {
    },

    Mutation: {
        register_push_device: async (_: any, args: RegisterPushDeviceArgs, ctx: GraphQLContext): Promise<gql.PushDevice> => {
            const user_uuid = await ctx.user_uuid_or_fail()
            if (!PLATFORMS.includes(args.platform)) {
                throw new Error("Invalid platform. Must be one of: " + PLATFORMS.join(", "))
            }
            await getConnection().getRepository(PushDevice).delete({
                user_uuid
            })
            const device = new PushDevice()
            device.user_uuid = user_uuid
            device.name = args.name
            device.token = args.device_token
            device.platform = args.platform
            return getConnection().getRepository(PushDevice).save(device)
        }
    },
}