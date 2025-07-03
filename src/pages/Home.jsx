import "../css/Home.css"
import Footer from '../components/Footer.jsx'
import AboutMe from '../components/AboutMe.jsx'
import TechStack from '../components/TechStack.jsx';
import Experience from '../components/Experience.jsx'

function Home( {linkedin, github}) {

    return (
    <>


    <div className="home">
        <div className="left-side">
            <AboutMe linkedin={linkedin} github={github}/>
            <TechStack/>
        </div>
        <div className="right-side">
            <Experience/>
        </div>
       
        
    </div>
    {/* <Footer /> */}
    
    </>
    );
}

export default Home