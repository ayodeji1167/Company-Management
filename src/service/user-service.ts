import UserModel, { UserClass } from "../models/user-model";
import { BadRequestError } from "../error/bad-request-error";
import CompanyModel, { CompanyClass } from "../models/company-model";

export const createUser = async (input: Partial<UserClass>) => {
  const user = await UserModel.create(input);
  return user;
};

export const findUserById = async (id: string) => {
  const user = await UserModel.findById(id).select("-password").populate("company");
  if (!user) {
    throw new BadRequestError(`User with id ${id} not found`);
  }
  return user;
};

export const getUserByStreet = async (street: string) => {
  const user = await UserModel.findOne({ "adress.street": street });
  if (!user) {
    throw new BadRequestError(`User with street ${street} not found`);
  }
  return user;
};

export const deleteUserById = async (id: string) => {
  const user = await UserModel.findByIdAndRemove(id);
  if (!user) {
    throw new BadRequestError(`User with id ${id} not found`);
  }
  return;
};

export const addCompanyToUser = async (companyId: string, userId: string) => {
  const user = await UserModel.findById(userId);
  const company = await CompanyModel.findById(companyId);
  if (!user || !company) {
    throw new BadRequestError("User or Company Not Found");
  }
  user.company = company;
  user.save();
  return user;
};
