import React from "react";
import Nav from "./Navbar/Nav";
import { Routes, Route} from 'react-router-dom';
import View from "./Link/View";
import Contact from "./Link/Contact";
import Home from "./Link/Home";
import Career from "./Link/Career";
import data from "./Link/data";
import ScrollToTop from "./ScrollToTop";
import Login from "./Link/Login";



function App() {
  return (
  <ScrollToTop>
  <div>
        <Nav/>
<Routes>
<Route path="/" element={<Home/>} />
        <Route path="/View" element={<View/>}/>
        <Route path="/Contact" element={<Contact social={data.social}/>}/>
        <Route path="/Career" element={<Career/>}/>
        <Route path="/Login" element={<Login/>}/>
</Routes>
</div>
</ScrollToTop>
  );
}


export default App;