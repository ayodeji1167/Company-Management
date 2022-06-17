import { Request, Response, NextFunction } from "express";
import { CreateUserInput } from "../schemas/user-schema";
import UserModel from "../models/user-model";
import {
  createUser,
  findUserById,
  getUserByStreet,
  deleteUserById,
addCompanyToUser} from "../service/user-service";

export const createUserHandler = async (req: Request<{},{}, CreateUserInput>, res: Response) => {
  const user = await createUser(req.body);
  res.status(200).json(user);
};

export const findUserByIdHandler = async (req: Request, res: Response) => {
  const user = await findUserById(req.params.id);
  res.status(200).json(user);
};

export const findUserByStreetHandler = async (
  req: Request<{}, {}, {}, { street: string }>,
  res: Response
) => {
  const { street } = req.query;
  console.log(street);
  const user = await getUserByStreet(street);

  res.status(200).json(user);
};

export const deleteUserHandler = async (req:Request, res: Response) =>{
await deleteUserById(req.params.id)
res.status(200).json({mssg: "User Successfully Deleted"})
}

export const addCompanyHandler = async (req:Request , res:Response) => {
  const{companyId, userId} = req.body;
  const user = await addCompanyToUser(companyId, userId);
  res.status(200).json(user);
}