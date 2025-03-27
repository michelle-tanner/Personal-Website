import EventCard from '../components/Images'
import {useState} from "react"


function Home() {
    const [searchQuery, setSearchQuery] = useState("");


    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
    }


    return (
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

        <div>Input Typed (real-time): <br></br>{searchQuery}</div>

    </div>
    );
}

export default Home