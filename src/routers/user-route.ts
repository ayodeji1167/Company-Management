import express from "express";
import {ValidateSchems} from "../middlewares/validate";
import { CreateUserSchema } from "../schemas/user-schema";
const userRouter = express.Router();
import { createUserHandler ,findUserByIdHandler,addCompanyHandler, findUserByStreetHandler , deleteUserHandler} from "../controller/user-controller";

userRouter.route("/save").post(ValidateSchems(CreateUserSchema) ,createUserHandler);
userRouter.route("/query").get(findUserByStreetHandler);
userRouter.route("/:id").get(findUserByIdHandler);
userRouter.route("/:id").delete(deleteUserHandler);
userRouter.route("/add/company").post(addCompanyHandler);





export default userRouter;