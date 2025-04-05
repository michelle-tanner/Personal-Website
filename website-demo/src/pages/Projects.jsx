// import "../css/index.css"
import "../css/Projects.css"

function Projects() {

    const projects = [ // object 
        {id: 1, title: "Project 1", link: "", description: "words words desciption and more words words desciption and more words words desciption and more words words desciption and more words words desciption and more words words desciption and more words words desciption and more words words desciption and more words words desciption and more words words desciption and more words words desciption and more words words desciption and more words words desciption and more words words desciption and more words words desciption and more"},
        {id: 2, title: "Project 2", link: "", description: "words words desciption and more words words desciption and more words words desciption and more words words desciption and more words words desciption and more words words desciption and more words words desciption and more words words desciption and more words words desciption."},
        {id: 3, title: "Project 3", link: "", description: "words words desciption and more words words desciption and more words words desciption and more words words desciption."},
    ]

    return (
        <>
        <div className="projects">
            <div className="project">
                <div className="description">
                    <h3>Project 1</h3>
                    <p>
                        words words desciption and more words words desciption and more words words desciption and more words words desciption and more words words desciption and more words words desciption and more words words desciption and more words words desciption and more words words desciption.<br></br>
                        <br></br>
                        Inspired by: Camille Amore or something 
                        Check out the Project: 
                    </p>
                </div>
                <img className="image" src="src/assets/ohik.png" alt="" title=""></img>
                
            </div>
            <div className="project">
                <img className="image" src="src/assets/pool.png" alt="" title=""></img>
                <div className="description">
                    <h3>Project 2</h3>
                    <p>
                        words words desciption and more words words desciption and more words words desciption and more words words desciption and more words words desciption and more words words desciption and more words words desciption and more words words desciption and more words words desciption.<br></br>
                        <br></br>
                        Inspired by: Thai Bowl's horrible website
                        Check out the Project: 
                    </p>
                    
                </div>

            </div>
            
        </div>
        <h3>Projects Page</h3>
        <p>in progress...</p>
        <div className="">

        </div>
        </>
    )

}
export default Projects