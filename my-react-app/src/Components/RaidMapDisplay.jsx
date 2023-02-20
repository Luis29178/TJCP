import React from "react";
import MapCanvas from "./MapCanvas.js";

export class RaidMapDisplay extends React.Component {



    render() {

        return (
            <div className={`RaidMapDisplay`}>



                <MapCanvas
                            height={2142}
                            width={4097}
                            PathVis={this.props.PathVis}
                            map={this.props.map}
                            className={"Canvas"}>
                </MapCanvas>



            </div>)}
}