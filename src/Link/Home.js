import React, { useState } from "react";
import {Link} from 'react-scroll';

import {BsFillArrowUpCircleFill} from 'react-icons/bs';
import Footer from "../Navbar/Footer";
import Clients from "../Home/Clients";
import Authors from "../Home/Authors";
import About from "../Home/About";
import Landing from "../Home/Landing";


export const Home = () => {
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };

  window.addEventListener('scroll', toggleVisible);
    return (
      <div className="bg-blue-50">
         <Link href="#" to="home" spy={true} smooth={true} duration={500} offset={-100}>
      <button  id="myBtn" style={{display: visible ? 'inline' : 'none'}}
      class="fixed z-50 bottom-10 right-8 bg-transparent w-20 h-20 drop-shadow-lg flex justify-center items-center text-blue-500  fill-black text-6xl hover:drop-shadow-2xl hover:animate-bounce duration-900">
        <BsFillArrowUpCircleFill className="h-10"/></button>
        </Link>
      <Landing/>
      <About />
      <Authors/>
      <Clients/>
     
     
      <Footer className="items-center"/>
      </div>
    );
  };
  
  export default Home;