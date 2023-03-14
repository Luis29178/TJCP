import React from "react";
import PrismaZoom from "react-prismazoom";
import RaidMap from "./RaidMap";


export function ZoomableRaidMap (drawing,Visability) {



    return (

        
                            <div style={{
                                height: 2142,
                                width: 4097

                            }}>
                                <RaidMap
                                    drawing={drawing} PathVis={`RaidPath${Visability}`} />
                            </div>

                        
    )
}