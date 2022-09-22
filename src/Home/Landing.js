import React from 'react';
import '../App.css';
import Screen from "../Home/Screen";
import {FaYoutube}from 'react-icons/fa';
import { ImFacebook2 } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import {FaInstagram}from 'react-icons/fa';

export const Landing  = () => {      
    return (
      
<div id="home" class=" bg-gradient-to-r from-green-800 to-green-700 body-font">
  <div className='h-[80vh]'>
    <Screen/>
  </div>
  
<section class="py-5 px-5 flex align-center justify-evenly">
<div class="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-4">
  <div>01</div>
  <div>01</div>
  <div>01</div>
  <div>01</div>
</div>
</section>

<div className="flex align-center justify-center mt-1">
  
 

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
    <FaRegEnvelope class="animate-pulse"/>
    <span class="sr-only">Email</span>
  </a>
</div>


</div>
    )
  }

  
  export default Landing;