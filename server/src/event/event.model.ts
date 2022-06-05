import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from "typeorm";

@Entity({name: 'event'})
export class Event {

    @PrimaryGeneratedColumn("uuid")
    uuid!: string;

    @CreateDateColumn()
    created_at!: Date;

    @Column({type: 'varchar'})
    name!: string;

    @Column({type: 'varchar'})
    url!: string;

    @Column({type: 'integer'})
    status!: number;

    @Column({type: 'varchar'})
    method!: string;

    @Column({type: 'varchar'})
    ipAddress!: string;

    @Column({type: "jsonb"})
    data!: object;

    @Column({type: "uuid", nullable: true})
    user_uuid?: string;
}
