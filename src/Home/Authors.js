import React, {useEffect} from 'react';
import '../App.css';
import {FaQuoteRight} from 'react-icons/fa';
import {FcSmartphoneTablet} from 'react-icons/fc';
import {FcShipped} from 'react-icons/fc';
import {FcMoneyTransfer} from 'react-icons/fc';
import {FaQuoteLeft} from 'react-icons/fa';
import {GiFlexibleStar} from 'react-icons/gi';
import AOS from 'aos';
import 'aos/dist/aos.css'

export const Authors  = () => {

  useEffect(
    ()=>{
  AOS.init({duration:1500})
    },[]
  );

   document.querySelectorAll( '.ciclegraph' ).forEach( ( ciclegraph )=>{
      let circles = ciclegraph.querySelectorAll( '.circle' )
      let angle = 360-90, dangle = 360 / circles.length
      for( let i = 0; i < circles.length; ++i ){
        let circle = circles[i]
        angle += dangle
        circle.style.transform = `rotate(${angle}deg) translate(${ciclegraph.clientWidth / 2}px) rotate(-${angle}deg)`
      }
    })

      const feature1 = [

          {
            ico: FcSmartphoneTablet,
            txt: "Easy-to-use software",
            txt1:"h"
          },

          {
            ico: GiFlexibleStar,
            txt: "Flexibility",
            txt1:"h"
          },

          {
            ico: FcShipped,
            txt: "Deliver on schedule",
            txt1:"h"
          },
          {
            ico: FaQuoteRight,
            txt: "High-quality Code",
            txt1:"h"
          },

          {
            ico: FcSmartphoneTablet,
            txt: "Easy-to-use software",
            txt1:"h"
          },

          {
            ico: GiFlexibleStar,
            txt: "Flexibility",
            txt1:"h"
          },

          {
            ico: FcShipped,
            txt: "Deliver on schedule",
            txt1:"h"
          },
          {
            ico: FaQuoteRight,
            txt: "High-quality Code",
            txt1:"h"
          },

          {
            ico: FcSmartphoneTablet,
            txt: "Easy-to-use software",
            txt1:"h"
          },

          {
            ico: GiFlexibleStar,
            txt: "Flexibility",
            txt1:"h"
          },
      ];




      const feature = [
        {
            ico: FcMoneyTransfer,
            txt: "The good man is the friend of all living things.",
            txt1:"- Mahatma Gandhi"
          },

          {
            ico: FcMoneyTransfer,
            txt: "Cost-effective rate",
            txt1:"h"
          },

          {
            ico: FaQuoteRight,
            txt: "High-quality Code",
            txt1:"h"
          },

          {
            ico: FcSmartphoneTablet,
            txt: "Easy-to-use software",
            txt1:"h"
          },

          {
            ico: GiFlexibleStar,
            txt: "Flexibility",
            txt1:"h"
          },

          {
            ico: FcShipped,
            txt: "Deliver on schedule",
            txt1:"h"
          },
          {
            ico: FaQuoteRight,
            txt: "High-quality Code",
            txt1:"h"
          },

          {
            ico: FcSmartphoneTablet,
            txt: "Easy-to-use software",
            txt1:"h"
          },

          {
            ico: GiFlexibleStar,
            txt: "Flexibility",
            txt1:"h"
          },

          {
            ico: FcShipped,
            txt: "I often quote myself. It adds spice to my conversation.",
            txt1:"- George Bernard Shaw"
          },
      ];
   

      
    return (
      
      <div class=" bg-white body-font">
  <div class="">
    
<section id="service" class="pt-5 lg:pt-[20px] pb-5 lg:pb-[9px] pl-5 pr-5">
   <div class="px-3 lg:px-20 sm:px-10 md:px-5">
      <div class="flex flex-wrap -mx-4">
         <div class="w-full px-4">
            <div class="text-center mx-auto mb-5 lg:mb-5">
               <h2 class=" font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4 font-hahmlet">
               Quotes of Famous Authors
               </h2>
            </div>
         </div>
      </div>
      
<div className='lg:flex md:flex sm:flex justify-between'>
   <div className=''>
   <>
        {feature1.map((item, index) => (
          <div key={index}>

<div data-aos="fade-right"
     data-aos-easing="ease-in-sine" className='pb-5 justify-end '>
      <div className='flex'>
      <FaQuoteLeft className='w-5 h-5 fill-green-800'/>
      <p className='align-middle px-5 flex items-center justify-center text-right font-oleo text-[2.5vh]'>{item.txt}</p>
    <FaQuoteRight className='w-5 h-5 fill-green-800'/>
      </div>

<div>
<p className='align-middle  flex items-center text-right font-oleo text-[2.5vh]'>{item.txt1}</p>

</div>

</div>
          </div>
        ))}
   
    </>
</div>


<div className=''>
<>
        {feature.map((item, index) => (
          <div key={index}>
<div data-aos="fade-left"
     data-aos-easing="ease-in-sine" className=' pb-5'>
<div className='flex'>
<FaQuoteLeft className='w-5 h-5 fill-green-800'/>
      <p className='align-middle px-5 flex items-center justify-center text-right font-oleo text-[2.5vh]'>{item.txt}</p>
      <FaQuoteRight className='w-5 h-5 fill-green-800'/>
      </div>

<div>
<p className='align-middle flex items-center text-right font-oleo text-[2.5vh]'>{item.txt1}</p>

</div>
</div>
          </div>
        ))}
   
    </>
</div>
</div>
</div>
</section>
    </div>
</div>
    )
  }

  
  export default Authors;