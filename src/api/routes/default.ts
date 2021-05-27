import express from "express";
import {welcome} from "../controllers/default";

const router: express.Router = express.Router();

router.get("/", welcome);

export default router;
