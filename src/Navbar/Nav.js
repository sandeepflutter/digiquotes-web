
import React, {useState} from "react";
import {Link } from 'react-router-dom';
import logo from '../Asset/logor.png';
import '../App.css';



function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" sticky z-50 top-0 bg-gradient-to-r from-green-600 to-green-600 " >
      <div className=" px-4 sm:px-6 lg:px-8">
      <div className="relative flex items-center justify-center h-12">
      <div className="flex flex-1 lg:flex-none sm:flex-1 md:flex-none items-center justify-center">
                <Link exact to="/" onClick={()=>setIsOpen(false)}  >
                <img src={logo} alt="1" class="w-8 h-8 items-center justify-center content-center border  rounded-full border-white"/>
                </Link>
              </div>
     </div>
     </div>
    
  </div>       
);     
}   

export default Nav;
