import {Column, CreateDateColumn, Entity, PrimaryColumn} from "typeorm"

@Entity({name: "session"})
export class Session {

    @PrimaryColumn({type: "varchar"})
    session_id!: string

    @CreateDateColumn()
    created_at!: Date

    @Column({type: "uuid"})
    user_uuid!: string

    @Column({type: "varchar"})
    user_agent!: string

    @Column({type: "varchar"})
    ip_address!: string

    @Column({type: "varchar", nullable: true})
    location!: string | null

    @Column({type: "timestamp"})
    last_accessed_at!: Date

    @Column({type: "timestamp", nullable: true})
    revoked_at?: Date | null
}