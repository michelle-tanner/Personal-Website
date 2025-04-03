

function ProjectCard({event}) {

    function onFavoriteClick() {
        alert("clicked")
    }

    return <div className="event-card">
        <div className="event-image">
            <img src={event.url} alt={event.title}/>
            <div className="event-overlay">
                <button className="favorite-btn" onClick={onFavoriteClick}>
                    ♥
                </button>
            </div>
        </div>
        <div className="event-info">

            <h3>{event.title}</h3>
            <p>{event.description}<br></br>{event.date}</p>
        </div>


    </div>
    
}

export default ProjectCard