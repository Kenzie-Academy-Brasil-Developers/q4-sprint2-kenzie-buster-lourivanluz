import { MigrationInterface, QueryRunner } from "typeorm";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();
const env = process.env;

export class createTables1649347022147 implements MigrationInterface {
  name = "createTables1649347022147";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "stock" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "quantity" integer NOT NULL, "price" double precision NOT NULL, "moveId" uuid, CONSTRAINT "REL_68935c1c259c4b4156a01711bb" UNIQUE ("moveId"), CONSTRAINT "PK_092bc1fc7d860426a1dec5aa8e9" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "isAdm" boolean NOT NULL DEFAULT false, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "userMovies" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "total" double precision NOT NULL, "paid" boolean NOT NULL DEFAULT false, "userId" uuid, "moviesId" uuid, CONSTRAINT "PK_0716c1e9c6078d88d0a49292173" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "movies" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "duration" character varying NOT NULL, "stockId" uuid, CONSTRAINT "UQ_3a794f850bd3e432c46b3faa913" UNIQUE ("name"), CONSTRAINT "REL_5106abe208463529d022dfa86d" UNIQUE ("stockId"), CONSTRAINT "PK_c5b2c134e871bfd1c2fe7cc3705" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `ALTER TABLE "stock" ADD CONSTRAINT "FK_68935c1c259c4b4156a01711bb2" FOREIGN KEY ("moveId") REFERENCES "movies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "userMovies" ADD CONSTRAINT "FK_8b46ebf47e592a5979ae978635c" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "userMovies" ADD CONSTRAINT "FK_44b803a02f1d32975f9590db09b" FOREIGN KEY ("moviesId") REFERENCES "movies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "movies" ADD CONSTRAINT "FK_5106abe208463529d022dfa86d5" FOREIGN KEY ("stockId") REFERENCES "stock"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `INSERT INTO "users"(name,email,password,"isAdm") VALUES('${
        env.ADMIN_NAME
      }','${env.ADMIN_EMAIL}','${await bcrypt.hash(
        env.ADMIN_PASSWORD,
        10
      )}',true)`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "movies" DROP CONSTRAINT "FK_5106abe208463529d022dfa86d5"`
    );
    await queryRunner.query(
      `ALTER TABLE "userMovies" DROP CONSTRAINT "FK_44b803a02f1d32975f9590db09b"`
    );
    await queryRunner.query(
      `ALTER TABLE "userMovies" DROP CONSTRAINT "FK_8b46ebf47e592a5979ae978635c"`
    );
    await queryRunner.query(
      `ALTER TABLE "stock" DROP CONSTRAINT "FK_68935c1c259c4b4156a01711bb2"`
    );
    await queryRunner.query(`DROP TABLE "movies"`);
    await queryRunner.query(`DROP TABLE "userMovies"`);
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`DROP TABLE "stock"`);
  }
}
