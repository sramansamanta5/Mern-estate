import React from 'react'
import Villaimage from '../assets/Villaimage.jpg'
import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from 'react-icons/fa';

const Home = () => {
  return (
 <div className=''>
  <div className='flex flex-row justify-center items-center'>
    <button className='h-16 w-16 rounded-full p-2 bg-transparent flex justify-center items-center relative left-20 border-4 border-solid border-white hover:bg-slate-400'><FaLessThan fill='white' size={35}/></button>
    <img src={Villaimage} className='w-1/2 h-full object-cover rounded-lg'/>
    <button className='h-16 w-16 rounded-full p-2 bg-transparent flex justify-center items-center relative right-20 border-4 border-solid border-white hover:bg-slate-400'><FaGreaterThan fill='white' size={35}/></button>
      </div>
 <div className='m-3 flex flex-row gap-1'>
          
      </div>
    </div>
  )
}

export default Home