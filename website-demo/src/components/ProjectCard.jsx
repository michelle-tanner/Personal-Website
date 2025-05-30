import '../css/ProjectCard.css'

function ProjectCard(project) {

    function onFavoriteClick() {
        alert("clicked")
    }

    return <div className="project-card">
        <img className="project-image" src={project.imgURL} alt="project display"></img>
        <div className="title">{project.name}</div>
        <div className="description">{project.description}</div>
        <div className="btns">
            <button className="demo">Live Demo</button>
            <button className="source">Source Code</button>
        </div>
        
    </div>
    
}

export default ProjectCard