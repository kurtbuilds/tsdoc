import {HtmlTagDescriptor, Plugin} from "vite"
import {defineConfig, UserConfig} from "vitest/config"
import {imagetools} from "vite-imagetools"
import {join, resolve} from "path"
import {homedir} from "os"
import react from "@vitejs/plugin-react"
//@ts-ignore
import history from "connect-history-api-fallback"
import {NextFunction, Request, Response} from "express-serve-static-core"
import {IncomingMessage, ServerResponse} from "http"
import del from "rollup-plugin-delete"
import {readdirSync, readFileSync} from "fs"
import {do_rewrite, LIBDOC_REGEX} from "./src/lib/config"

const expanduser = (text: string) => text.replace(/^~/, homedir())

const https = Boolean(process.env.HTTPS) ? {
    key: expanduser(process.env.SSL_KEY_FILE!),
    cert: expanduser(process.env.SSL_CRT_FILE!),
} : undefined

const SwapHtmlFileForLibdocOne: Plugin = {
    name: "select-html-file",
    apply: "build",
    transformIndexHtml: {
        enforce: "pre",
        transform: function (html: string): string | HtmlTagDescriptor[] {
            // This is a hack to allow us to have multiple entrypoints when BUILDING.
            if (process.env.BUILD_PACKAGE_NAME) {
                return readFileSync("src/libdoc/index.html", "utf-8")
            } else {
                return html
            }
        },
    }
}

/// lets us do substitution of env vars in the html file(s)

const ReplaceHtmlEnvVar = () => {
    return {
        name: "html-transform",
        transformIndexHtml(html: string) {
            console.log("html", html)
            // @ts-ignore
            return html.replace(/%([^%]+?)%/g, function (match, p1) {
                return "foobar"
                return process.env[p1]
            })
        },
    } as Plugin
}

function safe_readdirSync(p: string): string[] {
    try {
        return readdirSync(p)
    } catch (e) {
        return []
    }
}

const AVAILABLE_LIBS = Object.fromEntries(safe_readdirSync("stage")
    .filter(p => !p.includes("."))
    .map(p => [p, JSON.parse(readFileSync(join("stage", p, "package.json"), "utf-8")).version]))

function redirectAllCustom() {
    return {
        name: "redirect-custom",
        configureServer(server: any) {
            server.middlewares.use((req: IncomingMessage, res: ServerResponse, next: NextFunction) => {
                const url = (req as any).originalUrl
                if (do_rewrite(url)) {
                    const handler = history({
                        disableDotRule: true,
                        rewrites: [
                            {
                                from: LIBDOC_REGEX, to: function (context) {
                                    if (AVAILABLE_LIBS[context.match[2]] === context.match[3]) {
                                        return "/src/libdoc/index.html"
                                    } else {
                                        return "/index.html"
                                    }
                                }
                            }
                        ],
                    })
                    handler(req as Request, res as Response, next)
                } else {
                    next()
                }
            })
        }
    }
}


function resolve_del_folder(): string {
    const idx = process.argv.indexOf("--outDir")
    if (idx > -1) {
        return process.argv[idx + 1]
    }
    throw new Error("Could not resolve ---outDir")
}


const SSR_BUILD = process.argv.includes("--ssr")

const BASE_CONFIG: UserConfig = {
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
            // input: {
            //     index: "index.html",
            //     libdoc: resolve("src/libdoc/index.tsx"),
            //     tsdoc: resolve("src/tsdoc/index.tsx"),
            // },
            plugins: [
                // if we're building a library,
                // this deletes all the extra shit from public.
                process.env.BUILD_PACKAGE_NAME
                    ? del({targets: join(resolve_del_folder(), "*"), hook: "generateBundle"})
                    : undefined,
            ],
        },
    },
    plugins: [
        imagetools(),
        react(),
        redirectAllCustom(),
        ReplaceHtmlEnvVar(),
    ],
    resolve: {
        alias: {
            "src": resolve(__dirname, "src"),
        },
    },
    test: {
        environment: "jsdom",
        globals: true,
        include: ["src/**/__tests__/*.{ts,tsx}"],
    },
}

if (process.env.BUILD_PACKAGE_NAME) {
    BASE_CONFIG.plugins!.push(SwapHtmlFileForLibdocOne)
} else if (SSR_BUILD) {

} else {
    // dev server build
}
export default defineConfig()