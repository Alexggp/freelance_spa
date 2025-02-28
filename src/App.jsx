import React from "react";
import { Route, Routes} from 'react-router-dom';
import RootLayout from "./pages/RootLayout";

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<div>Main</div>} />
        <Route path="more" element={<div>more</div>} />
        <Route path="about" element={<div>about</div>} />
      </Route>
      <Route path='/*' element={<div>Not found</div>} />
    </Routes>

  )
}

export default App
