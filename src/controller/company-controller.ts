import { Request, Response } from "express"
import { createCompany, findCompanyById, updateCompany, deleteCompany, getAllCompanies } from "../service/company-service"
import { CreateCompanyInput, UpdateCompanyBody, UpdateCompanyParam } from "../schemas/company-schema"
import exp from "constants";
import { CompanyClass } from "../models/company-model";


//Create Company
export const createCompanyHandler = async (req: Request<{}, {}, CreateCompanyInput>, res: Response) => {
    const { dateOfEstablishment } = req.body;

    //Converting The Date String to Date Type so as to macth whats in the model
    const dateOfEstablishmentDate = new Date(dateOfEstablishment);
    const companyPayload = {
        ...req.body, dateOfEstablishment: dateOfEstablishmentDate
    }
    const company = await createCompany(companyPayload);
    res.status(200).json({ company });
}

//Find by id
export const findCompanyByIdHandler = async (req: Request, res: Response) => {
    const company = await findCompanyById(req.params.id);
    res.status(200).json({ company });
}

//Update Company
export const updateCompanyHandler = async (req: Request<UpdateCompanyParam, {}, UpdateCompanyBody>, res: Response) => {
    const { dateOfEstablishment } = req.body;
    const dateOfEstablishmentDate = dateOfEstablishment ? new Date(dateOfEstablishment) : undefined;

    const companyUpdatePayload = { ...req.body, dateOfEstablishment: dateOfEstablishmentDate }

    const company = await updateCompany(req.params.id, companyUpdatePayload);

    res.status(200).json({ company });
}


//Delete Company
export const deleteCompanyHandler = async (req: Request, res: Response) => {
    const company = await deleteCompany(req.params.id);
    res.status(200).json({ mssg: "Company successfully Deleted" });
}

//Get All Companies
export const getAllCompaniesHandler = async (req: Request, res: Response) => {
    const companies: CompanyClass[] = await getAllCompanies();
    res.status(200).json(companies);
}