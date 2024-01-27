
import { FaEyeSlash } from "react-icons/fa6";
import chooseicn from '../assets/photo-size-select-actual.png'
import { useState } from "react";

const Register = ({inptype , togfun}) =>{
  let [isTrue , isTrueup] = useState(true)
  
  return(
    <div className= " h-screen flex justify-center items-center" id="main-div">
      <div className="bg-white flex flex-col text-center rounded-md py-5 px-10 gap-4">
        <span className="text-4xl text-[#DC84F3] font-bold font-mono">Logo</span>
        <span className="text-blue-700 text-[14px]">Register</span>

        <form className="flex flex-col gap-3">
          <input type="text" placeholder="enter name" className="block border-b-2 py-2 w-[16.8rem] placeholder:text-sm px-2 shadow-md"/>

          <input type="email" placeholder="enter email"
          className="block border-b-2 py-2 placeholder:text-sm px-2 shadow-md"/>

         <div className="flex items-center justify-between border-b-2 shadow-md">
          <input  type={inptype} placeholder="enter password"
          className="block  py-2 placeholder:text-sm px-2 focus:outline-none" 
          onChange={(event) => {event.target.value == ''? isTrueup(true) : isTrueup(false)}}/>
          <FaEyeSlash className= {`text-blue-400 text-xl mx-auto ${isTrue && 'hidden'}`} onClick={togfun}/>
         </div>

          <input type="file" name="" id="file" style={{display:"none"}} />

          <label htmlFor="file" className='flex gap-1 items-center'>
            <img src={chooseicn} alt="" />
            <span className='text-[12px]'>choose avatar</span>
          </label>

          <button className="border border-blue-500 bg-blue-500 block py-1 rounded-md text-white" >Sign up</button>
        </form>

        <p className="text-blue-400 text-[12px] ">Already have an account? <span className="font-semibold">Login</span></p>
      </div>
    </div>
  )
}

export default Register