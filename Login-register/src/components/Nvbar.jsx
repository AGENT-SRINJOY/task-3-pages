

import { CgProfile } from "react-icons/cg";

const Nvbar = () =>{
   let navitems = ['Home' , 'About' , 'Products']
  return(
  <>
    <header className="bg-[#000000] flex items-center justify-around  py-3">
      <h1 className="text-[#DC84F3] text-2xl font-semibold">Logo</h1>
      <ul className="flex gap-5" >
        {
          navitems.map((item,index)=>(
            <li key={index} className="text-blue-400 hover:border-b-2 border-[#DC84F3] cursor-pointer">{item}</li>
          ))
        }
      </ul>
      <div className="flex gap-2 cursor-pointer">
       <span className="text-blue-400 ">Profile</span>
      <CgProfile className="text-blue-500 text-xl rounded-full bg-blue-100 hover:scale-110"/>
      </div>
      
    </header>
 </>
  )
}

export default Nvbar