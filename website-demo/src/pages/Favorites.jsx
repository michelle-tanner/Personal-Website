import EventCard from '../components/Images'
import {useState} from "react"
import '../css/Favorites.css'

function Favorite() {
    const [searchQuery, setSearchQuery] = useState("");


    const events = [
        {id: 1, title: "St. Patricks Day", url: "", date: "3/17/2024", description: "This is the day..."},
        {id: 2, title: "Birthday Celebration", url: "", date: "3/14/2024", description: "First day we met.."},
        {id: 3, title: "Fogo de Chao", url: "", date: "3/22/2024", description: "Went to fogo de chao"},
        {id: 4, title: "Lunar Eclipse", url: "", date: "3/01/2024", description: "Something else...."},    

    ]
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


        <div className="events-grid">
            {/* {events.map((event) => (
                <EventCard event={event} key={event.id}/>
            ))} */}

            {events.map((event) => (
                (event.title.toLowerCase().startsWith(searchQuery) || 
                event.date.includes(searchQuery)) && 
                (
                    <EventCard event={event} key={DeviceMotionEvent.id} />
                )
            ))}

        </div>

        <div className="favorites-empty">
            <h2>No Favorites</h2>
            <p>Add events to your favorites</p>
        </div>

    </div>
    );
    
}

export default Favorite