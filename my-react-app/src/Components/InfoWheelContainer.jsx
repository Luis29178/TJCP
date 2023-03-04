import React, {useState, useEffect, useContext} from "react";
import "./_UserWheel.css"
import {onSnapshot} from 'firebase/firestore';
import { RaidContext } from "..";
import firebase from 'firebase/compat/app';
import { collection, doc } from 'firebase/firestore';
import { UserWheel } from "./UserWheel.jsx";

export const InfoWheelContainer = ({
    popUpStateOpen
}) => {

    var raidPath = localStorage.getItem("raidCol");
    var wheelName = localStorage.getItem("userNames");
    const [infoSnap, setInfoSnap] = useState(collection(firebase.firestore(), raidPath))
    const [userNamesSnap, setUserNamesSnap] = useState(firebase.firestore().collection("Raids").where(firebase.firestore.FieldPath.documentId(), "==", wheelName)) //collection(firebase.firestore(), 'Raids/'+ "zx14tOGVttsAzbLCCs0A" + '/playerStatus'))


    useEffect(() => {

        const unsubscribe = onSnapshot(infoSnap, async snapshot => {

             //var doc = snapshot.docs[player - 1];
             console.log("player info changed ");

             const customEvent = new CustomEvent('userInfoChanged', { detail: { snapshot : snapshot} });
      
             document.dispatchEvent(customEvent);
          //   console.log({id:doc.id, data:doc.data()})
           //  setPlayerInfo([{id:doc.id, data:doc.data()}])
        
        });

        const uunsubscribe = onSnapshot(userNamesSnap, async snapshot => {
            console.log("HERE IS THE USERNAME SNAPSHOT");

            const customEvent = new CustomEvent('userJoinedRaid', { detail: {snapshot : snapshot}});
      
            document.dispatchEvent(customEvent);
            //var doc = snapshot.docs[0].data();
        
       });

        return () => {
            unsubscribe()
            uunsubscribe()
        }
    },[])


    return                         <div className="UserWheelGroup">
    <div className="User1cont">

        <UserWheel player="1" onClick={() => { popUpStateOpen() }}></UserWheel>
    </div>
    <div className="User2cont">
        <UserWheel player="2" onClick={() => { popUpStateOpen() }}></UserWheel>
    </div>
    <div className="User3cont">
        <UserWheel player="3" onClick={() => { popUpStateOpen() }}></UserWheel>
    </div>
    <div className="User4cont">
        <UserWheel player="4" onClick={() => { popUpStateOpen() }}></UserWheel>
    </div>

</div>
}