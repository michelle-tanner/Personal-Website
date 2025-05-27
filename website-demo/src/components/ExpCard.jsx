import '../css/AboutMe.css'

function ExpCard(experience) {
    return (
        <>
        <div className="project">
            <div className="circle"></div>
            <div className="title">{experience.name}</div>
            <p>{experience.description}</p>
        </div>
       
        </>
    )
}

export default ExpCard