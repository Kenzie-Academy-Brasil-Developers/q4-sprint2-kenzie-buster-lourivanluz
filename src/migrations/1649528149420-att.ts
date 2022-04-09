import {MigrationInterface, QueryRunner} from "typeorm";

export class att1649528149420 implements MigrationInterface {
    name = 'att1649528149420'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stock" DROP CONSTRAINT "FK_68935c1c259c4b4156a01711bb2"`);
        await queryRunner.query(`ALTER TABLE "stock" RENAME COLUMN "moveId" TO "movieId"`);
        await queryRunner.query(`ALTER TABLE "stock" RENAME CONSTRAINT "UQ_68935c1c259c4b4156a01711bb2" TO "UQ_07de1d73dd6d20f9a320b1560aa"`);
        await queryRunner.query(`ALTER TABLE "stock" ADD CONSTRAINT "FK_07de1d73dd6d20f9a320b1560aa" FOREIGN KEY ("movieId") REFERENCES "movies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stock" DROP CONSTRAINT "FK_07de1d73dd6d20f9a320b1560aa"`);
        await queryRunner.query(`ALTER TABLE "stock" RENAME CONSTRAINT "UQ_07de1d73dd6d20f9a320b1560aa" TO "UQ_68935c1c259c4b4156a01711bb2"`);
        await queryRunner.query(`ALTER TABLE "stock" RENAME COLUMN "movieId" TO "moveId"`);
        await queryRunner.query(`ALTER TABLE "stock" ADD CONSTRAINT "FK_68935c1c259c4b4156a01711bb2" FOREIGN KEY ("moveId") REFERENCES "movies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
