import dotenv from "dotenv";
import {ConnectionOptions} from "typeorm";
dotenv.config();

export const PORT = process.env.PORT || 8080;

export const MYSQL_PORT = Number(process.env.MYSQL_PORT) || 3306;

export const MYSQL_HOST = process.env.MYSQL_HOST || "localhost";

export const MYSQL_USERNAME = process.env.MYSQL_USERNAME || "root";

export const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD || "";

export const MYSQL_DATABASE = process.env.MYSQL_DATABASE || "mydb";

export const CONNECTION_CONFIGS: ConnectionOptions = {
    type: "mysql",
    host: MYSQL_HOST,
    port: MYSQL_PORT,
    username: MYSQL_USERNAME,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
    logging: true,
    synchronize: true,
    entities: [],
};