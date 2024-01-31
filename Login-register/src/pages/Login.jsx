/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa6";

const Login = ({inptype , togfun}) =>{

  let [isTrue , isTrueup] = useState(true)

  return(
    <div className=" h-screen flex justify-center items-center  px-4 md:px-0" id="main-div">
      <div className="bg-white flex flex-col text-center rounded-md py-5 px-10 gap-4">
        <span className="text-4xl text-[#DC84F3] font-bold font-mono">Logo</span>
        <span className="text-blue-700 text-[14px]">Login</span>
        <form className="flex flex-col gap-3">
         
          <input type="email" placeholder="enter email"
          className="block border-b-2 py-2 placeholder:text-sm px-2 w-[16.8rem] shadow-md"/>

          <div className="flex items-center justify-between border-b-2 shadow-md">
          <input  type={inptype} placeholder="enter password"
          className="block  py-2 placeholder:text-sm px-2 focus:outline-none" 
          onChange={(event) => {event.target.value == ''? isTrueup(true) : isTrueup(false)}}/>
          <FaEyeSlash className={`text-blue-400 text-xl mx-auto ${isTrue && 'hidden'}`} onClick={togfun} />
         </div>

          <button className="border border-blue-500 bg-blue-500 block py-1 rounded-md text-white" >Login</button>
        
        </form>
      
        <p className="text-blue-400 text-[12px] ">Don't have an account? <span className="font-semibold">Register</span></p>
      </div>
    </div>
  )
}

export default Login;
