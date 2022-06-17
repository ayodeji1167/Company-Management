import express ,{ Express } from "express";
import "express-async-errors";
import mongoose from "mongoose";
import { config } from "./config/config";
import { errorHandler } from "./middlewares/error-handler";
import userRouter from "./routers/user-route";
import { notFound } from "./middlewares/not-found";
import { companyRouter } from "./routers/companny-routes";



const app = express();
app.use(express.json());


app.use("/user" , userRouter);
app.use("/company", companyRouter)




app.use(notFound);
app.use(errorHandler);

const start = async ()=>{
    await mongoose.connect (config.mongo.url);
    
app.listen(config.server.port, ()=> console.log(`Server Started In PORT ${config.server.port}`)
 )
}

start()