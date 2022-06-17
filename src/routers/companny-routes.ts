import { createCompanyHandler, updateCompanyHandler,deleteCompanyHandler,getAllCompaniesHandler,findCompanyByIdHandler } from "../controller/company-controller";
import { ValidateSchems } from "../middlewares/validate";
import { Router } from "express";
export const companyRouter = Router();
import { CreateCompanySchema , UpdateCompanySchema } from "../schemas/company-schema";


companyRouter.route("/save").post(ValidateSchems(CreateCompanySchema), createCompanyHandler);
companyRouter.route("/all").get(getAllCompaniesHandler);
companyRouter.route("/:id").get(findCompanyByIdHandler);
companyRouter.route("/:id").put(ValidateSchems(UpdateCompanySchema), updateCompanyHandler);
companyRouter.route("/:id").delete(deleteCompanyHandler);
