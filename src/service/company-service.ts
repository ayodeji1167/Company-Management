import CompanyModel, { CompanyClass } from "../models/company-model";
import { BadRequestError } from "../error/bad-request-error";

export const createCompany = async (input: Partial<CompanyClass>) => {
  const company = await CompanyModel.create(input);
  return company;
};

export const findCompanyById = async (companyId: string) => {
  const company = await CompanyModel.findById(companyId);
  if (!company) {
    throw new BadRequestError(`Company with id ${companyId} not found`);
  }
  return company;
};

export const deleteCompany = async (companyId: string) => {
  const company = await CompanyModel.findByIdAndDelete(companyId);
  if (!company) {
    throw new BadRequestError(`Company with id ${companyId} not found`);
  }
};

export const updateCompany = async (
  companyId: string,
  input: Partial<CompanyClass>
) => {
  const company = await CompanyModel.findByIdAndUpdate(companyId, input);

  if (!company) {
    throw new BadRequestError(`Company with id ${companyId} not found`);
  }
  return company;
};

export const getAllCompanies = async ()=>{
  const companies: CompanyClass[] = await CompanyModel.find();
  return companies;
}


