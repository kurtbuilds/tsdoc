import * as Sentry from "@sentry/node"
import {ApolloServerPluginLandingPageDisabled, ApolloServerPluginLandingPageGraphQLPlayground} from "apollo-server-core"
import {ApolloServer} from "apollo-server-express"

import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import express, {Request, Response} from "express"
import process from "process"

import eventMiddleware from "src/event/event.middleware"
import {resolvers, typeDefs} from "src/gql"
import {GraphQLContext} from "src/gql/context"
import {global_error_handler} from "src/lib/app"
import {create} from "src/lib/db"
import {ENV} from "@kurtbuilds/env"
import loggerMiddleware from "src/middleware/logger"

ENV.ok()

const IOS_APPLICATION_IDENTIFIER = process.env.IOS_APPLICATION_IDENTIFIER
Sentry.init({dsn: ENV.opt.SENTRY_DSN})

const apollo = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req, res}): GraphQLContext => {
        return new GraphQLContext(req, res)
    },
    formatError: error => {
        console.log(error)
        return error
    },
    plugins: [
        process.env.NODE_ENV === "development"
            ? ApolloServerPluginLandingPageGraphQLPlayground()
            : ApolloServerPluginLandingPageDisabled()
    ],
})

const app = express()
app.set("x-powered-by", false)
app.set("views", "view")

app.use(Sentry.Handlers.requestHandler())
app.use(/^((?!\/webhook).)+$/, bodyParser.json())

const middlewares = [
    eventMiddleware,
    loggerMiddleware,
    express.static("public"),
    bodyParser.urlencoded({extended: true}),
    cookieParser(),
]
middlewares.forEach(middleware => {
    app.use(middleware)
})

//app.use("/api/stripe", stripe_router)

app.get("/healthcheck", (req: Request, res: Response) => {
    res.status(200).send("Ok")
})

app.get("/.well-known/apple-app-site-association", (req: Request, res: Response) => {
    res.header("Content-Type", "application/json")
    res.header("Content-Disposition", "inline;filename=apple-app-site-association")
    res.send({
        "applinks": {
            "apps": [],
            "details": [
                {
                    "appID": IOS_APPLICATION_IDENTIFIER,
                    "paths": ["*"]
                }
            ]
        },
        "webcredentials": {
            "apps": [
                IOS_APPLICATION_IDENTIFIER,
            ]
        }
    })
})

create().then(async _connection => {
    return apollo.start()
}).then(() => {
    apollo.applyMiddleware({
        app: app,
        path: "/gql",
    })
    app.use(Sentry.Handlers.errorHandler())
    app.use(global_error_handler)
    return app.listen(ENV.num.PORT, "0.0.0.0")
}).then(() => {
    console.log(`App launched after ${process.uptime()}. Listening on :${ENV.num.PORT}`)
}).catch(error => console.log(error))