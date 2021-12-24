import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 8080;

export const MONGODB_DBNAME = process.env.MONGODB_DBNAME || "mydb";

export const MONGODB_BASEURL = process.env.MONGODB_BASEURL || "mongodb://localhost:27017";

export const MONGODB_URL = `${MONGODB_BASEURL}/${MONGODB_DBNAME}`;
