import {Request, Response, NextFunction} from "express";
import {HttpError, ErrorResponse} from "./types";


// Not Found error generator
export function notFound(req: Request, res: Response, next: NextFunction) {
    const error: HttpError = new HttpError({message: "Not Found", statusCode: 404});
    next(error);
}

// Error response handler
export function errorHandler(err: HttpError, req: Request, res: Response, next: NextFunction) {
    res.status(err.statusCode || 500);
    const data: ErrorResponse = {
        detail: err.message,
    }

    if(!!err.validationErrors) {
        data.detail = err.validationErrors;
    }

    if(process.env.NODE_ENV === 'development') {
        data.stack = err.stack;
    }

    res.json(data);
}
