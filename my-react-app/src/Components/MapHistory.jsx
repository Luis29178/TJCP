import React, {useState, useEffect, useContext} from "react";
import {onSnapshot} from 'firebase/firestore';
import { RaidContext } from "..";
import firebase from 'firebase/compat/app';
import { collection, query, orderBy } from 'firebase/firestore';

function MapHistory(){

    const RaidController = React.useContext(RaidContext); 
    var mapStateDb = localStorage.getItem("mapState");
    var playerNumber = localStorage.getItem("playerNumber");
    
    const [infoSnap, setInfoSnap] = useState(query(collection(firebase.firestore(), mapStateDb), orderBy("timestamp", 'desc')))
    const [mapHist, setMapHist] = useState([])

    useEffect(() => {

        document.addEventListener('placeTagOnMap', function({ detail }) {
            console.log("Place tag on map event received");
            placeTag(detail.tag, detail.x, detail.y)
        
        });

        const unsubscribe = onSnapshot(infoSnap, async snapshot => {

             var doc = snapshot.docs;
             setMapHist(doc)
             //doc.map(info => console.log(info.id))
             const event = new CustomEvent('mapStateUpdated', {detail: {mapState : doc}});
             document.dispatchEvent(event);

             //console.log(doc[0].data().player)


        
        });
        return () => {
            unsubscribe()
        }
    },[])

    function writeType(mark){
        var string ="";
        switch(mark.type){
            case "tag":
                string = "Placed tag "+ mark.tag //+ " at: " + mark.pos
                break;
            case "line":
                string = "Drew a line";
                console.log("Line drawn from:"+ mark.linePath);
                break;

        }
        
        return string;
    }

    function placeTag(tagID, x, y){

        RaidController.placeTagOnMap(tagID,`${x},${y}`)
    }

    function placePath(){
        RaidController.placePathOnMap(["200,200", "202,203"])
    }

    

    return (<div id="hist" style={{overflowY: 'scroll',height: "300px"}}> 
        <div>Join Code: {window.localStorage.getItem("joinCode")}</div>
        {mapHist.map(hist =>(
            <div key={hist.id}>
                Player {hist.data().player} { writeType(hist.data())}
            </div>
        ))}
    </div>);

}

export default MapHistory;