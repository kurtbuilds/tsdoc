import { defineConfig } from "vite"
import {imagetools} from "vite-imagetools"
import preact from "@preact/preset-vite"
import {resolve} from "path"
import {homedir} from "os"

const expanduser = (text: string) => text.replace(/^~/, homedir())

// const https = Boolean(process.env.HTTPS) ? {
//     key: expanduser(process.env.SSL_KEY_FILE!),
//     cert: expanduser(process.env.SSL_CRT_FILE!),
// } : undefined

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        // https,
        // port: parseInt(process.env.PORT!),
        // host: process.env.HOST!,
        proxy: {
            // "/api": "http://127.0.0.1:5000",
            // "/gql": "http://127.0.0.1:5000",
        },
    },
    build: {
        outDir: "build",
    },
    plugins: [
        preact(),
        imagetools(),
    ],
    resolve: {
        alias: {
            "src": __dirname + "/src",
            "react": "preact/compat",
            "react-dom": "preact/compat",
        },
    },
    esbuild: {
        jsxFactory: "h",
        jsxFragment: "Fragment",
        jsxInject: "import { h, Fragment } from \"preact\"",
    },
})