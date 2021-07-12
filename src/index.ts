import app from "./api/app";
import {PORT} from "./utils/constants";


app.listen(PORT, () => {
    console.log("listening on: http://localhost:"+PORT);
});
