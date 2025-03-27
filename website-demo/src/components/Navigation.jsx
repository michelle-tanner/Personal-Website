import { Link } from "react-router-dom";
import '../css/Navigation.css'

function Navigation() {
    return (
    <>
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">
                    <img src="src/assets/Logo.jpg" alt="Logo" className="logo-small"/>
                </Link>
            </div>
            <div className="navbar-links">
                <Link to="/projects" className="nav-link">Projects</Link>
                <Link to="/info" className="nav-link">Info</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
            </div>
        </nav>
    </>
        
    )
}
// function Navigation() {

//     return (
//         <>
//         <div>
//             <nav>
//                 <ul>
//                     <img src="" alt="logo"></img>
//                     <li>Projects</li>
//                     <li>Info</li>
//                     <li>Contact</li>
//                     <li>en/中文</li>
//                 </ul>
//             </nav>
//         </div>
//         </>
//     );
// }


export default Navigation