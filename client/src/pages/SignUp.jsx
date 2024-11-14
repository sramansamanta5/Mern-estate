import React, { useState } from 'react'
import Google from '../assets/Google.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

  const[username,setUsername]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')

  const formdata={
    username,email,password
  }

  const navigate=useNavigate()

  const handleSubmit=async(e)=>{
    e.preventDefault();
   const res=await fetch('http://localhost:3000/api/auth/signup',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(formdata)
   })

   const data=await res.json()
   console.log(data)
  }

  return (
    <div className='flex flex-row justify-center'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-bold'>Sign Up</h1>
        <form className='flex flex-col justify-center items-center' onSubmit={handleSubmit}>
          <label>Username</label>
          <input placeholder='Enter Username..' className='rounded-lg p-2 w-96 h-16 border-2 border-violet-500 border-solid'value={username} onChange={(e)=>setUsername(e.target.value)}/>
          <label>Email</label>
          <input placeholder='Enter Email..' className='rounded-lg p-2 w-96 h-16 border-2 border-violet-500 border-solid'value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <label>Password</label>
          <input placeholder='Enter Password' className='rounded-lg p-2 w-96 h-16 border-2 border-violet-500 border-solid' value={password}onChange={(e)=>setPassword(e.target.value)}/>
          <button className='bg-red-500 text-white font-semibold text-xl p-3 w-96 my-4 rounded-lg'>Submit</button>
          <button className='bg-white text-blue-600 font-semibold text-xl p-3 w-96 my-4 rounded-lg flex flex-row justify-center items-center' type='submit'><img src={Google} className='h-16 w-16'/>Sign up with Google</button>
        </form>
        <Link to='/sign-in'><h1>Have an account? Log In</h1></Link>
      </div>
    </div>
  )
}

export default SignUp