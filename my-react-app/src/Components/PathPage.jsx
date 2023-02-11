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



import {PathMenuBtns} from "./PathsBtnGrp.jsx"




class PathPage extends React.Component {
    constructor(props) {
        super(props)      
        this.state = {
            height: 1200,
            width: "auto",
            map: "",
        }


    }
    
    


    UploadPath = () => {

        


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
                            id={"pathMap"}
                            height={2142}
                            width={4097}
                            map={Customs}
                            className={"Canvas"}>
                        </MapCanvas>
                    </div>
                    <div className="pathExtra">
                        <RaidTools tool={<Tags style={"raid--tg--basic"} size={"raid--tg-medium"}>


                        </Tags>}>

                        </RaidTools>
                    </div>
                    <div className="pathSideBar">
                        <SideBar
                            title={"Path Creator"}
                            info={<>
                                <div className="PathMenutitle">Path Name: </div>
                                <input id="PathName" className="PathNameInput"></input>
                                <div id="PathUploadProgress" className="UploadProgress"></div>
                            </>}
                            btnGroup={<></>
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


