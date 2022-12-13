import { useOnDraw } from "./MapCanvasHook";
import map from '../Images/custumsmapog.png'
import { useState } from "react";

import cursor from "./Tags/cursor.png";

const MapCanvas = ({
    width,
    height,
    
}) => {

    
    const setCanvasRef = useOnDraw(onDraw,clear);

 
    function onDraw(ctx, point, prevPoint){
        drawLine(prevPoint,point,ctx,'#000000', 5);
    }

    function clear(ctx){
        ctx.clearRect(0,0,width,height)
    }
    

    function drawLine(start,end,ctx,color, width){
        start = start ?? end;
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.strokeStyle = color;
        ctx.moveTo(start.x,start.y);
        ctx.lineTo(end.x,end.y);
        ctx.stroke();

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(start.x,start.y,2,0,2*Math.PI);
        ctx.fill();


        
    }
    

    return(
    <canvas
        width = {width}
        height = {height}
        style = {canvasStyle}
        ref ={setCanvasRef}
        
    />
    );

    

}

export default MapCanvas;

var canvasStyle = {
    
    border: "1px solid black",
    backgroundImage: `url(${map})`,
    backgroundSize: "cover",
    
}