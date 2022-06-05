import {MigrationInterface, QueryRunner} from "typeorm"

export class initialMigration1614234739173 implements MigrationInterface {
    name = "initialMigration1614234739173"

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE \"session\" (\"session_id\" character varying NOT NULL, \"created_at\" TIMESTAMP NOT NULL DEFAULT now(), \"user_uuid\" uuid NOT NULL, \"user_agent\" character varying NOT NULL, \"ip_address\" character varying NOT NULL, \"location\" character varying, \"last_accessed_at\" TIMESTAMP NOT NULL, \"revoked_at\" TIMESTAMP, CONSTRAINT \"PK_8ba62b11184a8d3312278d4d1ac\" PRIMARY KEY (\"session_id\"))")
        await queryRunner.query("CREATE TABLE \"user\" (\"uuid\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"created_at\" TIMESTAMP NOT NULL DEFAULT now(), \"first_name\" character varying, \"email\" character varying NOT NULL, \"password_hash\" character varying, \"timezone\" character varying NOT NULL, CONSTRAINT \"PK_a95e949168be7b7ece1a2382fed\" PRIMARY KEY (\"uuid\"))")
        await queryRunner.query("CREATE UNIQUE INDEX \"IDX_e12875dfb3b1d92d7d7c5377e2\" ON \"user\" (\"email\") ")
        await queryRunner.query("CREATE TABLE \"event\" (\"uuid\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"created_at\" TIMESTAMP NOT NULL DEFAULT now(), \"name\" character varying NOT NULL, \"url\" character varying NOT NULL, \"status\" integer NOT NULL, \"method\" character varying NOT NULL, \"ipAddress\" character varying NOT NULL, \"data\" jsonb NOT NULL, \"user_uuid\" uuid, CONSTRAINT \"PK_d2ea43d0ee94369479bfbbfff42\" PRIMARY KEY (\"uuid\"))")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE \"event\"")
        await queryRunner.query("DROP INDEX \"IDX_e12875dfb3b1d92d7d7c5377e2\"")
        await queryRunner.query("DROP TABLE \"user\"")
        await queryRunner.query("DROP TABLE \"session\"")
    }

}
