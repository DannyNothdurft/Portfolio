import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Navigation from './Navigation';
import Home from './Home';
import './main.scss';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Home />
    </BrowserRouter>
  );
}

export default App;
