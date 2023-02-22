import {Request, Response, NextFunction} from "express";
import {validationResult} from "express-validator";
import db from "../../db";
import {Welcome} from "../entities/welcome.entity";
import {APP_DOMAIN} from "../../utils/constants";
export async function welcome(req: Request, res: Response, next: NextFunction) {
    try {
        const WelcomeRepository = db.getRepository(Welcome);
        const config = await WelcomeRepository.findOneBy({});

        type ResBody = {
            message: string,
            endpoint?: {
                method: string,
                url: string
            }
        }

        const body: ResBody = {
            message: "",
        }

        if(config === null)  {
            body.message = "This is a default message, to change it you can use the create welcome message endpoint";
            body.endpoint = {
                method: "PUT",
                url: `http://${APP_DOMAIN}:5000/api/welcome`
            };
        } else {
           body.message = config.message;
        }

        res.json(body);
    } catch (error) {
        next(error);
    }
}

export async function createWelcomeEntry(req: Request, res: Response, next: NextFunction) {
    try {
        const WelcomeRepository = db.getRepository(Welcome);
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }

        let config = await WelcomeRepository.findOneBy({});
        if(config === null) {
            config = await WelcomeRepository.save({message: req.body.message});
        } else {
            config.message = req.body.message;
            config = await WelcomeRepository.save(config);
        }

        return res.json({currentMessage: config.message});
    } catch (error) {
        next(error);
    }
}
