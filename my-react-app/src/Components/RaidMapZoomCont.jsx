import React, { useRef } from "react";
import OmniPrismaZoom from "./OmniPrismaZoom.tsx";
import RaidMap from "./RaidMap.jsx";



export const RaidMapZoom = (
    props
) => {
    return (<>

    
    
        <OmniPrismaZoom
            id="zoomContRef"
            className="ZoomContainer"
            style={{
                height: 2142,
                width: 4097

            }}
            allowPan={props.zooming}
            allowWheel={false}
            allowZoom={false}
            allowTouchEvents={true}
            onPanChange={() => {
                console.log(props.zooming);
            }}

        >
            
            <div style={{
                height: 2142,
                width: 4097

            }}>

                <RaidMap id="mapRef"
                    drawing={props.drawing} PathVis={`RaidPath${props.Visability}`} />
            </div>


        </OmniPrismaZoom>
        

        


    </> )
}