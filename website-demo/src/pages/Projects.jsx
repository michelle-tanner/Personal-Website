// import "../css/index.css"
import "../css/Projects.css"
import Project from '../components/ProjectCard'
import Footer from '../components/Footer'

function Projects() {

    return (
        <>
        <div className="projects">
            <Project style="flex-grow: 1" name="Voyage Game" imgURL="src/assets/images/mountain.png" description="Used python on PyCharm IDE with Grpahic libraries and 2D pixels." stack="python, pycahrm"/>
            <Project style="flex-grow: 1" name="Cow Chase" imgURL="src/assets/images/blue_line.png" description=""/>
            <Project style="flex-grow: 1" name="Pad Thai" imgURL="src/assets/images/dave_and_busters.png" description=""/>
            <Project style="flex-grow: 1" name="WiCs Website" imgURL="src/assets/images/uic.png" description=""/>
            <Project style="flex-grow: 1" name="Personal Website" imgURL="src/assets/images/cta_stop.png" description=""/>
        </div>

        
        <Footer/>
        </>
    )

}
export default Projects