import {MigrationInterface, QueryRunner} from "typeorm";

export class jobsAndPostings1655588225058 implements MigrationInterface {
    name = 'jobsAndPostings1655588225058'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "job" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "name" character varying NOT NULL, "data" jsonb NOT NULL, "started_at" TIMESTAMP WITH TIME ZONE, "completed_at" TIMESTAMP WITH TIME ZONE, "result_data" jsonb, "error_stack" character varying, "scheduled_at" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_163ccf9a50de87d231e06ec0c7c" PRIMARY KEY ("uuid"))`);
        await queryRunner.query(`CREATE TABLE "job_posting" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "company_name" character varying NOT NULL, "description" character varying NOT NULL, "tags" jsonb NOT NULL, "apply_link" character varying NOT NULL, CONSTRAINT "PK_4fe3522bd43677b722576494b28" PRIMARY KEY ("uuid"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "job_posting"`);
        await queryRunner.query(`DROP TABLE "job"`);
    }

}
