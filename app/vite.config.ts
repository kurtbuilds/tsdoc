import {defineConfig} from "vitest/config"
import {imagetools} from "vite-imagetools"
import {resolve} from "path"
import {homedir} from "os"
import react from "@vitejs/plugin-react"
import history from "connect-history-api-fallback"
import {NextFunction, Request, Response} from "express-serve-static-core"
import {IncomingMessage, ServerResponse} from "http"
import del from "rollup-plugin-delete"
import fs from "fs"

const expanduser = (text: string) => text.replace(/^~/, homedir())

const https = Boolean(process.env.HTTPS) ? {
    key: expanduser(process.env.SSL_KEY_FILE!),
    cert: expanduser(process.env.SSL_CRT_FILE!),
} : undefined

/// lets us do substitution of env vars in the html file(s)
const HtmlPlugin = () => {
    return {
        name: "html-transform",
        transformIndexHtml(html: string): string {
            // @ts-ignore
            return html.replace(/%(.*?)%/g, function (match, p1) {
                return process.env[p1]
            })
        },
    }
}


function redirectAllCustom() {
    return {
        name: "log-url",
        configureServer(server: any) {
            return () => {
                server.middlewares.use((req: IncomingMessage, res: ServerResponse, next: NextFunction) => {
                    // if (req.url?.endsWith(".ts")) {
                    //     const path = join(__dirname, "public", req.url!, "./index.html")
                    //     console.log(path)
                    //     const body = readFileSync(path).toString()
                    //     res.setHeader("Content-Type", "text/html")
                    //     res.write(body)
                    //     res.end()
                    // } else {
                    const handler = history({
                        disableDotRule: true,
                        rewrites: [{from: /\/$/, to: () => "/index.html"}]
                    })
                    handler(req as Request, res as Response, next)
                    // }
                })
            }
        }
    }
}

const BASE_FOLDER = process.env.BUILD_PACKAGE_NAME
    ? `${process.env.BUILD_PACKAGE_NAME}/${process.env.BUILD_PACKAGE_VERSION}/assets`
    : "assets"
// const BASE_FOLDER = "assets"
// https://vitejs.dev/config/
const SSR_BUILD = process.argv.includes("--ssr")
export default defineConfig({
    server: {
        https,
        port: parseInt(process.env.PORT!),
        // host: "0.0.0.0",
        // origin: "*",
        proxy: {
            "/api": "http://127.0.0.1:5000",
            "/gql": "http://127.0.0.1:5000",
        },
    },
    build: {
        outDir: "build",
        target: "es2020",
        rollupOptions: {
            output: {
                entryFileNames: SSR_BUILD ? "[name].js" : `${BASE_FOLDER}/[name].[hash].js`,
                chunkFileNames: `${BASE_FOLDER}/[name].[hash].js`,
                assetFileNames: `${BASE_FOLDER}/[name].[hash].[ext]`
            },
            plugins: [
                process.env.BUILD_PACKAGE_NAME
                    ? del({targets: "library/*", hook: "generateBundle"})
                    : undefined,
            ]
        }
    },
    plugins: [
        imagetools(),
        HtmlPlugin(),
        react(),
        redirectAllCustom(),
    ],
    resolve: {
        alias: {
            "src": resolve(__dirname, "src"),
        },
    },
    test: {
        // match ts or tsx files
        include: ["src/**/__tests__/*.{ts,tsx}"],
        transformMode: {
            web: [/\.[jt]sx$/],
        },
    },
})
