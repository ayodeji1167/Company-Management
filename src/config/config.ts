import dotenv from "dotenv";
dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT): 500;
const MONGO_USERNAME = process.env.MONGO_USERNAME || "";
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || "";
const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@firstnodeproject.g442jly.mongodb.net/typegoose?retryWrites=true&w=majority`


export const config = {
    server:{
        port: SERVER_PORT
    },

    mongo:{
        url: MONGO_URL
    }
}