import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.scss';
import LeftContent from './components/leftContent/LeftContent';
import RightContent from './components/rightContent/RightContent';
import Blog from './pages/blog/Blog';
import Contact from './pages/contact/Contact';
import Education from './pages/education/Education';
import Home from './pages/home/Home';
import Portfolio from './pages/portfolio/Portfoio';
import Services from './pages/service/Service';
import {AnimatePresence} from "framer-motion"

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <LeftContent/>
      <div className="mainContainer">
        <div className="mainContent">
          <AnimatePresence>
            <Routes location={location} key={location.key}>
              <Route path="/" element={<Home/>} />
              <Route path="/service" element={<Services/>} />
              <Route path="/education" element={<Education/>} />
              <Route path="/portfolio" element={<Portfolio/>} />
              <Route path="/blog" element={<Blog/>} />
              <Route path="/contact" element={<Contact/>} />
            </Routes>
          </AnimatePresence>
        </div>
      </div>
      <RightContent/>
    </div>
  );
}

export default App;
