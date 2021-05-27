import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import paginate from "express-paginate";
import {notFound, errorHandler} from "./utils/middlewares";
import defaultRoutes from "./routes/default";
import dotenv from "dotenv";

// get configurations
dotenv.config();

// application instance creation
const app = express();

// middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(paginate.middleware(10, 50));

// routes
app.use("/api", defaultRoutes);

// error handling
app.use(notFound);
app.use(errorHandler);

export default app;
