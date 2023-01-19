import React from "react";
import { MapDisplay } from "./MapDisplay";
import { DropDown } from "./DropDownBar";
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
        map:'',
        userName: ""
    }

    Raid = new RaidController();
    

    mapChange(_map) {
        switch (_map) {
            case 1:
                this.setState({map: Customs});
                break;
            case 2:
                this.setState({map: Factory });
                break;
            case 3:
                this.setState({map: Interchange });
                break;
            case 4:
                this.setState({map: Labs });
                break;
            case 5:
                this.setState({map: Lighthouse});
                break;
            case 6:
                this.setState({map: Reserve});
                break;
            case 7:
                this.setState({map: Shoreline});
                break;
            case 8:
                this.setState({map: Woods});
                break;
            default :
                this.setState({map:''})
                break;
        }


    }

    handleNameChange = (e) =>{
        this.setState({userName: e.target.value})
        console.log(e.target.value)
    }

    render(){
        return (

            <div className="eftpage">

            <div className="title">
                <div className="eftxbtn">
                    <Button onClick={() => { window.location.href = "/" }}
                        type="button"
                        buttonStyle="btn--x--basic"
                        size="btn--x">{"<"}</Button>
                </div>
                <div className="efttitle">Maps</div>
            </div>

            
            
            <div className="eftmapList">
                <MapList style={"ls--map--display"} func={this.mapChange.bind(this)}></MapList>
            </div>
            

            <div className="eftmapDisplay">
                <MapDisplay mdstyle={"map--menu--display"} Imgsorce={this.state.map} ></MapDisplay>
            </div>

            
            <div className="eftDropDown">
                <DropDown ddstyle={"dd--eft--basic"}></DropDown>
                
            </div>

            <div className="bottomF">
            <div className="Prompt">Pick your username</div>

            <InputBar handleChange={this.handleNameChange}></InputBar>

            
            <Buttonnew borderStyle="join" onClick={(val)=> {this.Raid.createRaid(this.state.userName, this.state.map)}}>Start Raid</Buttonnew>
            </div>

            

        </div>
    
        );



    }





}

export default EFTmapsTest;