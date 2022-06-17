import { object, string, TypeOf, number } from "zod";

export const CreateCompanySchema = object({

    body: object ({

        name: string({required_error:"Name is required"}),
        address: string({required_error:"Adress is required"}),
        noOfEmployees: number({required_error:"Number Of Employees is required"}),
        telephoneNumber:string({required_error:"Company name is required"}).min(5, "Number must not be less than 5"),
        email:string({required_error:"Company email is required"}).email("Please Input a valid email address"),
        dateOfEstablishment: string().refine((date:string)=> new Date(date).toString() !== "Invalid Date", "Please input a valid date")

    })

})

export type CreateCompanyInput = TypeOf<typeof CreateCompanySchema>["body"]


//Update Company  Schema
export const UpdateCompanySchema = object({

    body:object({
        name: string().optional(),
        address: string().optional(),
        telephoneNumber:string().optional(),
    
        email:string().optional(),
        dateOfEstablishment: string().refine((date:string)=> new Date(date).toString() !== "Invalid Date", "Please input a valid date").optional()
    }),

    params: object({
        id:string({required_error:"Company id is required"})
    })

})

export type UpdateCompanyParam = TypeOf<typeof UpdateCompanySchema>["params"]
export type UpdateCompanyBody = TypeOf<typeof UpdateCompanySchema>["body"]