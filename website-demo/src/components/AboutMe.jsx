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
                    <a href="https://linkedin.com/in/michelletanner05" target="_blank"><img src="src/assets/icons/linkedin.svg" alt="img"></img></a>
                    <a href="https://github.com/michelle-tanner" target="_blank"><img src="src/assets/icons/github.svg" alt="img"></img></a>
                </div>
            </div>
            
            <div className="about">
                <div class="about-me">I'm a 20 year old developer, focused primarly in full-stack and quantum computing.</div>
            </div>
               
        </div>
        </>
    )
}

export default AboutMe

