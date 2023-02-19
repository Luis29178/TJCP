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
import { Buttonnew } from "./newButton";
import InputBar from "./InputBar.jsx"
import RaidController from "../raidController";
import firebase from "firebase/compat/app";

class EFTmapsTest extends React.Component {

    //RaidController = React.useContext(RaidContext); 

    state = {
        map: 'Customs',
        userName: "",
        PathVis: "pathImageDisplayVisable",
        pathimgURL: "",
        pathList: [],
        mapName: "Customs"
        

        
        
    }

    Raid = new RaidController();

    async getList () {
        const firestore = firebase.firestore();
        const userId = window.localStorage.getItem('uid')
        var tempArr = [];
        
        //todo: change this to use user id
        await firestore.collection(`Users/pa0GJM08JMhOxkEFPiHt8h8X0G62/Paths/${this.state.mapName}/Saved`).get().then((querySnapshot) => {
            querySnapshot.forEach(doc => {
                
                
                    tempArr.push({
                        id:doc.id,
                        url: doc.data().url
                    });
            });
            
        });
        console.log(`before ${this.state.pathList}`)
        this.setState({ pathList: tempArr })
        console.log(`after ${this.state.pathList}`)
        



    }
    
    


    async mapChange(_map) {
        var newMap = "";
        switch (_map) {
            case 1:
                newMap = Customs;
                this.setState({
                    mapName: "Customs",
                    pathList: [],

                });
                break;
            case 2:
                this.setState({
                    mapName: "Factory",
                    pathList: [],
   
                });
                newMap = Factory;
                break;
            case 3:
                this.setState({
                    mapName: "Interchange",
                    pathList: [],

                });
                newMap = Interchange;
                break;
            case 4:
                this.setState({
                    mapName: "Labs",
                    pathList: [],

                });
                newMap = Labs;
                break;
            case 5:
                this.setState({
                    mapName: "Lighthouse",
                    pathList: [],

                });
                newMap = Lighthouse;
                break;
            case 6:
                this.setState({
                    mapName: "Reserve",
                    pathList: [],
                });
                newMap = Reserve;
                break;
            case 7:
                this.setState({
                    mapName: "Shoreline",
                    pathList: [],
                });
                newMap = Shoreline;

                break;
            case 8:
                this.setState({
                    mapName: "Woods",
                    pathList: [],
                });
                newMap = Woods;

                break;
            default :
            newMap = ""
                break;
        }

        
        
        await this.getList()
        await this.getList()

        this.setState({
            map:newMap,
            PathVis:"pathImageDisplay",
        })
        

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
                //#region TopBar

                <div className="eftxbtn">
                    <Button onClick={() => { window.location.href = "/" }}
                        type="button"
                        buttonStyle="btn--x--basic"
                        size="btn--x">{"<"}</Button>
                </div>

                <div className="efttitle">Maps</div>

                
                //#endregion

                //#region  MapDisplay
                <div className="eftmapList">
                    <MapList style={"ls--map--display"} func={this.mapChange.bind(this)} ></MapList>
                </div>
                <div className="eftmapDisplay">
                    <MapDisplay mdstyle={"map--menu--display"} Imgsorce={this.state.map} PathVis={this.state.PathVis} pathimgURL={this.state.pathimgURL}></MapDisplay>
                </div>
                //#endregion

                //#region DropDownBar
                <div className="eftDropDown">
                    <DropDownBar ddstyle={"dd--eft--basic"} map= {this.state.map} baseParent={this} PathList={this.state.pathList}></DropDownBar>
                </div>
                //#endregion

                
            </div>

            //#region Footer
            <div className="bottomF">

                
            <div className="Prompt">Pick your username</div>

            <InputBar handleChange={this.handleNameChange}></InputBar>

            
            <Buttonnew borderStyle="join" onClick={(val)=> {
                this.Raid.createRaid(
                    this.state.userName,
                    this.state.map,
                    this.state.pathimgURL,
                )}}>Start Raid</Buttonnew>
            </div>
            //#endregion

            

        </>
    
        );



    }





}

export default EFTmapsTest;