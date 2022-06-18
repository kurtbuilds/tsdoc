export type Uuid = string

export type User = Partial<{
    uuid: Uuid,
    email: string,
}>