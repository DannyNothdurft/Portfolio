import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navigation from './Navigation';
import Home from './Home';
import './main.scss';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
