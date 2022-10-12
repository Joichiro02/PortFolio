import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.scss';
import "animate.css";
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
import { BsGearFill, BsMoonStars, BsPlusLg } from 'react-icons/bs';
import { FaSun } from 'react-icons/fa';

function App() {
  const location = useLocation();
  const [themeMode, setThemeMode] = useState("darkMode");
  const [themeColor, setThemeColor] = useState("template-1");
  const [openThemeCont, setOpenThemeCont] = useState(false);
  const handleTheme = (theme : string) => {
        if(theme === "lightMode"){
            setThemeMode("lightMode");
        }
        else {
            setThemeMode("darkMode");
        }
    }
    const handleOpen = () => {
      if(!openThemeCont){
        setOpenThemeCont(!openThemeCont);
      }
    }
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
            <BsGearFill className="gearIcon" onClick={handleOpen}/>
            <div className={classNames("colorsContainer",{
              "open": openThemeCont
            })}>
              <div className="headerContent">
                <h3 className="header">Theme Template</h3>
                <BsPlusLg className="close" onClick={() => setOpenThemeCont(!openThemeCont)}/>
              </div>
              <div className="modeContent">
                <span className={classNames("sunContainer",{
                  "active": themeMode === "lightMode"
                })} onClick={() => handleTheme("lightMode")}>
                  <FaSun className="sun"/>
                </span>
                <span className={classNames("moonContainer",{
                  "active": themeMode === "darkMode"
                })} onClick={() => handleTheme("darkMode")}>
                  <BsMoonStars className="moon"/>
                </span>
              </div>
              <div className="colorsContent">
                <span className={classNames("templateContainer",{
                  "active": themeColor === "template-1"
                })} onClick={() => setThemeColor("template-1")}>
                  <span className='template1'>
                    <span className="animate__animated animate__rubberBand" ></span>
                  </span>
                </span>
                <span className={classNames("templateContainer",{
                  "active": themeColor === "template-2"
                })} onClick={() => setThemeColor("template-2")}>
                  <span className='template2'>
                    <span className="animate__animated animate__rubberBand" ></span>
                  </span>
                </span>
                <span className={classNames("templateContainer",{
                  "active": themeColor === "template-3"
                })} onClick={() => setThemeColor("template-3")}>
                  <span className='template3'>
                    <span className="animate__animated animate__rubberBand" ></span>
                  </span>
                </span>
                <span className={classNames("templateContainer",{
                  "active": themeColor === "template-4"
                })} onClick={() => setThemeColor("template-4")}>
                  <span className='template4'>
                    <span className="animate__animated animate__rubberBand" ></span>
                  </span>
                </span>
                <span className={classNames("templateContainer",{
                  "active": themeColor === "template-5"
                })} onClick={() => setThemeColor("template-5")}>
                  <span className='template5'>
                    <span className="animate__animated animate__rubberBand" ></span>
                  </span>
                </span>
                <span className={classNames("templateContainer",{
                  "active": themeColor === "template-6"
                })} onClick={() => setThemeColor("template-6")}>
                  <span className='template6'>
                    <span className="animate__animated animate__rubberBand" ></span>
                  </span>
                </span>
                <span className={classNames("templateContainer",{
                  "active": themeColor === "template-7"
                })} onClick={() => setThemeColor("template-7")}>
                  <span className='template7'>
                    <span className="animate__animated animate__rubberBand" ></span>
                  </span>
                </span>
              </div>
            </div>
        </div>
      </div>
      <RightContent/>
    </div>
  );
}

export default App;
