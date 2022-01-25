import { Sequelize } from "sequelize";

export const db = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USERNAME,
    process.env.DATABASE_PASSWORD,
    {
        dialect: "postgres",
        host: process.env.DATABASE_HOST,
        port: +process.env.DATABASE_PORT
    }
)