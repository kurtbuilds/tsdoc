import {OptionalNullableFields} from "src/lib/type"
import {ulid} from "src/lib/ulid"
import {BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm"


interface Tag {
    name: string
}


interface Tags {
    tags: Tag[]
}


@Entity()
export class JobPosting extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    uuid!: string

    @CreateDateColumn({type: "timestamptz"})
    created_at!: Date

    @Column({type: "varchar"})
    company_name!: string

    @Column({type: "varchar"})
    description!: string

    @Column({type: "jsonb"})
    tags!: Tags

    @Column({type: "varchar"})
    apply_link!: string

    constructor(data?: OptionalNullableFields<JobPosting>) {
        super()
        Object.assign(this, {uuid: ulid()}, data)
    }
}