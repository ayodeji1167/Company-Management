import { CustomError } from "./custom-error";

export class BadRequestError extends CustomError{
    statusCode: number;
    constructor(message:string){
        super(message);
        this.statusCode = 400;
    }
}