import React from "react";
import "./_RaidPage.css"
import MapCanvas from "./MapCanvas.js"
import { Tags } from "./RaidTags.jsx"
import UserInfoBar from "./UserInfoBar"
import { UserWheel } from "./UserWheel.jsx"
import { Grid } from "@mui/material";


function Raid() {
    return (

        <div className="raidContainer">

            <div className="menuBar">

            </div>
            <div  className="raidTags">
                <div className="raidTags--tags">
                <Tags  style={"raid--tg--basic"}
                    size={"raid--tg-medium"}>

                </Tags>
                </div>

            </div>
            <div className="raidMap">
                <MapCanvas
                    width={1000}
                    height={500}
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
                        <UserWheel onClick={() =>  { console.log("userWheel clicked") }}></UserWheel>
                    </Grid>
                    <Grid>
                        <UserWheel onClick={() =>  { console.log("userWheel clicked") }}></UserWheel>
                    </Grid>
                    <Grid>
                        <UserWheel onClick={() =>  { console.log("userWheel clicked") }}></UserWheel>
                    </Grid>
                    <Grid>
                        <UserWheel onClick={() =>  { console.log("userWheel clicked") }}></UserWheel>
                    </Grid>
                </Grid>


            </div>
            <div className="raidExtra">wtf

            </div>


        </div>

    );

}
export default Raid;