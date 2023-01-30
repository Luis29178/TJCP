import MapCanvas from "./MapCanvas.js"
import { Tags } from "./RaidTags.jsx"
import React from "react";
import SideBar from "./SideBar.jsx";
import Customs from '../Images/custumsmapog.png';
import Factory from '../Images/factorymap.png';
import Interchange from '../Images/interchangemap.png';
import Labs from '../Images/labsmap.png';
import Lighthouse from '../Images/lighthousemap.png';
import Reserve from '../Images/reservemap.png';
import Shoreline from '../Images/shorelinemap.png';
import Woods from '../Images/woodsmap.png';
import "./_PathPage.css"
import { RaidTools } from "./RaidTool.jsx";
import { Buttonnew } from "./newButton.jsx";




class PathPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            height: 1200,
            width: "auto",
            map: ""
        }






    }







    render() {




        return (
            <>
                <div className="pathContainer">
                    {/*<ImageOnKeyPress />*/}
                    {/* <div className="menuBar">

            </div> */}
                    <div className="pathTags">
                        <Tags style={"raid--tg--basic"} size={"raid--tg-medium"}>


                        </Tags>
                    </div>
                    {/*<RaidMap />*/}
                    <div className="pathMap">
                        <MapCanvas
                            height={2142}
                            width={4097}
                            map={Customs}
                            className={"Canvas"}>
                        </MapCanvas>
                    </div>
                    <div className="pathExtra">
                        <RaidTools>

                        </RaidTools>
                    </div>
                    <div className="pathSideBar">
                        <SideBar
                            title={"Path Creator"}
                            info={"Path Name: Smaple"}
                            btnGroup={<>

                                <div className="btn1">
                                    <Buttonnew borderStyle={"ttRaid"} onClick={() => { console.log("to Raid") }}> Take To Raid</Buttonnew>
                                </div>
                                <div className="btn2">
                                    <Buttonnew borderStyle={"save"} onClick={() => { console.log("save") }}> Save</Buttonnew>
                                </div>
                                <div className="btn3">
                                    <Buttonnew borderStyle={"discard"} onClick={() => { console.log("discard") }}> Discard</Buttonnew>
                                </div>
                            </>
                            }>

                        </SideBar>
                    </div>


                </div>

            </>
        );
    }
    componentDidMount() {
        var elmnt = document.getElementsByClassName("pathMap")[0];
        console.log(elmnt.offsetHeight);
        console.log(elmnt.offsetWidth);



        this.setState({
            height: elmnt.offsetHeight,
            width: elmnt.offsetWidth
        })

        // switch (this.props.map) {
        //     case 1:
        //         this.setState({ map: Customs });
        //         break;
        //     case 2:
        //         this.setState({ map: Factory });
        //         break;
        //     case 3:
        //         this.setState({ map: Interchange });
        //         break;
        //     case 4:
        //         this.setState({ map: Labs });
        //         break;
        //     case 5:
        //         this.setState({ map: Lighthouse });
        //         break;
        //     case 6:
        //         this.setState({ map: Reserve });
        //         break;
        //     case 7:
        //         this.setState({ map: Shoreline });
        //         break;
        //     case 8:
        //         this.setState({ map: Woods });
        //         break;
        //     default:
        //         this.setState({ map: '' })
        //         break;
        // }


        console.log(this.props.map);
    }




}
export default PathPage;


