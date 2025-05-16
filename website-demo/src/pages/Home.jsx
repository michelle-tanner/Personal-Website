import "../css/Home.css"
import Footer from '../components/Footer'
import AboutMe from '../components/AboutMe'
import TechStack from "../components/TechStack";

function Home() {

    return (
    <>


    <div className="home">
        <AboutMe/>
        <TechStack/>

        

    </div>
    <Footer />
    
    </>
    );
}

export default Home