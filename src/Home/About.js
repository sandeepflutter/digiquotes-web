import React, {useEffect} from 'react';
import '../App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'

export const About  =  () => {     
useEffect(
  ()=>{
AOS.init({duration:1500})
  },[]
);

const quotes = [
   {
       ico: FaCode,
       txt: "High-quality Code",
       url: ""
     },

     {
       ico: FcSmartphoneTablet,
       txt: "Easy-to-use software",
       url: ""
     },

     {
       ico: GiFlexibleStar,
       txt: "Flexibility",
       url: ""
     },

     {
       ico: FcShipped,
       txt: "Deliver on schedule",
       url: ""
     },
 ];


    return (
      
<div id="about" class=" bg-blue-900 body-font">
<section  class="px-5 lg:px-[9px] pl-5 pr-5">
   <div class="px-3 lg:px-20 sm:px-10 md:px-5 lg:flex md:flex">  
<div data-aos="fade-right"
     data-aos-easing="ease-in-sine" className='lg:w-[200vh] md:w-[200vh]'>
      <div class="flex flex-wrap -mx-4">
         <div class="w-full px-4">
            <div class="text-center mx-auto mb-5 lg:mb-5">
               <h2 class=" text-white font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4 font-crimson">
               Quotes at DigiQuotes
               </h2>
            </div>
         </div>
      </div>
      
<div className=''>
<div className='px-5 '>
<div class="grid grid-cols-4 gap-4">
  <div>01</div>
  <div>09</div>
  <div>01</div>
  <div>09</div>
  <div>01</div>
  <div>09</div>
  <div>01</div>
  <div>09</div>
  <div>01</div>
  <div>09</div>
  <div>01</div>
  <div>09</div>
</div>
</div>
</div>


<div className=''>
   <>
        {quotes.map((item, index) => (
          <div key={index}>


<div className='flex pb-5 justify-end '>
<div class="grid grid-cols-4 gap-4">
  <div>01</div>
</div>


<p className='align-middle px-5 flex items-center justify-center text-right font-oleo text-[3vh]'>{item.txt}</p>
</div>
          </div>
        ))}
   
    </>


</div>



</div>
</div>
</section>
</div>
    )
  }

  
  export default About;