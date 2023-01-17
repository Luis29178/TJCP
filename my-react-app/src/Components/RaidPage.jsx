import React from "react";
import "./_RaidPage.css";
import MapCanvas from "./MapCanvas.js";
import { Tags } from "./RaidTags.jsx";
import UserInfoBar from "./UserInfoBar";
import { UserWheel } from "./UserWheel.jsx";
import { Grid } from "@mui/material";
import { useSpring, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import RaidMap from "./RaidMap";

import cursor from "./Tags/cursor.png";
import ImageOnKeyPress from "./ImageOnKeyPress";
import SideBar from "./SideBar";



class Raid extends React.Component {
    constructor(props) {
        super(props)

        this.state = {


        }

    }





    render() {
        return (

            <div className="raidContainer">
                {/*<ImageOnKeyPress />*/}
                {/* <div className="menuBar">

            </div> */}
                <div className="raidTags">
                    <Tags style={"raid--tg--basic"} size={"raid--tg-medium"}>


                    </Tags>
                </div>
                {/*<RaidMap />*/}
                <div className="raidMap">

                    <MapCanvas
                        s
                        className={"Canvas"}>
                    </MapCanvas>
                </div>
                <div className="raidUsers">
                    <Grid container
                        direction={"row"}
                        justifyContent="space-around"
                        alignItems="center"
                    >
                        <Grid>
                            <UserWheel onClick={() => { console.log("userWheel clicked") }}></UserWheel>
                        </Grid>
                        <Grid>
                            <UserWheel onClick={() => { console.log("userWheel clicked") }}></UserWheel>
                        </Grid>
                        <Grid>
                            <UserWheel onClick={() => { console.log("userWheel clicked") }}></UserWheel>
                        </Grid>
                        <Grid>

                            <UserWheel onClick={() => { console.log("userWheel clicked") }}></UserWheel>
                        </Grid>
                    </Grid>


                </div>
                <div className="raidExtra">wtf

                </div>
                <div className="SideBar">
                    <SideBar></SideBar>
                </div>


            </div>

        );
    }

}
export default Raid;