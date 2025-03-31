import '../css/Carousel.css'


function Carousel() {
    const track = document.getElementById("image-track");
    
    window.onmousedown = (e) => {
        track.dataset.mouseDownAt = e.clientX;
    }

    window.onmouseup = () => {
        track.dataset.mouseDownAt = "0";
        track.dataset.prevPercentage = track.dataset.percentage;
    }
    
    window.onmousemove = (e) => {
        if (track.dataset.mouseDownAt === "0") return;

        const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX, 
        maxDelta = window.innerWidth / 2;   // divide by 2 since full scroll = half of screen

        const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
        
        track.dataset.percentage = nextPercentage;
        
        track.style.transform = "translate(" + {nextPercentage} + "%, -50%)";
    }

    return (
    <>
    <div className="image-track" data-mouse-down-at="0" data-prev-percentage="0">
        <img className="image" src="src/assets/blue_line.png" draggable="false"/>
        <img className="image" src="src/assets/cta_stop.png" draggable="false"/>
        <img className="image" src="src/assets/dave_and_busters.png" draggable="false"/>
        <img className="image" src="src/assets/girls.jpg" draggable="false"/>
        <img className="image" src="src/assets/mango_mango.png" draggable="false"/>
        <img className="image" src="src/assets/mountain.png" draggable="false"/>
        <img className="image" src="src/assets/ohik.png" draggable="false"/>
        <img className="image" src="src/assets/pool.png" draggable="false"/>
        <img className="image" src="src/assets/skiing.png" draggable="false"/>
        <img className="image" src="src/assets/uic.png" draggable="false"/>
    </div>
    <div>{}</div>
    </>
    );

}

export default Carousel