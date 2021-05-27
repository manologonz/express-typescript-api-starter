export class HttpError extends Error {
    statusCode: number;
    message: string;

    constructor(message: string, statusCode: number) {
        super(message);
        this.message = message;
        this.statusCode = statusCode;
    }
}

export type ErrorResponse = {
    detail: string | object,
    stack?: string
}

export type Port = string | number;
