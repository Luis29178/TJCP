import React, { useEffect, useState } from "react";
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
import MapHistory from "./MapHistory";
import { readKeybinds } from "../preferenceHandler";
import firebase from 'firebase/compat/app';

class Raid extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            keyBindArray: [],
            showKeys: false
        }

        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
            
            var data = readKeybinds().then((snapshot) => {
                console.log(snapshot.data().keyBinds)
                var keyBinds = snapshot.data()
                this.setState({keyBindArray: [keyBinds.tag1, keyBinds.tag2, keyBinds.tag3, keyBinds.tag4,keyBinds.tag5,keyBinds.tag6,keyBinds.tag7,keyBinds.tag8,keyBinds.tag9] })
                this.setState({showKeys: true})
              }).catch((e) => e)
          });

    }

    render() {
           return  <div className="raidContainer">
                {<ImageOnKeyPress/>}

                <div  className="raidTags">
                    <div className="raidTags--tags">

                    {this.state.showKeys && <Tags  style={"raid--tg--basic"} size={"raid--tg-medium"} keybinds={this.state.keyBindArray}>
                    </Tags>}
                    
                    </div>
                </div>
            
                <RaidMap/>
            {/* <div className="raidMap">
            
                <MapCanvas
                    width={1000}
                    height={500}
                    className={"Canvas"}>
                </MapCanvas>
            </div> */}
            <div className="raidUsers">
                <Grid container 
                direction={"row"}
                justifyContent="space-around"
                alignItems="center"
                >
                    <Grid>
                        <animated.div {...bindWheelPos1()}style={{x: wheelPos1.x, y: wheelPos1.y}}>
                        <UserWheel player={1} onClick={() =>  { console.log("userWheel clicked") }}></UserWheel>
                        </animated.div>
                    </Grid>
                    <Grid>
                    <animated.div {...bindWheelPos2()}style={{x: wheelPos2.x, y: wheelPos2.y}}>
                        <UserWheel player={2} onClick={() =>  { console.log("userWheel clicked") }}></UserWheel>
                        </animated.div>                    </Grid>
                    <Grid>
                    <animated.div {...bindWheelPos3()}style={{x: wheelPos3.x, y: wheelPos3.y}}>
                        <UserWheel player={3} onClick={() =>  { console.log("userWheel clicked") }}></UserWheel>
                        </animated.div>                    </Grid>
                    <Grid>
                    <animated.div {...bindWheelPos4()}style={{x: wheelPos4.x, y: wheelPos4.y}}>
                        <UserWheel player={4} onClick={() =>  { console.log("userWheel clicked") }}></UserWheel>
                        </animated.div>                    </Grid>
                </Grid>


            </div>
            <div className="raidExtra">
            <MapHistory></MapHistory>
            </div>


        </div>

}
}

export default Raid;