import dotenv from "dotenv";
import {DataSourceOptions} from "typeorm";
import path from "path";

dotenv.config();

export const PORT = process.env.PORT || 8080;

export const MYSQL_PORT = Number(process.env.MYSQL_PORT) || 3306;

export const MYSQL_HOST = process.env.MYSQL_HOST || "localhost";

export const MYSQL_USERNAME = process.env.MYSQL_USERNAME || "root";

export const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD || "";

export const MYSQL_DATABASE = process.env.MYSQL_DATABASE || "mydb";

export const APP_DOMAIN = process.env.APP_DOMAIN || "localhost";

const apiPath = path.join(__dirname, "..", "api");
export const CONNECTION_CONFIGS: DataSourceOptions = {
    type: "mysql",
    host: MYSQL_HOST,
    port: MYSQL_PORT,
    username: MYSQL_USERNAME,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
    logging: true,
    synchronize: true,
    entities: [
        `${apiPath}/entities/**/*.entity.ts`
    ],
};