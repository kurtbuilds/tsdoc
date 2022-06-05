import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from "typeorm";

@Entity({name: 'pushdevice'})
export class PushDevice {

    @PrimaryGeneratedColumn("uuid")
    uuid!: string;

    @CreateDateColumn()
    created_at!: Date;

    @Column({type: "uuid"})
    user_uuid!: string;

    @Column({type: 'varchar'})
    name!: string;

    @Column({type: 'varchar'})
    token!: string;

    @Column({type: 'varchar'})
    platform!: string;
}
