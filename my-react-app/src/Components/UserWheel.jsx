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
    const [playerNames, setPlayerNames] = useState([])
    var raidPath = localStorage.getItem("raidCol");
    var wheelName = localStorage.getItem("userNames");
    var playerNumber = localStorage.getItem("playerNumber");
    const [infoSnap, setInfoSnap] = useState(collection(firebase.firestore(), raidPath))
    const [userNamesSnap, setUserNamesSnap] = useState(firebase.firestore().collection("Raids").where(firebase.firestore.FieldPath.documentId(), "==", wheelName)) //collection(firebase.firestore(), 'Raids/'+ "zx14tOGVttsAzbLCCs0A" + '/playerStatus'))


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
        const uunsubscribe = onSnapshot(userNamesSnap, async snapshot => {
            console.log("HERE IS THE USERNAME SNAPSHOT");
            var doc = snapshot.docs[0].data();
            
            var playerName = [];
            Object.keys(doc).forEach((key, index) => {
                console.log(key)
                switch(String(key)){
                    case "p1_name":
                        if(player == 1){
                            playerName.push(doc.p1_name)
                            console.log(doc.p1_name);
                        }
                        
                        break;
                    case "p2_name":
                        if(player == 2){
                            playerName.push(doc.p2_name)
                        }
                        break;
                    case "p3_name":
                        if(player == 3){
                            playerName.push(doc.p3_name)
                        }
                        break;
                    case "p4_name":
                        if(player == 4){
                            playerName.push(doc.p4_name)
                        }
                        break;
                }
            })
            setPlayerNames(playerName)
            //console.log(doc[0].data())
       });

        return () => {
            unsubscribe()
            uunsubscribe()
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
            {playerNames.map( name => (
                <div className="playerName">{name}</div>
            ))
            }
            
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