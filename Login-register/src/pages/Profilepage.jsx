import profile from '../assets/prp.png'
import Socicn from '../components/Socicn'
const Profilepage = () =>{
  return(
    <div className="bg-slate-400 h-screen flex flex-col justify-center items-center p-8">
       <div className="bg-slate-300 rounded-xl flex flex-col gap-4  items-center shadow-md pt-3">
        <div className='bg-blue-600 w-full p-6 ' id='imgcont'>
        <img src={profile} alt="" className="h-[150px] w-[150px] mx-auto border-2 border-silver rounded-full bg-black"/>
        </div>
         
         <div className='text-center flex flex-col gap-3 px-8 bg-slate-300'>
          <h1 className='text-2xl font-semibold '>Srinjoy Pati</h1>
          <p className='text-md text-gray-500'>Student</p>
          <p className='font-semibold text-md'>srinjoydev26@gmail.com</p>
          <p className='font-semibold text-md'>+91 8100447535</p>
         </div>
          
          <Socicn></Socicn>
         
       </div>
    </div>
  )
}

export default Profilepage