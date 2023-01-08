import React, {useState, useEffect} from "react";
import "./_UserWheel.css"
import {onSnapshot} from 'firebase/firestore';
import { getPlayerStatusCollection} from '../preferenceHandler'

export const UserWheel = ({
    onClick,
    GARBarr,
    User,
    player

}) => {

    const [playerInfo, setPlayerInfo] = useState([])


    useEffect(() => {
        const unsubscribe = onSnapshot(getPlayerStatusCollection(), async snapshot => {

             var doc = snapshot.docs[player - 1];
             console.log(doc.id)
             setPlayerInfo([{id:doc.id, data:doc.data()}])
        
        });
        return () => {
            unsubscribe()
        }
    },[])

    function parseStatus(statusInfo){
        let status = "lowStatus";

        switch(statusInfo){
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
                    <div className="CenterDot"></div>
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