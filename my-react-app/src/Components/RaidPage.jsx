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
                {/* <div className="menuBar">
    
                </div> */}
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
    
        
    }

}
export default Raid;