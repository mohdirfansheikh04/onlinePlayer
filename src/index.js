// require ('dotenv').config({path: './.env'});/
import dotenv from 'dotenv';

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from './db/index.js';

dotenv.config({
    path: './.env'
})


connectDB();







/*import express from "express";
const app = express();

// function connectDB(){}

// iffi
;( async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}` );
        app.on("error", (error) =>{
            console.log("Error", error);
            throw error;
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening at port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("Error in DB connection", error);
        throw error;
    }
})()*/