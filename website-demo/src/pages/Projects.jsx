import "../css/ProjectCard.css"
import Project from '../components/ProjectCard.jsx'

function Projects() {

    return (
        <>
        <div className="wrapper">
            <Project num="1" name="Voyage Game" description="this is a test description for a new one." url=""/>
            <Project num="2" name="Cow Chase" description="this is a test description for a new one." url=""/>
            <Project num="3" name="SparkHacks" description="this is a test description for a new one." url=""/>
            <Project num="4" name="Personal Website" description="this is a test description for a new one." url=""/>
            <Project num="5" name="WiCs Website" description="this is a test description for a new one." url=""/>
        </div>
        </>
    )

}
export default Projects