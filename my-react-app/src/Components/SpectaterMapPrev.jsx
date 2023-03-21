import React from "react";
import  MapCanvas from "./MapCanvas";
import { SpectDropBar } from "./SpctMatchDropBar";

import "./_SpectatorMapPrev.css"


export class MapPrev extends React.Component {
    constructor(props) {
        super(props)

        this.state = {


        }
    }


    render() {

        return (
            <>
                <div className="mapPrevCont">
                    <div className="mapPrev">

                        <MapCanvas
                            className={"Canvas"}>
                        </MapCanvas>

                    </div>
                    <div className="dropDown">
                        <SpectDropBar/>
                    </div>
                </div>

            </>
        )
    }
}