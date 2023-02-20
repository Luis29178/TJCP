import React from "react";
import { Buttonnew } from "./newButton";
import { MapPrev } from "./SpectaterMapPrev";
import { JoinGroup } from "./spectatorSideBarJoinNew";

import "./_SpectatorSideBar.css"

export function SpectatorSideBar() {

    const JoinNewRaid = (RaidCode) => {

        console.log("switched Raids")

    }

    const JoinPrevRaid = (RaidToJoin)  => {
        console.log("pull selected Raid");

        this.JoinNewRaid("theCode");

    }

    return (
        <>
            <div className="containerSideBar">
                <div className="minzButton">
                    <Buttonnew borderStyle="back" onClick={() => { this.props.MinMiz().bind(this) }}>{'-'}</Buttonnew>

                </div>
                <div className="JoinNew">
                    <JoinGroup>
                    </JoinGroup>
                </div>
                <div className="mapPrev">
                    <MapPrev></MapPrev>
                </div>
                <div className="Leavebtn">
                    <Buttonnew borderStyle="specLeave" onClick={() => { console.log("leave Spectate") }}>Leave</Buttonnew>
                </div>
            </div>
        </>
    );

}