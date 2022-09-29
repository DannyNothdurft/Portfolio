import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navigation from './Navigation';
import Home from './Home';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Impressum from '../pages/Impressum';
import DSGVO from '../pages/DSGVO';
import Footer from './Footer';
import './main.scss';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/impressum' element={<Impressum />} />
        <Route path='/dsgvo' element={<DSGVO />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
