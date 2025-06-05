import '../css/ProjectCard.css'

function ProjectCard(project) {

    function onFavoriteClick() {
        alert("clicked")
    }

    // return <div className="project-card">
    //     <img className="project-image" src={project.imgURL} alt="project display"></img>
    //     <div className="title">{project.name}</div>
    //     <div className="description">{project.description}</div>
    //     <div className="btns">
    //         <button className="demo">Live Demo</button>
    //         <button className="source">Source Code</button>
    //     </div>
        
    // </div>

    return (
        <>
            <div className="wrapper">
                <div className="container">
                    <input type="radio" name="slide" id="c1" checked />
                    <label for="c1" class="card">
                        <div className="row">
                            <div className="icon">1</div>
                            <div className="description">
                                <h2>Winter</h2>
                                <p>Winter has so much to offer creative activities</p>
                            </div>
                        </div>
                    </label>
                    <input type="radio" name="slide" id="c2" checked />
                    <label for="c2" class="card">
                        <div className="row">
                            <div className="icon">2</div>
                            <div className="description">
                                <h2>Summer</h2>
                                <p>Summer has so much to offer creative activities</p>
                            </div>
                        </div>
                    </label>
                    <input type="radio" name="slide" id="c3" checked />
                    <label for="c3" class="card">
                        <div className="row">
                            <div className="icon">3</div>
                            <div className="description">
                                <h2>Autumn</h2>
                                <p>Autumn has so much to offer creative activities</p>
                            </div>
                        </div>
                    </label>
                    <input type="radio" name="slide" id="c4" checked />
                    <label for="c4" class="card">
                        <div className="row">
                            <div className="icon">4</div>
                            <div className="description">
                                <h2>Fall</h2>
                                <p>Fall has so much to offer creative activities</p>
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        </>
    )
    
}

export default ProjectCard