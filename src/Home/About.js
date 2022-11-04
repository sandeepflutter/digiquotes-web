import React from 'react';
import '../App.css';
import 'aos/dist/aos.css'
import {FaBirthdayCake} from 'react-icons/fa';
import {FaGlassCheers} from 'react-icons/fa';
import {FaUsers} from 'react-icons/fa';
import {FaWolfPackBattalion} from 'react-icons/fa';
import {FaGratipay} from 'react-icons/fa';
import {FaDove} from 'react-icons/fa';
import {FaRegSnowflake} from 'react-icons/fa';
import {FaMugHot} from 'react-icons/fa';
import {FaFireAlt} from 'react-icons/fa';

import {FaBook} from 'react-icons/fa';
import {FaCrown} from 'react-icons/fa';
import {FaLeaf} from 'react-icons/fa';
import {FaAtom} from 'react-icons/fa';
import {FaBriefcase} from 'react-icons/fa';
import {FaFistRaised} from 'react-icons/fa';

import {FaPeopleCarry} from 'react-icons/fa';
import {FaMusic} from 'react-icons/fa';
import {FaDog} from 'react-icons/fa';
import { Link } from 'react-router-dom';



export const About  =  () => {     
    return (
      
<div id="about" class=" bg-green-400">
<section  class="px-5 lg:px-[9px] py-10">
   
  <div class="text-center">
    <h2 class=" text-white font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-8 font-crimson">
      Quotes at DigiQuotes
    </h2>
  </div>
      

<div className='px-5 '>
<div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-4">

<Link href="#" to="/View" state= {{from: 'BIRTHDAY', Id:'0',}} class=" hover:text-gray-600" >
<div className="p-8 border-2 border-solid rounded-lg border-gray-500 bg-white">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-16 sm:h-16">
            <FaBirthdayCake className='w-full h-full  text-green-600'/>
            </div>
            <h6 className="mb-2 font-semibold leading -5 font-crimson">BIRTHDAY</h6>
          </div>
  </div></Link>
  
  <Link href="#" to="/View" state= {{from: 'NEW YEAR', Id:'1'}} class=" hover:text-gray-600" >
  <div className="p-8 border-2 border-solid rounded-lg border-gray-500 bg-white">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-16 sm:h-16">
            <FaGlassCheers className='w-full h-full  text-green-600'/>
            </div>
            <h6 className="mb-2 font-semibold leading-5 font-crimson">NEW YEAR</h6>
          </div>
  </div></Link>

  <Link href="#" to="/View" state= {{from: 'INSPIRATIONAL', Id:'2'}} class=" hover:text-gray-600" >
  <div className="p-8 border-2 border-solid rounded-lg border-gray-500 bg-white">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-16 sm:h-16">
            <FaUsers className='w-full h-full  text-green-600'/>
            </div>
            <h6 className="mb-2 font-semibold leading-5 font-crimson">INSPIRATIONAL</h6>
          </div>
  </div></Link>

  <Link href="#" to="/View" state= {{from: 'ATTITUDE', Id:'3'}} class=" hover:text-gray-600" >
  <div className="p-8 border-2 border-solid rounded-lg border-gray-500 bg-white">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-16 sm:h-16">
            <FaWolfPackBattalion className='w-full h-full  text-green-600'/>
            </div>
            <h6 className="mb-2 font-semibold leading-5 font-crimson">ATTITUDE</h6>
          </div>
  </div></Link>

  <Link href="#" to="/View" state= {{from: 'LOVE', Id:'4'}} class=" hover:text-gray-600" >
  <div className="p-8 border-2 border-solid rounded-lg border-gray-500 bg-white">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-16 sm:h-16">
            <FaGratipay className='w-full h-full  text-green-600'/>
            </div>
            <h6 className="mb-2 font-semibold leading-5 font-crimson">LOVE</h6>
          </div>
  </div></Link>

  <Link href="#" to="/View" state= {{from: 'RELIGION', Id:'5'}} class=" hover:text-gray-600" >
  <div className="p-8 border-2 border-solid rounded-lg border-gray-500 bg-white">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-16 sm:h-16">
            <FaDove className='w-full h-full  text-green-600'/>
            </div>
            <h6 className="mb-2 font-semibold leading-5 font-crimson">RELIGION</h6>
          </div>
  </div></Link>

  <Link href="#" to="/View" state= {{from: 'CREATIVITY', Id:'6'}} class=" hover:text-gray-600" >
  <div className="p-8 border-2 border-solid rounded-lg border-gray-500 bg-white">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-16 sm:h-16">
            <FaRegSnowflake className='w-full h-full  text-green-600'/>
            </div>
            <h6 className="mb-2 font-semibold leading-5 font-crimson">CREATIVITY</h6>
          </div>
  </div></Link>

  <Link href="#" to="/View" state= {{from: 'LIFE', Id:'7'}} class=" hover:text-gray-600" >
  <div className="p-8 border-2 border-solid rounded-lg border-gray-500 bg-white">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-16 sm:h-16">
            <FaMugHot className='w-full h-full  text-green-600'/>
            </div>
            <h6 className="mb-2 font-semibold leading-5 font-crimson">LIFE</h6>
          </div>
  </div></Link>

  <Link href="#" to="/View" state= {{from: 'PASSION', Id:'8'}} class=" hover:text-gray-600" >
  <div className="p-8 border-2 border-solid rounded-lg border-gray-500 bg-white">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-16 sm:h-16">
            <FaFireAlt className='w-full h-full  text-green-600'/>
            </div>
            <h6 className="mb-2 font-semibold leading-5 font-crimson">PASSION</h6>
          </div>
  </div></Link>

  <Link href="#" to="/View" state= {{from: 'PROVERBS', Id:'9'}} class=" hover:text-gray-600" >
  <div className="p-8 border-2 border-solid rounded-lg border-gray-500 bg-white">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-16 sm:h-16">
            <FaBook className='w-full h-full  text-green-600'/>
            </div>
            <h6 className="mb-2 font-semibold leading-5 font-crimson">PROVERBS</h6>
          </div>
  </div></Link>

  <Link href="#" to="/View" state= {{from: 'NATURE', Id:'10'}} class=" hover:text-gray-600" >
  <div className="p-8 border-2 border-solid rounded-lg border-gray-500 bg-white">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-16 sm:h-16">
            <FaLeaf className='w-full h-full  text-green-600'/>
            </div>
            <h6 className="mb-2 font-semibold leading-5 font-crimson">NATURE</h6>
          </div>
  </div></Link>

  <Link href="#" to="/View" state= {{from: 'PET', Id:'11'}} class=" hover:text-gray-600" >
  <div className="p-8 border-2 border-solid rounded-lg border-gray-500 bg-white">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-16 sm:h-16">
            <FaDog className='w-full h-full  text-green-600'/>
            </div>
            <h6 className="mb-2 font-semibold leading-5 font-crimson">PET</h6>
          </div>
  </div></Link>

  <Link href="#" to="/View" state= {{from: 'MUSIC', Id:'12'}} class=" hover:text-gray-600" >
  <div className="p-8 border-2 border-solid rounded-lg border-gray-500 bg-white">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-16 sm:h-16">
            <FaMusic className='w-full h-full  text-green-600'/>
            </div>
            <h6 className="mb-2 font-semibold leading-5 font-crimson">MUSIC</h6>
          </div>
  </div></Link>

  <Link href="#" to="/View" state= {{from: 'MOVIE', Id:'13'}} class=" hover:text-gray-600" >
  <div className="p-8 border-2 border-solid rounded-lg border-gray-500 bg-white">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-16 sm:h-16">
            <FaFistRaised className='w-full h-full  text-green-600'/>
            </div>
            <h6 className="mb-2 font-semibold leading-5 font-crimson">MOVIE</h6>
          </div>
  </div></Link>

  <Link href="#" to="/View" state= {{from: 'FRIENDSHIP', Id:'14'}} class=" hover:text-gray-600" >
  <div className="p-8 border-2 border-solid rounded-lg border-gray-500 bg-white">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-16 sm:h-16">
            <FaPeopleCarry className='w-full h-full  text-green-600'/>
            </div>
            <h6 className="mb-2 font-semibold leading-5 font-crimson">FRIENDSHIP</h6>
          </div>
  </div></Link>

  <Link href="#" to="/View" state= {{from: 'ENTREPRENEURSHIP', Id:'15'}} class=" hover:text-gray-600" >
  <div className="p-8 border-2 border-solid rounded-lg border-gray-500 bg-white">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-16 sm:h-16">
            <FaBriefcase className='w-full h-full  text-green-600'/>
            </div>
            <h6 className="mb-2 font-semibold leading-5 font-crimson">ENTREPRENEURSHIP</h6>
          </div>
  </div></Link>

  <Link href="#" to="/View" state= {{from: 'SCIENCE', Id:'16'}} class=" hover:text-gray-600" >
  <div className="p-8 border-2 border-solid rounded-lg border-gray-500 bg-white">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-16 sm:h-16">
            <FaAtom className='w-full h-full  text-green-600'/>
            </div>
            <h6 className="mb-2 font-semibold leading-5 font-crimson">SCIENCE</h6>
          </div>
  </div></Link>

  <Link href="#" to="/View" state= {{from: 'FAMOUS PEOPLE', Id:'17'}} class=" hover:text-gray-600" >
  <div className="p-8 border-2 border-solid rounded-lg border-gray-500 bg-white">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-16 sm:h-16">
            <FaCrown className='w-full h-full  text-green-600'/>
            </div>
            <h6 className="mb-2 font-semibold leading-5 font-crimson">FAMOUS PEOPLE</h6>
          </div>
  </div></Link>
</div>
</div>
</section>
</div>
    )
  }

  
  export default About;