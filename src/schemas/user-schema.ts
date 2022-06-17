import { object, z, string, TypeOf } from "zod";

export const CreateUserSchema = object({
    body: object({
        username: string({ required_error: "UserName is required tttt" }),

        password: string({ required_error: "Password Is Required" }),

        email: string({ required_error: "Password Is Required" }).email({ message: 'Email is not valid' }),

        passwordConfirm: string({ required_error: "Password Is Required" })

    }).refine( data => data.password === data.passwordConfirm,
        { message: 'Passwords do not match' })

      
});


export type CreateUserInput = TypeOf<typeof CreateUserSchema>["body"];