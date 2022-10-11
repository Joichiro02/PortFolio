import React, { useState } from 'react';
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
import classNames from 'classnames';
import { BsGearFill } from 'react-icons/bs';

function App() {
  const location = useLocation();
  const [themeMode, setThemeMode] = useState("lightMode");
  const [themeColor, setThemeColor] = useState("template-1");
  return (
    <div
      className={classNames("App",{
        "lightMode": themeMode === "lightMode",
        "darkMode": themeMode === "darkMode",
      })} 
      id={themeColor}>
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
        <div className="gear">
            <BsGearFill className="gearIcon"/>
            <div className="colorsContainer">
              <div className="headerContent">
                <h6 className="header">Theme Template</h6>
              </div>~
              <div className="modeContent">

              </div>
              <div className="colorsContent">
                <span onClick={() => setThemeColor("template-1")}></span>
                <span onClick={() => setThemeColor("template-2")}></span>
                <span onClick={() => setThemeColor("template-3")}></span>
                <span onClick={() => setThemeColor("template-4")}></span>
                <span onClick={() => setThemeColor("template-5")}></span>
                <span onClick={() => setThemeColor("template-6")}></span>
                <span onClick={() => setThemeColor("template-7")}></span>
              </div>
            </div>
        </div>
      </div>
      <RightContent themeMode={themeMode} setThemeMode={setThemeMode}/>
    </div>
  );
}

export default App;
