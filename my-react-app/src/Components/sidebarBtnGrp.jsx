import React from "react";
import { Grid } from "@mui/material";
import { Buttonnew } from "./newButton";

import "./_sidebarBtnGrp.css"

class PathButtons extends React.Component {


    render() {
        return (
            <div className="btnGrouCont">

                <div className="ttRaid">
                    <Buttonnew borderStyle={"ttRaid"} onClick={() => { console.log("to Raid") }}> Take To Raid</Buttonnew>
                </div>
                <div className="save">
                    <Buttonnew borderStyle={"save"} onClick={() => { console.log("save") }}> Save</Buttonnew>
                </div>
                <div className="discard">
                    <Buttonnew borderStyle={"discard"} onClick={() => { console.log("save") }}> Discard</Buttonnew>
                </div>
            </div>

        )

    }
}
export default PathButtons;