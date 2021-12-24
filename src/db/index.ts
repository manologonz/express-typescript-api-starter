import {createConnection, Connection, getConnection} from "typeorm";
import {CONNECTION_CONFIGS} from "../utils/constants";

function connect(): Promise<Connection> {
    return new Promise((resolve, reject) => {
        return createConnection(CONNECTION_CONFIGS)
            .then((connection) => {
                resolve(connection);
            })
            .catch((error) => reject(error));
    });
}

function close() {
    getConnection().close();
}

const db = {
    connect,
    close
}

export default db;
