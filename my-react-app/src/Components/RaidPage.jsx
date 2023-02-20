import React from "react";


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

import "./_RaidPage.css";
import "./_UserWheelGroup.css"

import { GARBpopUp } from "./GarbPopUp";

import { PopUpWindow } from "./PopUpComponent";
import { RaidMapDisplay } from "./RaidMapDisplay.jsx";



class Raid extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

            GarbState: false,
            garbClass: "GARBpopUpClosed",
            VisabilityState: true,
            Visability: "Hidden",




        }

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
                        <RaidMapDisplay PathVis={`RaidPath${this.state.Visability}`} map={Customs} />
                    </div>
                    <div className="raidUsers">
                        <div className="UserWheelGroup">
                            <div className="User1cont">

                                <UserWheel onClick={() => { this.popUpStateOpen().bind(this) }}></UserWheel>
                            </div>
                            <div className="User2cont">
                                <UserWheel onClick={() => { this.popUpStateOpen().bind(this) }}></UserWheel>
                            </div>
                            <div className="User3cont">
                                <UserWheel onClick={() => { this.popUpStateOpen().bind(this) }}></UserWheel>
                            </div>
                            <div className="User4cont">
                                <UserWheel onClick={() => { this.popUpStateOpen().bind(this) }}></UserWheel>
                            </div>

                        </div>


                    </div>
                    <div className="raidExtra" onClick={() =>{ this.togglePath().bind(this)}}>wtf

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