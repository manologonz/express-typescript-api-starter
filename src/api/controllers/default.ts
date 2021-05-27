import {Request, Response, NextFunction} from "express";

export function welcome(req: Request, res: Response, next: NextFunction) {
    res.json({detail: "Welcome to the Node-Typescript API starter! :)"});
}
