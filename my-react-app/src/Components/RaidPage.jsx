import React from "react";
import "./_RaidPage.css";
import MapCanvas from "./MapCanvas.js";
import { Tags } from "./RaidTags.jsx";
import UserInfoBar from "./UserInfoBar";
import { UserWheel } from "./UserWheel.jsx";
import { Grid } from "@mui/material";
import {useSpring, animated} from 'react-spring'
import {useDrag} from 'react-use-gesture'
import RaidMap from "./RaidMap";

import cursor from "./Tags/cursor.png";
import ImageOnKeyPress from "./ImageOnKeyPress";


function Raid() {

    const wheelPos1 = useSpring({x: 0, y: 0});
    const bindWheelPos1 = useDrag((params) => {
        wheelPos1.x.set(params.offset[0]);
        wheelPos1.y.set(params.offset[1]);
    })

    const wheelPos2 = useSpring({x: 0, y: 0});
    const bindWheelPos2 = useDrag((params) => {
        wheelPos2.x.set(params.offset[0]);
        wheelPos2.y.set(params.offset[1]);
    })

    const wheelPos3 = useSpring({x: 0, y: 0});
    const bindWheelPos3 = useDrag((params) => {
        wheelPos3.x.set(params.offset[0]);
        wheelPos3.y.set(params.offset[1]);
    })

    const wheelPos4 = useSpring({x: 0, y: 0});
    const bindWheelPos4 = useDrag((params) => {
        wheelPos4.x.set(params.offset[0]);
        wheelPos4.y.set(params.offset[1]);
    })

    return (

        <div className="raidContainer">
            {<ImageOnKeyPress/>}
            {/* <div className="menuBar">

            </div> */}
            <div  className="raidTags">
                <div className="raidTags--tags">
                <Tags  style={"raid--tg--basic"} size={"raid--tg-medium"}>
                    
                
                </Tags>
                
                </div>
            </div>
                <RaidMap/>
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
                        <animated.div {...bindWheelPos1()}style={{x: wheelPos1.x, y: wheelPos1.y}}>
                        <UserWheel onClick={() =>  { console.log("userWheel clicked") }}></UserWheel>
                        </animated.div>
                    </Grid>
                    <Grid>
                    <animated.div {...bindWheelPos2()}style={{x: wheelPos2.x, y: wheelPos2.y}}>
                        <UserWheel onClick={() =>  { console.log("userWheel clicked") }}></UserWheel>
                        </animated.div>                    </Grid>
                    <Grid>
                    <animated.div {...bindWheelPos3()}style={{x: wheelPos3.x, y: wheelPos3.y}}>
                        <UserWheel onClick={() =>  { console.log("userWheel clicked") }}></UserWheel>
                        </animated.div>                    </Grid>
                    <Grid>
                    <animated.div {...bindWheelPos4()}style={{x: wheelPos4.x, y: wheelPos4.y}}>
                        <UserWheel onClick={() =>  { console.log("userWheel clicked") }}></UserWheel>
                        </animated.div>                    </Grid>
                </Grid>


            </div>
            <div className="raidExtra">wtf

            </div>


        </div>

    );

}
export default Raid;