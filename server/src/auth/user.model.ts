import { OptionalNullableFields } from "@kurtbuilds/lib"
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Index} from "typeorm"
import {ulid} from "src/lib/ulid"


@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
    uuid!: string

    @CreateDateColumn()
    created_at!: Date

    @Column({ nullable: true, type: "varchar"})
    first_name?: string

    @Index({ unique: true })
    @Column({type: "varchar"})
    email!: string

    @Column({nullable: true, type: "varchar"})
    password_hash!: string | null

    @Column({type: "varchar"})
    timezone!: string

    constructor(data?: OptionalNullableFields<User>) {
        Object.assign(this, {uuid: ulid()}, data)
    }
}
