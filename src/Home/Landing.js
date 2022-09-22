import React from 'react';
import '../App.css';
import wave from '../Asset/wave.svg'
import {Link} from 'react-scroll';
import gp from '../Asset/gp.png';
import Screen from "../Home/Screen";

export const Landing  = () => {      
    return (
      
<div id="home" class=" bg-gradient-to-r from-green-800 to-green-700 body-font">
  <div className='h-[80vh]'>
    <Screen/>
  </div>
  
<section class="pt-5">
   <div class=" px-10 lg:flex items-center content-center md:flex lg:justify-between md:justify-between sm:justify-center justify-center">


      <div class="flex ">
      <div class="lg:flex-grow lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font font-oleo sm:text-4xl text-3xl mb-4 font-medium text-white">The journey of a thousand  
        <br class="hidden lg:inline-block"/>miles begins with a single step.
      </h1>
      <p class="mb-5 leading-relaxed text-blue-300 text-justify font-rancho text-2xl">We create Simple Websites, Mobile Apps & Desktop Applications. So, come along with us as we assist you to grow.</p>
      <div class="justify-center lg:pt-10">
      
      <a href='https://play.google.com/store/apps/developer?id=CodeGurkha&hl=en&gl=US' target="_blank" rel="noreferrer" class="pb-5 flex title-font font-medium items-center md:justify-start justify-center text-white">
      <img src={gp} alt='' class=" w-40 h-12"/>
      </a>
      <Link to="about" spy={true} smooth={true} offset={-100} duration={600} href="#">
      <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg ">Get Started</button>
      </Link>
   </div>
    </div>
      </div>
</div>
<img src={wave} class="col-start-1 row-start-1 self-center" z-1 alt="Tailwind Play" />
</section>


</div>
    )
  }

  
  export default Landing;