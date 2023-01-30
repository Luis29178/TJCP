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
                        {this.props.btnGroup}
                    </div>
                </div>
            </div>


        )
    }

}
export default PathMenu;

