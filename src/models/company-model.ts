import {getModelForClass,modelOptions, prop} from "@typegoose/typegoose";

@modelOptions({ options: { customName: "Company" } })
export class CompanyClass{
    @prop({required: true , type: ()=> String})
    name:string

    @prop({ type: () => String, required: true })
    address:string

    @prop({ type: () => String, required: true })
    telephoneNumber:string

    @prop({ type: () => Number, required: true })
    noOfEmployees:number

    @prop({required: true , unique:true , type: () => String})
    email:string

    @prop({type:()=>Date , required: true})
    dateOfEstablishment:Date

}
const CompanyModel = getModelForClass(CompanyClass);

export default CompanyModel;