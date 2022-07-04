import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";

import cookieParser from "cookie-parser";
import bodyparser from "body-parser"
import loginRoute from "./routes/login.js";
import homeRoute from "./routes/Home.js";
import storeRoute from "./routes/Store.js";
import productRoute from "./routes/products.js";


const app = express();

dotenv.config();
const connect = async () => {
    try {
        await mongoose.connect(process.env.mongo);
        console.log("connected to mongodb!")
      } catch (error) {
        throw error;
      }
    };

    app.set("view engine","ejs");
    app.use(express.static("public"))
    app.use(bodyparser.urlencoded({extended:false}))
    
    app.use(bodyparser.json())
    
    app.use(express.json());

   
    app.use("/admin",productRoute);

app.listen(8800,()=>{
   connect();
    console.log("Connected to backend! ");
})
