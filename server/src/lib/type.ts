import { BaseEntity } from "typeorm"

export {Err, Ok, Result} from "@kurtbuilds/lib"
export type Cent = bigint
export type EmailAddress = string
export type Uuid = string

type KeysOfType<T, SelectedType> = {
    [key in keyof T]: SelectedType extends T[key] ? key : never;
}[keyof T];

type Optional<T> = Partial<Pick<T, KeysOfType<T, undefined>>>;

type Required<T> = Omit<T, KeysOfType<T, undefined>>;

type OptionalUndefined<T> = Optional<T> & Required<T>;

type AddUndefinedToNullable<T> = {
    [K in keyof T]: K extends "uuid" | "created_at"
        ? T[K] | undefined
        : T[K] extends NonNullable<T[K]>
            ? T[K]
            : T[K] | undefined
}

export type OptionalNullableFields<T> = Omit<OptionalUndefined<AddUndefinedToNullable<T>>, keyof BaseEntity>

