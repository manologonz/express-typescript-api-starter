import mongoose from "mongoose";
import {MONGODB_URL} from "../utils/constants";

function connect(): Promise<void> {
    return new Promise((resolve, reject) => {
        mongoose.connect(MONGODB_URL, (error) => {
            if(error) return reject(error);
            console.log("connected to database");
            resolve();
        });
    });
}

function close(): Promise<void> {
    return mongoose.connection.close();
}

const db = {
    connect,
    close
};

export default db;
