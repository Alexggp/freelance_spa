import React from "react";
import Lenis from "lenis";
import { Route, Routes} from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import RootLayout from "./pages/RootLayout";
import Main from "./pages/Main/Main";
import More from "./pages/More/More";
import About from "./pages/About/About";

import './App.css';

gsap.registerPlugin(ScrollTrigger);


function App() {
    const lenis = new Lenis();
    lenis.on('scroll', ()=>{});
  
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
  
    requestAnimationFrame(raf);
  
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Main />} />
        <Route path="more" element={<More />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route path='/*' element={<div>Not found</div>} />
    </Routes>

  )
}

export default App
