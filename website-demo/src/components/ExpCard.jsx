import '../css/AboutMe.css'

function ExpCard(experience) {
    return (
        <>
        <div className="project">
            <div className="horizontal">
                <div className="circle"></div>
                <div className="project-title">{experience.name}</div>
            </div>
            <div className="about">
                {experience.description}
            </div>
            
        </div>
       
        </>
    )
}

export default ExpCard