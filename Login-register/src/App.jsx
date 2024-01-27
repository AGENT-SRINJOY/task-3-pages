import Register from "./pages/Register"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Profilepage from "./pages/Profilepage";
import { useState } from "react";
import './App.css'

export default function App() {

  let [inptype , updttype] = useState('password')
  
  const toggletype = () =>{
    inptype == 'password'? updttype('text'):updttype('password');
  }

  return (
    <>
     <Register inptype = {inptype} togfun = {toggletype}></Register>
    <Login inptype = {inptype} togfun = {toggletype}></Login> 
    <Home></Home>
    <Profilepage></Profilepage>
    </>
  )
}

 