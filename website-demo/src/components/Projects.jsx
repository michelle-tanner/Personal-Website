import '../css/ProjectCard.css'
import Project from '../components/P2'

function P1() {
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
export default P1