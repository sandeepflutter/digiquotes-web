import React from 'react';
import '../../App.css';
import Lottie from "lottie-react";
import web from '../../Asset/web.json';
import {AiFillHtml5} from 'react-icons/ai'
import {IoLogoCss3} from 'react-icons/io'

export const Web  = () => {  
    return (
<div class="body-font pb-5">
<div id="about" class=" bg-gradient-to-r from-blue-800 to-blue-700 body-font">
<section  class="pb-5 lg:pb-[9px] pl-5 pr-5">
   <div class="px-3 lg:px-20 sm:px-10 md:px-5 lg:flex md:flex">

<div className='lg:w-[200vh] md:w-[200vh]'>
      <div class="flex flex-wrap -mx-4">
         <div class="w-full px-4">
            <div class="text-center mx-auto mb-5 lg:mb-5">
               <h2 class=" py-10 text-white font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4 font-hahmlet">
               Website
               </h2>
            </div>
         </div>
      </div>
      

<div className='pb-5 '>
            <div>
        <div class="flex flex-wrap -mx-4">
                 
              </div>
             <h1 class="font-hahmlet text-[14px] text-center text-white">Tech We Work With</h1>
          <h1 class="font-hahmlet text-[12px] text-center text-white">FRONT END</h1>
         <div className='lg:flex text-center relative items-center justify-center md:flex'>
               
         <div class=" flex flex-wrap -m-4 ">
        
        <div class="p-4 w-1/3 lg:w-1/6">
        <div class=" py-6 rounded-lg transform transition duration-500 hover:scale-110">
            <AiFillHtml5 class="text-orange-500 w-5 h-5 mb-1 inline-block "/>
            <p class="leading-relaxed font-titillium text-[14px] text-white">HTML</p>
          </div>
        </div>
        
        <div class="p-4 w-1/3 lg:w-1/6">
          <div class="px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
          <IoLogoCss3 class="text-blue-500 w-5 h-5 mb-1 inline-block"/>
            <p class="leading-relaxed font-titillium text-[14px] text-white" >CSS</p>
          </div>
        </div>
        </div>
        </div>
        </div>
</div>

</div>

<div className='flex items-center justify-center lg:w-1/2 ' >
<Lottie animationData={web} loop={true}/>
</div>
</div>
</section>
</div>
</div>
    )
  }

  
  export default Web;