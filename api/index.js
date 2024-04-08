import express from 'express';
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();

const app=express();

mongoose.connect(process.env.MONGO_Db_Url)
.then(()=>{
    console.log("Database is connected")        //checking if the databse is succesfully connected
})
.catch((err)=>{console.log(err)})              //console.log the error if there is any.

app.listen(3000,()=>{
    console.log("server is up and running....")
})