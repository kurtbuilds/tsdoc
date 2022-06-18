import {OptionalNullableFields} from "src/lib/type"
import {ulid} from "src/lib/ulid"
import {BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm"


@Entity()
export class Job extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    uuid!: string

    @CreateDateColumn({type: "timestamptz"})
    created_at!: Date

    @Column({type: "varchar"})
    name!: string

    @Column({type: "jsonb"})
    data!: Record<string, any>

    @Column({type: "timestamptz", nullable: true})
    started_at!: Date | null

    @Column({type: "timestamptz", nullable: true})
    completed_at!: Date | null

    @Column({type: "jsonb", nullable: true})
    result_data!: object | null

    @Column({type: "varchar", nullable: true})
    error_stack!: string | null

    @Column({type: "timestamptz", nullable: true})
    scheduled_at!: Date | null

    constructor(data?: OptionalNullableFields<Job>) {
        super()
        Object.assign(this, {uuid: ulid()}, data)
    }
}

export const JOB_TYPES = [
    "build",
] as const
export type JobName = typeof JOB_TYPES[number]