 import React from 'react'
import StarsCanvas from './components/canvas/Stars'
import Header from './components/Header'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './pages/Navbar'
import Page1 from './pages/page1'
import Page2 from './pages/Page2'

import Tech from './pages/Tech'
import Works from './pages/Works'





import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter basename="/">

      <div id='main'>
        <div className='relative z-0 '>
          <Page1 />
          <Page2 />
          <Tech />
          <Works />
          < Contact />
          <StarsCanvas />
        </div>

      </div>

    </BrowserRouter>
  );
};
export default App

