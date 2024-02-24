import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";

const PORT = process.env.TYPEORM_PORT as unknown as number | undefined;

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.TYPEORM_HOST,
  port: PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: "test_orm",
  entities: [`${__dirname}/**/entities/*.{ts, js}`],
  migrations: [`${__dirname}/**/migrations/*.{ts, js}`],
});
