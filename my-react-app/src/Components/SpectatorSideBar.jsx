import React from "react";
import { Buttonnew } from "./newButton";
import { MapPrev } from "./SpectaterMapPrev";
import { JoinGroup } from "./spectatorSideBarJoinNew";

import "./_SpectatorSideBar.css"

export class SpectatorSideBar extends React.Component{
    constructor(props){
        super(props)

        this.state = {

        }

    }

    JoinNewRaid(RaidCode) {

        console.log("switched Raids")

    }

    JoinPrevRaid(RaidToJoin){
        console.log("pull selected Raid");
        
        this.JoinNewRaid("theCode");

    }

    render(){
        return(
            <>
            <div className="containerSideBar">
                <div className="minzButton">
                <Buttonnew borderStyle="back" onClick={() => {window.location.href = "/"}}>{'-'}</Buttonnew>

                </div>
                <div className="JoinNew">
                    <JoinGroup>
                    </JoinGroup>
                </div>
                <div className="mapPrev">
                    <MapPrev></MapPrev>
                </div>
                <div className="Leavebtn">
                    <Buttonnew borderStyle="specLeave" onClick ={() => {console.log("leave Spectate")}}>Leave</Buttonnew>
                </div>
            </div>
            </>
        );
    }
}