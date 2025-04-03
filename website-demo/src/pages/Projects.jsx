import "../css/index.css"

function Projects() {

    const projects = [ // object 
        {id: 1, title: "St. Patricks Day", url: "", date: "3/17/2024", description: "This is the day..."},
        {id: 2, title: "Birthday Celebration", url: "", date: "3/14/2024", description: "Strawberry Cake slicing.."},
        {id: 3, title: "Fogo de Chao", url: "", date: "3/22/2024", description: "Went to fogo de chao"},
        {id: 4, title: "Lunar Eclipse", url: "", date: "3/01/2024", description: "Something else...."},    

    ]

    return (
        <>
        <div className="projects">
            <div className="description">
                <h3>Project 1</h3>
                <p>
                    words words desciption and more words words desciption and more words words desciption and more words words desciption and more words words desciption and more words words desciption and more words words desciption and more words words desciption and more words words desciption and more words words desciption and more words words desciption and more words words desciption and more words words desciption and more words words desciption and more words words desciption and more<br></br>
                    <br></br>
                    Inspired by: Camille Amore or something 
                    Check out the Project: 
                </p>
                <img className="image" src="" alt="" title=""></img>
            </div>
            <div className="description">
            <h3>Project 2</h3>
                <p>
                    words words desciption and more words words desciption and more words words desciption and more words words desciption and more words words desciption and more words words desciption and more words words desciption and more words words desciption and more words words desciption and more words words desciption and more words words desciption and more words words desciption and more words words desciption and more words words desciption and more words words desciption and more<br></br>
                    <br></br>
                    Inspired by: Camille Amore or something 
                    Check out the Project: 
                </p>
                <img className="image" src="" alt="" title=""></img>
            </div>
        </div>
        <h3>Projects Page</h3>
        <p>in progress...</p>
        <div className="">

        </div>
        </>
    )

}
export default Projects