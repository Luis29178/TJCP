import React from "react";
import "./_RaidPage.css"
import MapCanvas  from "./MapCanvas.js"
import { Tags } from "./RaidTags"
import  UserInfoBar  from "./UserInfoBar"
import  {UserWheel}  from "./UserWheel.jsx"


function Raid() {
    return (
        
            <div className="raidContainer">

                <div className="menuBar">

                </div>
                <div className="raidTags">
                    <Tags style={"raid--tg--basic"}
                          size={"raid--tg-medium"}>

                    </Tags>

                </div>
                <div className="raidMap">
                <MapCanvas 
                    width={800}
                    height ={425}
                    className = {"Canvas"}>                       
                    </MapCanvas>
                </div>
                <div className="raidUsers">
                <UserWheel></UserWheel>

                </div>
                <div className="raidExtra">
                    <div className="tmp">
                        replace with Extras box
                    </div>

                </div>


            </div>
        
    );

}
export default Raid;