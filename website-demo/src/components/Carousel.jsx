import React, { useEffect } from 'react'
import '../css/Carousel.css'

function Carousel() {
    useEffect(() => {
        const track = document.getElementById("image-track");

        const handleMouseDown = (e) => {
            track.dataset.mouseDownAt = e.clientX; // grab mouse X-pos 
        };

        const handleMouseUp = () => {
            track.dataset.mouseDownAt = "0"; // reseting
            track.dataset.prevPercentage = track.dataset.percentage; // storing 
        };

        const handleMouseMove = (e) => {
            if (track.dataset.mouseDownAt === "0") return; // carousel not touched 

            const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
            maxDelta = window.innerWidth / 2; // divide by 2 since full scroll = half of screen

            const percentage = (mouseDelta / maxDelta) * -100,
            nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage; // updating

            track.dataset.percentage = nextPercentage; 

            // update transform property
            track.style.transform = 'translate('+{nextPercentage}+'%, -50%)';
        };

        // Adding event listeners for mouse interactions
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('mousemove', handleMouseMove);

        // Cleanup event listeners when the component unmounts
        return () => {
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);


    
    
    // window.onmousedown = (e) => {
    //     track.dataset.mouseDownAt = e.clientX;
    // }

    // window.onmouseup = () => {
    //     track.dataset.mouseDownAt = "0";
    //     track.dataset.prevPercentage = track.dataset.percentage;
    // }
    
    // window.onmousemove = (e) => {
    //     if (track.dataset.mouseDownAt === "0") return;

    //     const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX, 
    //     maxDelta = window.innerWidth / 2;   // divide by 2 since full scroll = half of screen

    //     const percentage = (mouseDelta / maxDelta) * -100,
    //     nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
        
    //     track.dataset.percentage = nextPercentage;
        
    //     track.style.transform = "translate(" + {nextPercentage} + "%, -50%)";
    // }

    return (
    <>
    <div className="carousel">
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
    </div>
    
    <div>{}</div>
    </>
    );

}

export default Carousel