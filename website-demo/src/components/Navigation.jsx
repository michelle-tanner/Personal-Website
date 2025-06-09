import { Link } from "react-router-dom";
import '../css/Navigation.css'
import {useState} from "react"

function Navigation({ icon, handleChange, isChecked }) {
    // const [ handleChange, isChecked ] = useState("words");
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
                {/* <Link to="/favorites" className="nav-lang"><img src="src/assets/icons/Sun.svg" alt="light-mode"></img></Link>
                <p className="nav-lang">/</p>
                <Link to="/carousel-page" className="nav-lang"><img src="src/assets/icons/Moon.svg" alt="dark-mode"></img></Link> */}
            
                <div className="toggle-container">
                    <input 
                        type="checkbox" 
                        id="check" 
                        className="toggle" 
                        onChange={handleChange} 
                        checked={isChecked}
                    />
                    <label htmlFor="check">DarkMode</label>
                </div>
            </div>
        </nav>
    </>
        
    )
}

export default Navigation