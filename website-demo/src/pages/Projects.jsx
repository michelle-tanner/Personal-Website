// import "../css/index.css"
import "../css/Projects.css"
import Project from '../components/ProjectCard'
import Footer from '../components/Footer'

function Projects() {

    return (
        <>
        <div className="projects">
            <Project style="flex-grow: 1" name="Voyage Game" imgURL="src/assets/mountain.png" />
            <Project style="flex-grow: 1" name="Cow Chase" imgURL="src/assets/blue_line.png" />
            <Project style="flex-grow: 1" name="Pad Thai" imgURL="src/assets/dave_and_busters.png" />
        
        </div>

        
        <Footer/>
        </>
    )

}
export default Projects