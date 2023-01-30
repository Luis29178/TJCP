import React from "react";

import "./_RaidTools.css"

export class RaidTools extends React.Component{



    render() {

        return(
            <>
            <div className="ToolsBorder">
            </div>
            <div className="theTool">{this.props.tool}</div>
            </>
        )
    }

}