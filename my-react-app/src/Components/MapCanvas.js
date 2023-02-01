import { useOnDraw } from "./MapCanvasHook";
import Customs from '../Images/custumsmapog.png';
import Factory from '../Images/factorymap.png';
import Interchange from '../Images/interchangemap.png';
import Labs from '../Images/labsmap.png';
import Lighthouse from '../Images/lighthousemap.png';
import Reserve from '../Images/reservemap.png';
import Shoreline from '../Images/shorelinemap.png';
import Woods from '../Images/woodsmap.png';

import "./_MapCanvas.css"



const MapCanvas = ({
    width,
    height,
    map,

}) => {

    var canvasStyle = {
    
        border: "1px solid black",
        backgroundImage: `url(${window.localStorage.getItem("raidMap")})`,
        backgroundSize: "cover",
        
        
    }


    const setCanvasRef = useOnDraw(onDraw, clear);


    function onDraw(ctx, point, prevPoint) {
        drawLine(prevPoint, point, ctx, '#000000', 5);
    }

    function handleClearKey(event){
        var key = event.key;
        console.log("You pressed a key: " + key);

    
    }


    function clear(ctx) {
        
        ctx.clearRect(0, 0, width, height)
    }


    function drawLine(start, end, ctx, color, width) {
        start = start ?? end;
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.strokeStyle = color;
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(start.x, start.y, 2, 0, 2 * Math.PI);
        ctx.fill();



    }



    

    var canvasStyle = {

        backgroundImage: `url(${map})`,
        border: "1px solid black",
        backgroundSize: "cover",
    
    
    }
    




    return (
    
     
            <canvas
                onKeyDown={(event) => handleClearKey(event).bind(this)}
                height={2142}
                width={4097}
                style={canvasStyle}
                ref={setCanvasRef}

            />
     
        
    );



}

export default MapCanvas;


