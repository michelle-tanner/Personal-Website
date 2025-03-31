import '../css/Carousel.css'

function Carousel() {
    const track = document.getElementById("image-track");
    window.onmousedown = (e) => {
        track.dataset.mouseDownAt = e.clientX;
        const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;

        const percentage = (mouseDelta / mexDelta) * 100;
    }
    return (
    <>
    <div className="image-track">
        <img className="image" src="src/assets/blue_line.png" />
        <img className="image" src="src/assets/cta_stop.png" />
        <img className="image" src="src/assets/dave_and_busters.png" />
        <img className="image" src="src/assets/girls.jpg" />
        <img className="image" src="src/assets/mango_mango.png" />
        <img className="image" src="src/assets/mountain.png" />
        <img className="image" src="src/assets/ohik.png" />
        <img className="image" src="src/assets/pool.png" />
        <img className="image" src="src/assets/skiing.png" />
        <img className="image" src="src/assets/uic.png" />
    </div>
    <div>{}</div>
    </>
    );

}

export default Carousel