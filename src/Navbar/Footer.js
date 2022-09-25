import logo from '../Asset/logor.png';
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
    
      <footer class="text-gray-400 bg-green-600 body-font">
  <div class="container px-5 pt-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div class="flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <div class="flex title-font font-medium items-center md:justify-start justify-center text-white">
        <img src={logo} alt="" class="w-16 h-16 p-2 rounded-full border-white border-2"/> 
        <p class="ml-3 text-xl font-work">Code Gorkha</p>
      </div>
      
      <p class="mt-2 mb-2 text-sm text-white font-amaranth">A full technology company that creates the future.</p>
      
    </div>
    
    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div class="lg:w-1/3 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3 font-lora">COMPANY</h2>
        <nav class="list-none mb-10">
          <li>
            <Link href="#" to="/Career" class="text-gray-300 hover:text-white font-amaranth" >Careers</Link>
          </li>
          <li>
            <Link href="#" to="/Contact" class="text-gray-300 hover:text-white font-amaranth" >Contact Us</Link>
          </li>
         
        </nav>
      </div>
    </div>
  </div>
  <div class="bg-green-700 bg-opacity-75">
    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p class="text-gray-300 text-sm text-center sm:text-left font-lora">© 2021 Code Gorkha —
        <a href="https://twitter.com/CodeGorkha" rel="noopener noreferrer" class="text-red-400 ml-1 font-lora" target="_blank">@CodeGorkha</a>
      </p>
    </div>
  </div>
</footer>
    );
  };
  
  export default Footer;