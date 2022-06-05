import {SendEmailResponse} from "@aws-sdk/client-sesv2"
import {render_template, send_email} from "@kurtbuilds/email"
import {IResolvers} from "@graphql-tools/utils"
import * as gql from "share/gqltype"
import {GraphQLContext} from "src/gql/context"
import * as transform from "src/gql/transform"
import * as auth_controller from "./auth.controller"
import {clear_session, generate_login_link, get_user_uuid_from_token, store_session} from "./session.controller"
import {find_user, get_user} from "./user.controller"
import {User} from "./user.model"


interface SignUpEmailArgs {
    email: string
    timezone: string
}

interface SignUpPasswordArgs {
    email: string,
    password: string,
    timezone: string,
}

interface SendLoginEmailArgs {
    email: string
}

interface LoginPasswordArgs {
    email: string
    password: string
}

interface LoginTokenArgs {
    token: string,
}


async function get_user_from_token(t: string): Promise<User> {
    const uuid = get_user_uuid_from_token(t).unwrap()
    return get_user(uuid)
}

export async function send_login_link_email(user: User, next: string | null): Promise<SendEmailResponse> {
    const login_link = generate_login_link(user.uuid, next)
    const {body, subject} = render_template("send_login_link.html", {
        login_link,
    })
    return send_email(user.email, body, subject)
}

export const auth_resolvers: IResolvers = {
    Query: {
        me: async (obj: any, args: any, context: GraphQLContext): Promise<gql.User | null> => {
            const user = await context.user()
            return user ? transform.user(user) : null
        },
    },
    Mutation: {
        sign_up_email: async (_: any, args: SignUpEmailArgs, _context: GraphQLContext): Promise<boolean> => {
            const user = (await auth_controller.register(args.email, null, args.timezone)).unwrap()
            await send_login_link_email(user, "/home")
            return true
        },
        sign_up_password: async (_: any, args: SignUpPasswordArgs, context: GraphQLContext): Promise<gql.User> => {
            const user = (await auth_controller.register(args.email, args.password, args.timezone)).unwrap()
            await store_session(user.uuid, context.req, context.res)
            return user
        },
        log_in_password: async (_: any, args: LoginPasswordArgs, context: GraphQLContext): Promise<gql.User> => {
            const user = (await auth_controller.login(args.email, args.password)).unwrap()
            await store_session(user.uuid, context.req, context.res)
            return user
        },
        log_in_token: async (_: any, args: LoginTokenArgs, context: GraphQLContext): Promise<gql.User> => {
            const user = await get_user_from_token(args.token)
            await store_session(user.uuid, context.req, context.res)
            return user
        },
        log_out: async (_: any, args: any, context: GraphQLContext): Promise<boolean> => {
            const sid = await context.session_id()
            if (!sid) return true
            await clear_session(sid, context.res)
            return true
        },
        send_login_email: async (_: any, args: SendLoginEmailArgs, _context: GraphQLContext): Promise<boolean> => {
            const user = await find_user(args.email)
            if (!user) throw new Error("No account was found.")
            await send_login_link_email(user, null)
            return true
        },
    },
}