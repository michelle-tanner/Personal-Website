import './App.css'
import EventCard from './components/Images'
import Home from './pages/Home'

import {Routes, Route} from 'react-router-dom'

import Navigation from './components/Navigation'
import Footer from './components/Footer'

import Favorites from './pages/Favorites'
import Projects from './pages/Projects'
import Info from './pages/Info'
import Contact from './pages/Contact'
import Biggs from './pages/Biggs'
import Carousel_demo from './pages/carousel-demo'
import React, {useState} from "react"
import {Toggle} from './components/Toggle'
import useLocalStorage from "use-local-storage";
// Navigation Bar 
import logoLight from './assets/images/logo-light.svg'
import logoDark from './assets/images/logo-dark.svg'

import lightSun from './assets/icons/Sun.svg'
import lightMoon from './assets/icons/Moon.svg'
import darkSun from './assets/icons/Sun-dark.svg'
import darkMoon from './assets/icons/Moon-dark.svg'
// Contact Page 
import lightLinkedIn from './assets/icons/linkedin.svg'
import lightGithub from './assets/icons/github.svg'
import lightEmail from './assets/icons/mail.svg'
import darkLinkedIn from './assets/icons/linkedin-dark.svg'
import darkGithub from './assets/icons/github-dark.svg'
import darkEmail from './assets/icons/mail-dark.svg'


function App() {
  // const [isDark, setIsDark] = useState(false);
  // stores value so even if refreshed, it doesn't change mode 
  const [isDark, setIsDark] = useLocalStorage("isDark", false);
  const currentLogo = isDark ? logoDark : logoLight;
  const currLinkedIn = isDark ? darkLinkedIn : lightLinkedIn;
  const currGithub = isDark ? darkGithub : lightGithub;
  const currEmail = isDark ? darkEmail : lightEmail;
  const currSunIcon = isDark ? darkSun : lightSun;
  const currMoonIcon = isDark ? darkMoon : lightMoon;

  return (
    <>
    <div className="screen" data-theme={isDark ? "dark" : "light"}>
      {/* <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)}/> */}
      
      <Navigation 
        icon={currentLogo} 
        isChecked={isDark} 
        handleChange={() => setIsDark(!isDark)}
        SunIcon={currSunIcon}
        MoonIcon={currMoonIcon}
      />
      
      <main className="main-content">
        {/* <h3 className="substitute">...Main Content...</h3> */}
        <Routes>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/info" element={<Info/>}/>
          <Route path="/contact" element={<Contact linkedin={currLinkedIn} github={currGithub} email={currEmail}/>}/>

          <Route path="/" element={<Home/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
          <Route path="/carousel-page" element={<Carousel_demo/>}/>
          <Route path="/bbm" element={<Biggs/>}/>
          <Route path="/cr" element={<Favorites/>}/>
        
        </Routes>
      </main>

    </div>




      {/* <Navigation text="Test1" text2="Test1"/>
      <Navigation />
      <br></br><br></br> */}

      {/* {eventNumber === 1 ? (
        <EventCard event={{title: "St. Patrick's Day", url: "", date: "3/17/2024", description: "This was the day..."}}/>
      ) : (
      <EventCard event={{title: "Birthday Celebration", url: "", date: "3/14/2024", description: "First day meeting.."}}/>
      )}

      {eventNumber === 1 && <EventCard event={{title: "Birthday Celebration", url: "", date: "3/14/2024", description: "First day meeting.."}}/>}
      {eventNumber === 2 && <EventCard event={{title: "St. Patrick's Day", url: "", date: "3/17/2024", description: "This was the day..."}}/>} */}
      
      
      </>
    
    
  )
}

// function Navigation({text, text2}) {

//   return (
//     <>
//     <div>Hello World</div>
//     <div>Passed in value: {text}</div>
//     <div>Another passed in value: {text2}</div>

//     </>
//   )
// }
export default App
