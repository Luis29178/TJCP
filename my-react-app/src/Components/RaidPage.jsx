import React from "react";


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
import { InfoWheelContainer } from './InfoWheelContainer.jsx'

import SideBar from "./SideBar";


import "./_RaidPage.css";
import "./_UserWheelGroup.css"

import { GARBpopUp } from "./GarbPopUp";

import { PopUpWindow } from "./PopUpComponent";
import { RaidMapDisplay } from "./RaidMapDisplay.jsx";

import cursor from "./Tags/cursor.png";
import ImageOnKeyPress from "./ImageOnKeyPress";
import MapHistory from "./MapHistory";
import { readKeybinds, createKeyBinds } from "../preferenceHandler";
import firebase from 'firebase/compat/app';
import RaidStateButton from "./raidStateButton";
import { RaidTools } from "./RaidTool";
import { ZoomableRaidMap } from "./RaidMapZoomableContainer";
import PrismaZoom from "react-prismazoom";
import RaidMap from "./RaidMap.jsx";




class Raid extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

            GarbState: false,
            garbClass: "GARBpopUpClosed",
            Visability: "Visable",
            keyBindArray: [],
            showKeys: false,
            zooming: true,
            drawing: false


        }
        this.popUpStateOpen = this.popUpStateOpen.bind(this)


        if (localStorage.getItem("isAnon") == "false") {
            const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {

                var data = readKeybinds().then((snapshot) => {
                    if (snapshot.data() == undefined) {
                        console.log("NO USER SNAPSHOT");
                        createKeyBinds()

                        this.setState({ keyBindArray: ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"] })

                        this.setState({ showKeys: true })

                    } else {
                        console.log(snapshot.data())
                        var keyBinds = snapshot.data()
                        var keyArray = [keyBinds.tag1, keyBinds.tag2, keyBinds.tag3, keyBinds.tag4, keyBinds.tag5, keyBinds.tag6, keyBinds.tag7, keyBinds.tag8, keyBinds.tag9];
                        console.log(keyArray);
                        this.setState({ keyBindArray: keyArray })
                        this.setState({ showKeys: true })
                    }

                }).catch((e) => e)
            });
        } else {
            let anonKeybinds = JSON.parse(localStorage.getItem('AnonKeybinds'))
            console.log(anonKeybinds);
            this.setState({ keyBindArray: anonKeybinds })

            this.setState({ showKeys: true })
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
    toggleTools = () => {

        if (this.state.drawing === true) {


            this.setState({
                zooming: true,
                drawing: false
            })
        }
        else{
            this.setState({
                zooming: false,
                drawing: true
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

                        {this.state.showKeys && <Tags style={"raid--tg--basic"} size={"raid--tg-medium"} keybinds={this.state.keyBindArray}>

                        </Tags>}

                        {localStorage.getItem("isAnon") == "true" && <Tags style={"raid--tg--basic"} size={"raid--tg-medium"} keybinds={JSON.parse(localStorage.getItem('AnonKeybinds'))}>

                        </Tags>}


                    </div>
                    <div id="mapRef" className="raidMap">
                        <PrismaZoom
                            className="ZoomContainer"
                            style={{
                                height: 2142,
                                width: 4097

                            }}
                            allowPan={this.state.zooming}
                            allowWheel={this.state.zooming}
                            allowZoom={this.state.zooming}
                            allowTouchEvents={this.state.drawing}

                            onPanChange={() => {
                                console.log(this.state.zooming);
                            }}

                        >
                            <div style={{
                                height: 2142,
                                width: 4097

                            }}>

                                <RaidMap
                                    drawing={this.state.drawing} PathVis={`RaidPath${this.state.Visability}`} />
                            </div>


                        </PrismaZoom>

                    </div>

                    <div className="raidUsers">

                        <InfoWheelContainer popUpStateOpen={this.popUpStateOpen}></InfoWheelContainer>



                    </div>
                    <div className="raidExtra">
                        <RaidTools
                            tool={<>
                                <div>
                                    <input type="checkbox"
                                        checked={this.state.zooming}
                                        onChange={this.toggleTools.bind(this)} />
                                    {`\tZooming`}
                                </div>

                            </>}>
                        </RaidTools>
                        <div style={{ display: "none" }}><MapHistory /></div>
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