import { SiGithub } from "react-icons/si";
import { GrLinkedin } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
const Socicn = () =>{
 return(
  <div className='flex gap-4 pb-8 bg-slate-300 '>
            <SiGithub className='text-2xl text-black'></SiGithub>
            <GrLinkedin className='text-2xl text-blue-700'></GrLinkedin>
            <BsTwitterX className='text-2xl text-black'></BsTwitterX>
            <RiInstagramFill className='text-2xl text-pink-500'></RiInstagramFill>
         </div>
 )
}

export default Socicn