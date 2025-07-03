import { Link } from "react-router-dom";
import '../css/Footer.css'

function Footer() {
    return (
    <>
    <div className="footer">
        <a href="https://github.com/michelle-tanner" target="_blank" rel="link" className="footer-links">Github</a>
        <a href="https://www.linkedin.com/in/michelletanner05/" target="_blank" rel="link" className="footer-links">Linkedin</a>
        <Link to="/bbm" className="footer-links">Biggs Bigs Media</Link>
        <Link to="/cr" className="footer-links">City Rats</Link>

    </div>
    
    
    </>
    )
}

export default Footer