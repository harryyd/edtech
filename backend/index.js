import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";

import connectionDb from "./config/dbConfig.js";

connectionDb() ;
dotenv.config();

const app = express();
const PORT = 8000;  


 




app.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`) ;
}) ; 