import {defineConfig} from "vitest/config"
import {imagetools} from "vite-imagetools"
import {resolve, join} from "path"
import {homedir} from "os"
import react from "@vitejs/plugin-react"
//@ts-ignore
import history from "connect-history-api-fallback"
import {NextFunction, Request, Response} from "express-serve-static-core"
import {IncomingMessage, ServerResponse} from "http"
import del from "rollup-plugin-delete"
import {readFileSync} from "fs"

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
        name: "redirect-custom",
        configureServer(server: any) {
            server.middlewares.use("/query-registry/2.5.0", (req: IncomingMessage, res: ServerResponse, next: NextFunction) => {
                const url = (req as any).originalUrl
                if (!url.startsWith("/query-registry/2.5.0/assets")) {
                    const html = readFileSync(join("public", "query-registry/2.5.0/", "index.html"), "utf-8")
                    res.write(html)
                    res.end()
                } else {
                    next()
                }
            })
        }
    }
}

// console.log(process.env)
const BASE_FOLDER = process.env.BUILD_PACKAGE_NAME
    ? `${process.env.BUILD_PACKAGE_NAME}/${process.env.BUILD_PACKAGE_VERSION}/assets`
    : "assets"
// const BASE_FOLDER = "assets"
// https://vitejs.dev/config/
const SSR_BUILD = process.argv.includes("--ssr")
export default defineConfig({
    server: {
        https,
        open: true,
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
            input: {
                libdoc: resolve("src", "libdoc", "index.html"),
            },
            output: {
                entryFileNames: SSR_BUILD ? "[name].js" : `${BASE_FOLDER}/[name].[hash].js`,
                chunkFileNames: `${BASE_FOLDER}/[name].[hash].js`,
                assetFileNames: `${BASE_FOLDER}/[name].[hash].[ext]`
            },
            plugins: [
                process.env.BUILD_PACKAGE_NAME
                    ? del({targets: "library/*", hook: "generateBundle"})
                    : undefined,
            ],
        },
    },
    plugins: [
        imagetools(),
        HtmlPlugin(),
        react(),
        // redirectAllCustom(),
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