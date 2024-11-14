import User from "../models/user.model.js"
import bcryptjs from 'bcryptjs'
import { errorhandler } from "../utils/error.js"

export const signup=async(req,res,next)=>{
    const {username,email,password}=req.body

    const hashedPassword=bcryptjs.hashSync(password,10)

    const newUser=new User({username,email,password:hashedPassword})
   try {
    await newUser.save();
    res.status(201).json({msg:'New user created Successfully'})
   }
    catch (error) {
      next(error)
   // next(errorhandler(550,'error from the function'))         --->required in some cases.
   }
    
}


/*
before using middleware and next 

export const signup=async(req,res)=>{
    const {username,email,password}=req.body

    const hashedPassword=bcryptjs.hashSync(password,10)

    const newUser=new User({username,email,password:hashedPassword})
   try {
    await newUser.save();
    res.status(201).send('New user created Successfully')
   }
    catch (error) {
    console.log(error)
    res.status(500).send(error)
   }
    
}
    


*/