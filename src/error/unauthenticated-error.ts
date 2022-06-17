import { CustomError } from "./custom-error";

export class UnAuthenticated extends CustomError{
    statusCode: number;
    constructor(message:string){
        super(message);
        this.statusCode = 401;
    }
}