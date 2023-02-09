import React from "react";
import "./_RaidPage.css";
import RaidMap from "./RaidMap";
import MapCanvas from "./MapCanvas.js";
import { Tags } from "./RaidTags.jsx";
import { UserWheel } from "./UserWheel.jsx";
import { Grid } from "@mui/material";
import Customs from '../Images/custumsmapog.png';
import Factory from '../Images/factorymap.png';
import Interchange from '../Images/interchangemap.png';
import Labs from '../Images/labsmap.png';
import Lighthouse from '../Images/lighthousemap.png';
import Reserve from '../Images/reservemap.png';
import Shoreline from '../Images/shorelinemap.png';
import Woods from '../Images/woodsmap.png';

import SideBar from "./SideBar";

import { useDrag } from "react-use-gesture";

import "./_UserWheelGroup.css"
import { GARBpopUp } from "./GarbPopUp";

import { PopUpWindow } from "./PopUpComponent";

import cursor from "./Tags/cursor.png";
import ImageOnKeyPress from "./ImageOnKeyPress";
import MapHistory from "./MapHistory";
import { readKeybinds } from "../preferenceHandler";
import firebase from 'firebase/compat/app';
import RaidStateButton from "./raidStateButton";


class Raid extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

            GarbState: false,
            garbClass:"GARBpopUpClosed"


        }
        this.popUpStateOpen = this.popUpStateOpen.bind(this)

    }

    popUpStateOpen() {
       
            this.setState({
                GarbState:true,
                garbClass:"GARBpopUp"
            })



    }

    popUpStateClose = () =>{

        
        this.setState({
            GarbState:false,
            garbClass:"GARBpopUpClosed"
        })

    }
    







    render() {
        return (
            <>
            <div className={this.state.garbClass}>
                <PopUpWindow Window ={<GARBpopUp OnClick={()=> this.popUpStateClose()}></GARBpopUp>}></PopUpWindow>
                </div>

                <div className="raidContainer">
                    {/*<ImageOnKeyPress />*/}
                    {/* <div className="menuBar">

            </div> */}
                    <div className="raidTags">
                        <Tags style={"raid--tg--basic"} size={"raid--tg-medium"}>


                        </Tags>
                    </div>
                    <RaidMap />
                    {/* <div className="raidMap">

                        <MapCanvas
                            height={2142}
                            width={4097}
                            map={Customs}
                            className={"Canvas"}>
                        </MapCanvas>
                    </div> */}
                    <div className="raidUsers">
                        <div className="UserWheelGroup">
                            <div className="User1cont">

                                <UserWheel player="1" onClick={() => { this.popUpStateOpen() }}></UserWheel>
                            </div>
                            <div className="User2cont">
                                <UserWheel player="2" onClick={() => { this.popUpStateOpen() }}></UserWheel>
                            </div>
                            <div className="User3cont">
                                <UserWheel player="3" onClick={() => { this.popUpStateOpen() }}></UserWheel>
                            </div>
                            <div className="User4cont">
                                <UserWheel player="4" onClick={() => { this.popUpStateOpen() }}></UserWheel>
                            </div>

                        </div>


            </div>
            <div className="raidExtra">
            <MapHistory></MapHistory>
            <RaidStateButton/>
            </div>



                </div>

                
            </>

        );
    }

}
export default Raid;