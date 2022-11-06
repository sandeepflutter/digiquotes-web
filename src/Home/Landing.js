import React from 'react';
import '../App.css';
import Screen from "../Home/Screen";
import {FaYoutube}from 'react-icons/fa';
import { ImFacebook2 } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import {FaInstagram}from 'react-icons/fa';
import {FaGooglePlay}from 'react-icons/fa';
import {BiLogIn} from "react-icons/bi"
import { Link } from 'react-router-dom';

export const Landing  = () => {      
    return (
      
<div id="home" class=" bg-gradient-to-r bg-white body-font">
  <div className='h-[80vh]'>
    <Screen/>
  </div>
  


<div className="flex align-center justify-between mt-1 px-5 py-3 bg-white">

<Link to="Login" className="text-[3.5vh] m-1 p-1 sm:m-2 sm:p-2 text-red-600 hover:bg-red-600 hover:text-white transition-colors duration-300"
    href="#" 
  >
    <BiLogIn/>
    <span class="sr-only">Youtube</span>
  </Link>


<a
    className="text-[3.5vh] m-1 p-1 sm:m-2 sm:p-2 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300"
    href={null} target="_blank" rel="noreferrer"
  >
    <FaGooglePlay/>
    <span class="sr-only">Youtube</span>
  </a>


  <a
    className="text-[3.5vh] m-1 p-1 sm:m-2 sm:p-2 text-red-600 hover:bg-red-600 hover:text-white transition-colors duration-300"
    href={null} target="_blank" rel="noreferrer"
  >
    <FaYoutube/>
    <span class="sr-only">Youtube</span>
  </a>
 
  <a
    className="text-[3.5vh] m-1 p-1 sm:m-2 sm:p-2 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300"
    href={null} target="_blank" rel="noreferrer"
  >
    <ImFacebook2/>
    <span class="sr-only">Facebook</span>
  </a>
  <a
    className="text-[3.5vh] m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300"
    href={null} target="_blank" rel="noreferrer"
  >
    <FaTwitter/>
    <span class="sr-only">Twitter</span>
  </a>

  <a
    className="text-[3.5vh] m-1 p-1 sm:m-2 sm:p-2 text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300"
    href={null} target="_blank" rel="noreferrer"
  >
    <FaInstagram/>
    <span class="sr-only">Twitter</span>
  </a>
  <a
    className="text-[3.5vh] m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-teal-500 hover:text-white transition-colors duration-300"
    href={"https://mail.google.com/mail/?view=cm&fs=1&to="+null } target="_blank" rel="noreferrer"
  >
    <FaRegEnvelope/>
    <span class="sr-only">Email</span>
  </a>
</div>


</div>
    )
  }

  
  export default Landing;