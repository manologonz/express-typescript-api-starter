import app from "./api/app";
import {Port} from "./api/utils/types";

const port: Port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("Server listening on: http://localhost:"+port);
});
