function P2(project) {
    return (
        <>
        <div className="container">
            <input type="radio" name="slide" id={`c${project.num}`} /> {/*checked*/}
                <label 
                    for={`c${project.num}`} 
                    class="card"
                    // style={{ backgroundImage: `url('${project.url}')`}}
                >
                    <div className="row">
                        <div className="icon">{project.num}</div>
                        <div className="description">
                            <h2>{project.name}</h2>
                            <p>{project.description}</p>
                        </div>
                    </div>
                </label>
        </div>
        
        </>
    )
}
export default P2