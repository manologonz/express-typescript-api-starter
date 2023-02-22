import {Router} from "express";
import RWelcome from "./welcome";

const router = Router();

router.use(RWelcome);

export default router;