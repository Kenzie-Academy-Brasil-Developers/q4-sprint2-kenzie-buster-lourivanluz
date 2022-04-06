import { ConnectionOptions } from "typeorm";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

/* POSTGRES_DB= db_buster
POSTGRES_PASSWORD= 5432
PGPORT= 5432 */

const dbConfig = {
  type: "postgres",
  host: "localhost",
  port: Number(process.env.PGPORT),
  username: "postgres",
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  logging: false,
  entities: [path.join(__dirname, "../entities/**/*.*")],
  migrations: [path.join(__dirname, "../migrations/**/*.*")],
  cli: {
    entitiesDir: path.join(__dirname, "../entities"),
    migrationsDir: path.join(__dirname, "../migrations"),
  },
} as ConnectionOptions;

export default dbConfig;
