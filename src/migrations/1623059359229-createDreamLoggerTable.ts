import {MigrationInterface, QueryRunner} from "typeorm";

export class createDreamLoggerTable1623059359229 implements MigrationInterface {
    name = 'createDreamLoggerTable1623059359229'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "dreams" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "date" TIMESTAMP NOT NULL DEFAULT now(), "was_lucid" boolean NOT NULL, "was_nightmare" boolean NOT NULL, "summary" character varying NOT NULL, "description" character varying NOT NULL, "last_meal_before_bed" character varying NOT NULL, "last_activity_before_bed" character varying NOT NULL, CONSTRAINT "PK_b4f37d6173d7b9d9db610860082" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "dreams"`);
    }

}
