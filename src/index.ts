import app from "./api/app";
import {PORT} from "./utils/constants";
import db from "./db";


db.connect()
    .then(() => {
        app.listen(PORT, () => {
            console.log("listening on: http://localhost:"+PORT);
        });
    })
    .catch((error) => console.log(error));

