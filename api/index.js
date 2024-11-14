import express from 'express';
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
dotenv.config();



const app=express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_Db_Url)
.then(()=>{
    console.log("Database is connected")        //checking if the databse is succesfully connected
})
.catch((err)=>{console.log(err)})              //console.log the error if there is any.

app.use('/api/user',userRouter)
app.use('/api/auth',authRouter)


app.use((err,req,res,next)=>{
    const statuscode=err.statuscode || 500;
    const message=err.message || "Internal Server Error";
    return res.status(statuscode).json({
        success:false,
        statuscode,
        message
    })
})

app.listen(3000,()=>{
    console.log("server is up and running....")
})