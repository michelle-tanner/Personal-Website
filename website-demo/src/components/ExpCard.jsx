import '../css/AboutMe.css'

function ExpCard(experience) {
    return (
        <>
        <div className="project">
            <div className="circle"></div>
            <div className="title">{experience.name}</div>
        </div>
       
        </>
    )
}

export default ExpCard