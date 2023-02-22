import {checkSchema} from "express-validator";
export const createWelcomeValidators = checkSchema({
    message: {
        isString: true,
        errorMessage: "Please enter a message"
    }
});