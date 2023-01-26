import { Grid } from "@mui/material";
import React from "react";
import { Buttonnew } from "./newButton";
import './_PathMenu.css'
import "./_sidebarBtnGrp.css"

class PathMenu extends React.Component {
    state = {


    }

    render() {

        return (


            <div className="SideBarContent">

                <div className="SideBarContentTitle">{this.props.title}</div>


                <div className="SideBarContentInfo">{this.props.info}</div>

                <div className="SideBarContentBtnGrp">
                    <div className="btnGrouCont">

                        <div className="btn1">
                            <Buttonnew borderStyle={"ttRaid"} onClick={() => { console.log("to Raid") }}> Take To Raid</Buttonnew>
                        </div>
                        <div className="btn2">
                            <Buttonnew borderStyle={"save"} onClick={() => { console.log("save") }}> Save</Buttonnew>
                        </div>
                        <div className="btn3">
                            <Buttonnew borderStyle={"discard"} onClick={() => { console.log("discard") }}> Discard</Buttonnew>
                        </div>
                    </div>
                </div>
            </div>


        )
    }

}
export default PathMenu;
var tittel = {
    fontSize: "30px",

}
var pathname = {
    fontSize: "20px",
}
