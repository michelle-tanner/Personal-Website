import "../css/Home.css"
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import AboutMe from '../components/AboutMe'

function Home() {

    return (
    <>


    <div className="home">
        {/* <Carousel /> */}
        <AboutMe/>

    </div>
    <Footer />
    
    </>
    );
}

export default Home