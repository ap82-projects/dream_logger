import {MigrationInterface, QueryRunner} from "typeorm";

export class changeDateFromDateToString1623079930778 implements MigrationInterface {
    name = 'changeDateFromDateToString1623079930778'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dreams" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "dreams" ADD "date" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dreams" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "dreams" ADD "date" TIMESTAMP NOT NULL DEFAULT now()`);
    }

}
