import "../css/Home.css"
import Footer from '../components/Footer.jsx'
import AboutMe from '../components/AboutMe.jsx'
import TechStack from '../components/TechStack.jsx';
import Experience from '../components/Experience.jsx'

function Home() {

    return (
    <>


    <div className="home">
        <AboutMe/>
        <TechStack/>
        <Experience/>
        
    </div>
    <Footer />
    
    </>
    );
}

export default Home