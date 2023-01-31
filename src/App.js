import React from 'react';

import './App.css';
import Navbar from './components/navbar/navbar';
import Intro from './components/body/intro';
import Footer from './components/footer/footer';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
function App() {
  return (

    <BrowserRouter>
      <Routes>
          <Route path="*" element={[(<Navbar />),(<Intro/>),(<Footer/>)]} /> 
      </Routes>
    </BrowserRouter>

  );
}

export default App;
