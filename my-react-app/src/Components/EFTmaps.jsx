import React from "react";
import { MapDisplay } from "./MapDisplay";
import  DropDownBar  from "./DropDownBar_improved";
import './_EFTmaps.css';
import { MapList } from "./MapList"
import { Button } from "./Button";
import Customs from '../Images/custumsmapog.png';
import Factory from '../Images/factorymap.png';
import Interchange from '../Images/interchangemap.png';
import Labs from '../Images/labsmap.png';
import Lighthouse from '../Images/lighthousemap.png';
import Reserve from '../Images/reservemap.png';
import Shoreline from '../Images/shorelinemap.png';
import Woods from '../Images/woodsmap.png';
import { Grid } from "@mui/material";
import { Buttonnew } from "./newButton";
import InputBar from "./InputBar.jsx"
import RaidController from "../raidController";

class EFTmapsTest extends React.Component {

    //RaidController = React.useContext(RaidContext); 

    state = {
        map: '',
        userName: ""
    }

    Raid = new RaidController();
    


    mapChange(_map) {
        var newMap = "";
        switch (_map) {
            case 1:
                newMap = Customs;
                break;
            case 2:
                newMap = Factory;
                break;
            case 3:
                newMap = Interchange;
                break;
            case 4:
                newMap = Labs;
                break;
            case 5:
                newMap = Lighthouse;
                break;
            case 6:
                newMap = Reserve;
                break;
            case 7:
                newMap = Shoreline;

                break;
            case 8:
                newMap = Woods;

                break;
            default :
            newMap = ""

                break;
        }
        this.setState({map:newMap})
        window.localStorage.setItem("raidMap", newMap )

    }

    handleNameChange = (e) =>{
        this.setState({userName: e.target.value})
        console.log(e.target.value)
    }

    render() {
        return (
            <>

            <div className="eftpage">

                <div className="eftxbtn">
                    <Button onClick={() => { window.location.href = "/" }}
                        type="button"
                        buttonStyle="btn--x--basic"
                        size="btn--x">{"<"}</Button>
                </div>



                <div className="efttitle">Maps</div>




                <div className="eftmapList">
                    <MapList style={"ls--map--display"} func={this.mapChange.bind(this)}></MapList>
                </div>


                <div className="eftmapDisplay">
                    <MapDisplay mdstyle={"map--menu--display"} Imgsorce={this.state.map} ></MapDisplay>
                </div>


                <div className="eftDropDown">
                    <DropDownBar ddstyle={"dd--eft--basic"}></DropDownBar>
                </div>

                
            </div>

            <div className="bottomF">

                
            <div className="Prompt">Pick your username</div>

            <InputBar handleChange={this.handleNameChange}></InputBar>

            
            <Buttonnew borderStyle="join" onClick={(val)=> {this.Raid.createRaid(this.state.userName, this.state.map)}}>Start Raid</Buttonnew>
            </div>

            

        </>
    
        );



    }





}

export default EFTmapsTest;