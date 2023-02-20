import React from "react";

import Customs from '../Images/custumsmapog.png';
import Factory from '../Images/factorymap.png';
import Interchange from '../Images/interchangemap.png';
import Labs from '../Images/labsmap.png';
import Lighthouse from '../Images/lighthousemap.png';
import Reserve from '../Images/reservemap.png';
import Shoreline from '../Images/shorelinemap.png';
import Woods from '../Images/woodsmap.png';


import { UserWheel } from "./UserWheel.jsx";
import { Buttonnew } from "./newButton";
import { RaidMapDisplay } from "./RaidMapDisplay.jsx";
import { SpectatorSideBar } from "./SpectatorSideBar.jsx";
import { ArrowGen } from "./ArrowComponentGen.jsx";
import { PopUpWindow } from "./PopUpComponent";

import "./_SpectatorRaidView.css";





export class SpectatorView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Visability: "Hidden",
            SideBarVis: "Hidden"
        }
    }

    togglePath = () => {
        if (this.state.Visability === "Visable") {
            this.setState({
                Visability: "Hidden"
            })
        } else {

            this.setState({
                Visability: "Visable"
            })
        }

    }

    SpectatorSideBarToggle = () => {

        if (this.state.SideBarVis === "Visable") {
            this.setState({
                SideBarVis: "Hidden"
            })
        } else {

            this.setState({
                SideBarVis: "Visable"
            })
        }
        console.log(this.state.SideBarVis)


    }





    render() {


        return (
            <>
                <div className={`SpectatorSideBarpopUp${this.state.SideBarVis}`}>
                    <PopUpWindow Window={<SpectatorSideBar MinMiz={() =>{this.SpectatorSideBarToggle().bind(this)}}></SpectatorSideBar>}></PopUpWindow>
                </div>

                <div className="SpectatorContainer">

                    <div className="SpectatorraidMap">
                        <RaidMapDisplay PathVis={`RaidPath${this.state.Visability}`} map={Customs} />
                    </div>
                    <div className="SpectatorraidUsers">
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

                    <div className="SpectatorSideBar">
                        <Buttonnew borderStyle='SpectatorSideBarButton' onClick={() => { this.SpectatorSideBarToggle().bind(this) }}>{<>

                            <ArrowGen></ArrowGen>

                        </>}</Buttonnew>
                    </div>



                </div>


            </>

        );
    }


}