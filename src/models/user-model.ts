import {
  getModelForClass,
  prop,
  Ref,
  Severity,
  pre,
  post,
  modelOptions,
  DocumentType,
} from "@typegoose/typegoose";
import mongoose from "mongoose";
import { CompanyClass } from "./company-model";
import bcrypt from "bcrypt";

class Adress {
  @prop({ type: () => String, required: true })
  street: string;

  @prop({ type: () => String, required: true })
  state: string;

  @prop({ type: () => String, required: true })
  country: string;

  getAdressString(): string {
    return `${this.street}, ${this.state} state, ${this.country}. `;
  }
}

@pre<UserClass>("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
  return next();
})
@post<UserClass>("save", function (this: UserClass) {
  console.log("This will run after saving " + this.email);
})
@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
  options: {
    customName: "User",
    allowMixed: Severity.ALLOW,
  },
})
export class UserClass {
  @prop({ type: () => String, required: true })
  username: string;

  @prop({ type: () => String, required: true, unique: true })
  email: string;

  @prop({ type: () => String, required: true })
  password: string;

  @prop({ type: () => Adress, required: true })
  adress: Adress;

  @prop({ default: null, ref: () => CompanyClass })
  company: Ref<CompanyClass> | null;

  public async comparePassword(
    this: DocumentType<UserClass>,
    candidatePassword: string
  ) {
    return bcrypt.compare(candidatePassword, this.password);
  }
}

const UserModel = getModelForClass(UserClass);
export default UserModel;
