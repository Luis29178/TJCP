import React from "react";

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
import {InfoWheelContainer} from './InfoWheelContainer.jsx'

import SideBar from "./SideBar";

import "./_RaidPage.css";
import "./_UserWheelGroup.css"

import { GARBpopUp } from "./GarbPopUp";

import { PopUpWindow } from "./PopUpComponent";
import { RaidMapDisplay } from "./RaidMapDisplay.jsx";

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
            garbClass: "GARBpopUpClosed",
            Visability: "Visable",




        }
        this.popUpStateOpen = this.popUpStateOpen.bind(this)

    }

    popUpStateOpen() {

        this.setState({
            GarbState: true,
            garbClass: "GARBpopUp"
        })



    }

    popUpStateClose = () => {


        this.setState({
            GarbState: false,
            garbClass: "GARBpopUpClosed"
        })

    }

    togglePath = () =>{
        if(this.state.Visability === "Visable"){
            this.setState({
                Visability: "Hidden"
            })
        }else{

            this.setState({
                Visability: "Visable"
            })
        }

    }








    render() {
        return (
            <>
                <div className={this.state.garbClass}>
                    <PopUpWindow Window={<GARBpopUp OnClick={() => this.popUpStateClose()}></GARBpopUp>}></PopUpWindow>
                </div>

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
                        <RaidMap PathVis={`RaidPath${this.state.Visability}`} />
                    </div>
                    <div className="raidUsers">

                        <InfoWheelContainer popUpStateOpen={this.popUpStateOpen}></InfoWheelContainer>



                    </div>
                    <div className="raidExtra">
                        <MapHistory></MapHistory>
                        <RaidStateButton />
                    </div>
                    <div className="SideBar">
                        <SideBar></SideBar>
                    </div>


                </div>


            </>

        );
    }

}
export default Raid;