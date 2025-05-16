import '../css/AboutMe.css'

function TechStack() {
    return (
        <>
        <div className="info">
            <div className="horizontal">
                <div className="fullstack">Web-Development
                    <a href="https://www.javascript.com/" target="_blank"><img src="src/assets/tech_stack/js.svg" alt="javascript"></img>JavaScript</a>
                    <a href="" target="_blank"><img src="src/assets/tech_stack/reactjs.svg" alt=""></img>React</a>
                    {/* <a href="" target="_blank"><img src="src/assets/tech_stack/.svg" alt=""></img></a> */}
                </div>
                <div className="quantum">Quantum
                    <a href="" target="_blank"><img src="src/assets/tech_stack/python.svg" alt=""></img>Python</a>
                    {/* <a href="" target="_blank"><img src="src/assets/tech_stack/.svg" alt=""></img></a> */}
                </div>
            </div>
            
            <div className="about">In School
                <a href="" target="_blank"><img src="src/assets/tech_stack/csharp.svg" alt="C#"></img>C#</a>
                <a href="" target="_blank"><img src="src/assets/tech_stack/go.svg" alt="GO"></img><i>GO</i></a>
            </div>
        </div>
        </>
    )
}

export default TechStack