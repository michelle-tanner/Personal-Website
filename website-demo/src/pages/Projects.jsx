import "../css/ProjectCard.css"
import Project from '../components/ProjectCard.jsx'

function Projects() {

    return (
        <>
        <div className="wrapper">
            <Project num="1" name="Voyage Game" description="this is a test description for a new one." url="../assets/images/blue_line.png"/>
            <Project num="2" name="Cow Chase" description="this is a test description for a new one." url="../assets/images/cta_stop.png"/>
            <Project num="3" name="SparkHacks" description="this is a test description for a new one." url="../assets/images/mango_mango.png"/>
            <Project num="4" name="Personal Website" description="this is a test description for a new one." url="../assets/images/skiing.png"/>
            <Project num="5" name="WiCs Website" description="this is a test description for a new one." url="../assets/images/pool.png"/>
        </div>
        </>
    )

}
export default Projects