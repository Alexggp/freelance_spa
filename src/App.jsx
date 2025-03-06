import React from "react";
import { Route, Routes} from 'react-router-dom';
import RootLayout from "./pages/RootLayout";
import Main from "./pages/Main/Main";
import More from "./pages/More/More";

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Main />} />
        <Route path="more" element={<More />} />
        <Route path="about" element={<div>about</div>} />
      </Route>
      <Route path='/*' element={<div>Not found</div>} />
    </Routes>

  )
}

export default App
