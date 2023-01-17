import React, {useState, useEffect, useContext} from "react";
import "./_UserWheel.css"
import {onSnapshot} from 'firebase/firestore';
import { RaidContext } from "..";
import firebase from 'firebase/compat/app';
import { collection, doc } from 'firebase/firestore';


export const UserWheel = ({
    onClick,
    GARBarr,
    User,
    player

}) => {

    const RaidController = React.useContext(RaidContext); 
    const [playerInfo, setPlayerInfo] = useState([])
    var raidPath = localStorage.getItem("raidCol");
    var playerNumber = localStorage.getItem("playerNumber");
    const [infoSnap, setInfoSnap] = useState(collection(firebase.firestore(), raidPath)) //collection(firebase.firestore(), 'Raids/'+ "zx14tOGVttsAzbLCCs0A" + '/playerStatus'))


    useEffect(() => {

        document.getElementById('player' + player).addEventListener('click', function(e){
            if(player == playerNumber){
                RaidController.setPlayerInfo({armor:1});
                console.log("Changed info for Player " + playerNumber)
            }
            
        })
        const unsubscribe = onSnapshot(infoSnap, async snapshot => {

             var doc = snapshot.docs[player - 1];
             console.log({id:doc.id, data:doc.data()})
             setPlayerInfo([{id:doc.id, data:doc.data()}])
        
        });
        return () => {
            unsubscribe()
        }
    },[])

    function parseStatus(statusInfo){
        let status = "lowStatus";

        switch(String(statusInfo)){
            case "1":
                status = "outStatus"
                break;
            case "2":
                status = "lowStatus"
                break;
            case "3":
                status = "fullStatus"
                break;
        }

        return status;
    }


    return (
        <button onClick={onClick}>
            <div className="ContainerBorder">
                <div className="Container">
                    <div id={"player" + player} className={player == playerNumber? "MyCenterDot" : "CenterDot"}></div>
                    <div className="Sectioner"></div>
                    {
                        playerInfo.map(info => (
                            <div key="status">
                                <div className={"Health " + parseStatus(info.data.health)}></div>
                                
                                <div className={"Ammo " + parseStatus(info.data.ammo)}></div>
                                <div className={"Armor " + parseStatus(info.data.armor)}></div>
                            </div>
                        ))
                    }
                    
                </div>

            </div>
        </button>
    );


};