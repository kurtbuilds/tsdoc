import {types} from "pg"
import {Connection, createConnection, getConnectionOptions, ConnectionOptions} from "typeorm"
import {User} from "src/auth/user.model"
import {Uuid} from "./type"
import {PostgresDriver} from "typeorm/driver/postgres/PostgresDriver"
import {Event} from "src/event/event.model"
import {Session} from "src/auth/session.model"
import {JobPosting} from "src/posting/model"
import {Job} from "src/job/model"

export let conn: Connection = undefined!

export {
    Event,
    Job,
    JobPosting,
    User,
    Session,
}
export type {Uuid}


export async function close() {
    await conn.close()
}

export async function truncate() {
    const url = (conn.options as any).url
    if (url !== process.env.TEST_TYPEORM_URL) {
        throw new Error(`Attempting to run truncate on a database other than TEST_TYPEORM_URL: ${url}`)
    }
    for (const m of conn.entityMetadatas ?? []) {
        await conn.query(`TRUNCATE TABLE "${m.tableNameWithoutPrefix}" CASCADE`)
    }
}


export async function make_connection(create_conn_fn: typeof createConnection, opts: ConnectionOptions): Promise<Connection> {
    opts = {
        ...opts,
        entities: [
            Event,
            Job,
            JobPosting,
            User,
            Session,
        ]
    }
    conn = await create_conn_fn(opts)
    // fixes utc issues, see https://github.com/typeorm/typeorm/issues/3286
    const driver = conn.driver as PostgresDriver
    driver.postgres.defaults.parseInputDatesAsUTC = true
    driver.postgres.types.setTypeParser(1114, (str: string) => new Date(str + "Z"))

    types.setTypeParser(20, BigInt)
    return conn
}

export async function create(): Promise<Connection> {
    return make_connection(createConnection, await getConnectionOptions())
}