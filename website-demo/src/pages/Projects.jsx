import "../css/ProjectCard.css"
import Project from '../components/ProjectCard.jsx'

function Projects() {

    return (
        <>
        <div className="wrapper">
            <Project num="1" name="Voyage Game" description="Python on PyCharm IDE for single player game" url="../assets/images/blue_line.png"/>
            <Project num="2" name="Cow Chase" description="Java on IntelliJ IDE for multiplayer game" url="../assets/images/cta_stop.png"/>
            <Project num="3" name="SparkHacks" description="Astro, HTML, css, for Thai Bowl small-business" url="../assets/images/mango_mango.png"/>
            <Project num="4" name="Personal Website" description="React, Javascript, for personal website" url="../assets/images/skiing.png"/>
            <Project num="5" name="WiCs Website" description="Astro, Typescript, Tailwind css for Women in Computer Science @ UIC" url="../assets/images/pool.png"/>
        </div>
        </>
    )

}
export default Projects