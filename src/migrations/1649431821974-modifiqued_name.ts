import {MigrationInterface, QueryRunner} from "typeorm";

export class modifiquedName1649431821974 implements MigrationInterface {
    name = 'modifiquedName1649431821974'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stock" DROP CONSTRAINT "FK_68935c1c259c4b4156a01711bb2"`);
        await queryRunner.query(`ALTER TABLE "movies" DROP CONSTRAINT "FK_5106abe208463529d022dfa86d5"`);
        await queryRunner.query(`ALTER TABLE "stock" RENAME COLUMN "moveId" TO "moveidId"`);
        await queryRunner.query(`ALTER TABLE "stock" RENAME CONSTRAINT "REL_68935c1c259c4b4156a01711bb" TO "UQ_3a81981dd7298746bd3a90ceb9d"`);
        await queryRunner.query(`ALTER TABLE "movies" RENAME COLUMN "stockId" TO "stockidId"`);
        await queryRunner.query(`ALTER TABLE "movies" RENAME CONSTRAINT "REL_5106abe208463529d022dfa86d" TO "UQ_4ac7eefa68ad88b4757fce38378"`);
        await queryRunner.query(`ALTER TABLE "stock" ADD CONSTRAINT "FK_3a81981dd7298746bd3a90ceb9d" FOREIGN KEY ("moveidId") REFERENCES "movies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "movies" ADD CONSTRAINT "FK_4ac7eefa68ad88b4757fce38378" FOREIGN KEY ("stockidId") REFERENCES "stock"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movies" DROP CONSTRAINT "FK_4ac7eefa68ad88b4757fce38378"`);
        await queryRunner.query(`ALTER TABLE "stock" DROP CONSTRAINT "FK_3a81981dd7298746bd3a90ceb9d"`);
        await queryRunner.query(`ALTER TABLE "movies" RENAME CONSTRAINT "UQ_4ac7eefa68ad88b4757fce38378" TO "REL_5106abe208463529d022dfa86d"`);
        await queryRunner.query(`ALTER TABLE "movies" RENAME COLUMN "stockidId" TO "stockId"`);
        await queryRunner.query(`ALTER TABLE "stock" RENAME CONSTRAINT "UQ_3a81981dd7298746bd3a90ceb9d" TO "REL_68935c1c259c4b4156a01711bb"`);
        await queryRunner.query(`ALTER TABLE "stock" RENAME COLUMN "moveidId" TO "moveId"`);
        await queryRunner.query(`ALTER TABLE "movies" ADD CONSTRAINT "FK_5106abe208463529d022dfa86d5" FOREIGN KEY ("stockId") REFERENCES "stock"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "stock" ADD CONSTRAINT "FK_68935c1c259c4b4156a01711bb2" FOREIGN KEY ("moveId") REFERENCES "movies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
