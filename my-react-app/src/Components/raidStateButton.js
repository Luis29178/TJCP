import React, { useEffect, useState } from "react";
import { RaidContext } from "..";
import { Buttonnew } from "./newButton";

export default function RaidStateButton(){

    const RaidController = React.useContext(RaidContext); 

    const [raidState, setRaidState] = useState(window.localStorage.getItem("raidState"))

    var isRaidLeader = window.localStorage.getItem("uid") == window.localStorage.getItem("raidLeader")
    console.log(isRaidLeader);

    useEffect(()=>{
        document.addEventListener('raidStateChanged', function({ detail }) {
            
            setRaidState(detail.newState)
            window.localStorage.setItem("raidState", detail.newState)
            console.log('raid state change received');
          })
    },[])

    function displayRaidState(state){
        var currentStateText = ""
        switch(state){
            case "0":
                currentStateText = isRaidLeader? "Start Raid" : "Waiting"
                break;
            case "1":
                currentStateText = isRaidLeader? "End Raid" :"In Progress"

        }
        return currentStateText
    }

    function changeRaidState(){
        if(raidState == "1" && isRaidLeader){
            RaidController.changeRaidState("0")
        }else if(raidState == "0" && isRaidLeader){
            RaidController.changeRaidState("1")
        }
        
    }

    return (
        <div style={{display: "block"}}>
<Buttonnew borderStyle="join" onClick={changeRaidState}>{displayRaidState(raidState)}</Buttonnew>
        </div>
        
        
            )
}