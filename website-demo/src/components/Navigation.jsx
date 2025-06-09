import { Link } from "react-router-dom";
import '../css/Navigation.css'
import {useState} from "react"

import SunIcon from '../assets/icons/Sun.svg'
import MoonIcon from '../assets/icons/Moon.svg'

function Navigation({ icon, handleChange, isChecked }) {
    
    // changes the state if not already in state 
    const setLightMode = () => {
        if (isChecked) {
            handleChange();
        }
    };
    const setDarkMode = () => {
        if (!isChecked) {
            handleChange();
        }
    };

    return (
    <>
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">
                    <img src={icon} alt="Logo" className="logo-small"/>
                </Link>
            </div>
            <div className="navbar-links">
                <Link to="/projects" className="nav-link">Projects</Link>
                <Link to="/info" className="nav-link">Info</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
            </div>
            <div className="navbar-language">
                <div className="nav-lang">
                    <img 
                        src={SunIcon}
                        alt="light mode"
                        className={`nav-lang ${!isChecked ? 'acive-mode' : ''}`} // for style feedback
                        onClick={setLightMode}
                    />
                </div>
                
                
                {/* <Link to="/favorites" className="nav-lang"><img src="src/assets/icons/Sun.svg" alt="light-mode"></img></Link> */}
                <p className="slash">/</p>
                {/* <Link to="/carousel-page" className="nav-lang"><img src="src/assets/icons/Moon.svg" alt="dark-mode"></img></Link> */}
                
                <div className="nav-lang">
                    <img
                        src={MoonIcon}
                        alt="Dark Mode"
                        className={`nav-lang ${!isChecked ? 'acive-mode' : ''}`} // for style feedback
                        onClick={setDarkMode}
                    />
                </div>
                
            </div>
            {/* <div className="toggle-container">
                <input 
                    type="checkbox" 
                    id="check" 
                    className="toggle" 
                    onChange={handleChange} 
                    checked={isChecked}
                />
                <label htmlFor="check">DarkMode</label>
            </div> */}
        </nav>
    </>
        
    )
}

export default Navigation