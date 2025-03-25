import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import RootLayout from "./pages/RootLayout/RootLayout";
import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import ScrollController from "./components/ScrollController/ScrollController";
import CustomCursorfrom from "./components/CustomCursor/CustomCursor";
import ContactPage from "./pages/ContactPage/ContactPage"; 
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectPath = sessionStorage.redirect;
    if (redirectPath) {
      sessionStorage.removeItem("redirect");
      navigate(redirectPath, { replace: true });
    }
  }, [navigate]);

  return (
    <>
      <ScrollController />
      <CustomCursorfrom />
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Main />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<ContactPage />} /> 
        </Route>
        <Route path='/*' element={<div>Not found</div>} />
      </Routes>
    </>
  );
}

export default App;
