import {DeleteResult, InsertResult, UpdateResult} from "typeorm"

/** Typeorm query results. Use like:
 *
 * await getConnection().query('SELECT ...') as SelectQuery<...>
 * await getConnection().query('UPDATE ...') as UpdateQuery<...>
 */
export type SelectQuery<T> = T[]
export type InsertQuery<T> = T[]
export type UpdateQuery<T> = [T[], number]
export type DeleteQuery<T> = [T[], number]


/**
 * Use as:
 *
 * .insert()
 * .execute()
 * .then(r => QbInsert<...>(r))
 *
 * Type parameter is optional if you're in return position of your function.
 * @param result
 * @constructor
 */
export function QbInsert<T>(result: InsertResult): T[] {
    return result.generatedMaps as any as T[]
}


export function QbUpdate<T>(result: UpdateResult): [T[], number | undefined] {
    return [result.generatedMaps as any as T[], result.affected]
}


export function QbDelete<T>(result: DeleteResult): [T[], number | undefined] {
    // TODO I have no idea why *this* `.affected` gives number | null | undefined, not sure if that means anything.
    return [result.raw as any as T[], result.affected!]
}