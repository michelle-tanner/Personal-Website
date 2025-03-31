import EventCard from '../components/Images'
import {useState} from "react"
import "../css/Home.css"
import Footer from '../components/Footer'
function Home() {
    const [searchQuery, setSearchQuery] = useState("");


    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
    }


    return (
    <>
    
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input 
                type="text" 
                placeholder="search for an event..." 
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">
                Search
            </button>

        </form>
        <div className="responsive">Input Typed: <br></br>{searchQuery}</div>

    </div>
    <Footer />
    </>
    );
}

export default Home