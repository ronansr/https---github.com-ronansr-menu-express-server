import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";

const PORT = process.env.TYPEORM_PORT as unknown as number | undefined;

export const AppDataSource = new DataSource({
  type: "postgres",
  url: "postgres://postgres.plsfjzwayumzwtqprbwr:kjZRW90rhphgWe6y@aws-0-sa-east-1.pooler.supabase.com:5432/postgres", //process.env.TYPEORM_HOST,
  port: 5432, //PORT,
  username: "postgres", //process.env.TYPEORM_USERNAME,
  password: "kjZRW90rhphgWe6y", //process.env.TYPEORM_PASSWORD,
  database: "postgres", //"test_orm",
  entities: [`${__dirname}/**/entities/*.{ts, js}`],
  migrations: [`${__dirname}/**/migrations/*.{ts, js}`],
  ssl: { rejectUnauthorized: false },
});
