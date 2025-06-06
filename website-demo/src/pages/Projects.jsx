import "../css/ProjectCard.css"
import Project from '../components/ProjectCard.jsx'

function Projects() {

    return (
        <>
        <div className="wrapper">
            <Project num="1" name="Summer" description="this is a test description for a new one." url=""/>
            <Project num="2" name="Winter" description="this is a test description for a new one." url=""/>
            <Project num="3" name="Fall" description="this is a test description for a new one." url=""/>
            <Project num="4" name="Autumn" description="this is a test description for a new one." url=""/>
        </div>
        </>
    )

}
export default Projects