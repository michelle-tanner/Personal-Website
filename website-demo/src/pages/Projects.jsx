// import "../css/index.css"
import "../css/Projects.css"
import Project from '../components/ProjectCard'
import Footer from '../components/Footer'

function Projects() {

    return (
        <>
        <div className="projects">
            <Project style="flex-grow: 1" name="Voyage Game" imgURL="src/assets/images/mountain.png" />
            <Project style="flex-grow: 1" name="Cow Chase" imgURL="src/assets/images/blue_line.png" />
            <Project style="flex-grow: 1" name="Pad Thai" imgURL="src/assets/images/dave_and_busters.png" />
            <Project style="flex-grow: 1" name="WiCs Website" imgURL="src/assets/images/uic.png" />
            <Project style="flex-grow: 1" name="Personal Website" imgURL="src/assets/images/cta_stop.png" />
        </div>

        
        <Footer/>
        </>
    )

}
export default Projects