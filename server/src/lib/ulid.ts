import {randomBytes} from "crypto"

export function ulid() {
    const ts = Date.now()
    return Buffer.concat([
        Buffer.from([
            (ts / Math.pow(2, 40)) | 0,
            (ts / Math.pow(2, 32)) | 0,
            (ts / Math.pow(2, 24)) | 0,
            (ts / Math.pow(2, 16)) | 0,
            (ts / Math.pow(2, 8)) | 0,
            ts,
        ]),
        randomBytes(10),
    ]).toString("hex")
        .replace(/(.{8})(.{4})(.{4})(.{4})(.{12})/, "$1-$2-$3-$4-$5")
}