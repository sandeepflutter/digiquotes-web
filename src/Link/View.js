
import { useState } from 'react'
import { Tab } from '@headlessui/react'
import Footer from "../Navbar/Footer";
import {useLocation} from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export const View = () => {

  let [categories] = useState({
    Wishes: [
      {
        id: 1,
        title: 'Ashraya Engineering',
        date: 'The company expertise lies in the fields of commercial and residential architectural design supervision and measurement, and cost estimation for residential and commercial buildings. We also have a highly specialized team in land surveying.',
      },
    ],
  })

  const location = useLocation()
  const { from } = location.state
  const {Id} = location.state
 


return (
      <div className="">
      <div class="body-font pb-5">
      <div id="about" class=" bg-gradient-to-r from-green-600 to-green-600 body-font">
      <section  class="pl-5 pr-5">
      <div class="px-3 lg:px-20 sm:px-10 md:px-5 lg:flex md:flex">

      <div className='lg:w-[200vh] md:w-[200vh]'>
      <div class="flex flex-wrap -mx-4">
            <div class="text-center mx-auto">
               <h2 class=" py-10 text-white font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4 font-hahmlet">
               {from}
               </h2>
            </div>
      </div>
</div>
</div>
</section>
</div>
</div>
      <div className="w-full justify-center flex items-center">
<div className="w-full max-w-6xl px-2 py-2 sm:px-0 ">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-300 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'font-lora w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'font-lora ring-blue-600 ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'font-lora bg-white shadow'
                    : 'font-lora text-white hover:bg-blue-500 hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >

             <div class=""> 
                {posts.map((post) => (
                 <div key={post.id}>
                 <div class="flex justify-center card m-2 cursor-pointer border hover:border-blue-500 rounded-lg hover:shadow-lg transform hover:-translate-y-3 transition-all duration-200">
                 <div class=" shadow-lg bg-white">
                 <div class="pb-8 pt-5 px-4">
                 <h5 class="text-gray-900 text-xl font-medium pb-2 font-hahmlet">{post.title}</h5>
                 <p class="text-gray-700 text-base mb-2 text-justify font-alegreya">
                 {post.date}
                 </p>
              </div>
                 </div>
                 </div>
                    </div>
                ))}
                </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
    </div>
      <Footer/>
      </div>
    );
  };
  
  export default View;