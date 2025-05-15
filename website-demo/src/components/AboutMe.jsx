import '../css/AboutMe.css'

function AboutMe() {
    return (
        <>
        <div className="info">
            <div className="horizontal">
                <div className="name-location">
                    <div className="name">Michelle Tanner</div>
                    <div className="loc">Chicago, Illinois</div>
                </div>
                <div className="socials">
                    <img src="src/assets/react.svg" alt="linkedin"></img>
                    <img src="src/assets/react.svg" alt="github"></img>
                </div>
            </div>
            
            <div className="about">
                <div>I'm a 20 year old developer, focused primarly in full-stack and quantum computing.</div>
            </div>
               
        </div>
        </>
    )
}

export default AboutMe

