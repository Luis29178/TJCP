//import firebase from 'firebase';
import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { collection, doc } from 'firebase/firestore';
import { renderMatches } from 'react-router-dom';
import { create } from '@mui/material/styles/createTransitions';


export default class RaidController {


  constructor(props){
    var user = firebase.auth().currentUser;
    //super(props);
    this.state = {
      config: {
        apiKey: "AIzaSyC4hztlkCki_2pnq93Rgf7cgncHC1V61N0",
        authDomain: "capstone-eeab2.firebaseapp.com",
        projectId: "capstone-eeab2",
        storageBucket: "capstone-eeab2.appspot.com",
        messagingSenderId: "779758566575",
        appId: "1:779758566575:web:fa8755a005fed7dd23a85a",
        measurementId: "G-55B1P13PP9"
      
      },
      userPreferencesDB: "userPreferences",
      raidDB:"Raids",
      playerNumber: 0,
      playerStatusCollection: "",
      raidID : ""

    };

    this.createRaid = this.createRaid.bind(this);
    this.joinRaid = this.joinRaid.bind(this);
    this.getPlayerStatusCollection = this.getPlayerStatusCollection.bind(this);
    this.readKeybinds = this.readKeybinds.bind(this);
    this.updateKeybinds = this.updateKeybinds.bind(this)
    this.setPlayerInfo = this.setPlayerInfo.bind(this)
    firebase.initializeApp(this.state.config); 

  
  };

  placeOnMap = (tagInfo)=>{
    var mapStatePath = localStorage.getItem("mapState")
    firebase.firestore().collection(mapStatePath).doc().set(tagInfo)
  }

  setPlayerInfo = (info) =>{
   firebase.firestore().collection(localStorage.getItem("raidCol")).doc(localStorage.getItem("playerNumber")).update(info)
  }
 readKeybinds = () => {
    var user = firebase.auth().currentUser;
    firebase.firestore().collection(this.state.userPreferencesDB).doc(user.uid).get().then((snapshot) => {
      console.log(snapshot.data())
    }).catch((e) => console.log(e))
  }

  updateKeybinds = (updated_keyBinds) => {
    var user = firebase.auth().currentUser;
    firebase.firestore().collection(this.state.userPreferencesDB).doc(user.uid).update({"keyBinds" : updated_keyBinds}).then(()=>console.log("Edited"));
  }

 getPlayerStatusCollection= () => {
   console.log(this.state.playerStatusCollection);

    return this.state.playerStatusCollection;
  }

  createRaid = (username, map) => {
    //var user = firebase.auth().currentUser;
    var user = window.localStorage.getItem('uid')
    console.log(user.uid)
    var doc = firebase.firestore().collection(this.state.raidDB).doc();

    //playerStatusCollection = collection(db, 'Raids/'+ doc.id + '/playerStatus');

    console.log(doc.id.slice(0,4))
    doc.set({leader: user, p1:user, p1_name: username, p2:"", p2_name:"", p3:"", p3_name:"",p4:"", p4_name:"", raid_map: map}).then(async ()=>{
      window.localStorage.setItem("joinCode", doc.id.slice(0,4));
      window.localStorage.setItem("raidCol", 'Raids/'+ doc.id + '/playerStatus');
      window.localStorage.setItem("mapState", 'Raids/'+ doc.id + '/mapState');
      window.localStorage.setItem("userNames", doc.id);
      window.localStorage.setItem("playerNumber", "1");
      window.localStorage.setItem("raidLeader", user )

      await firebase.firestore().collection('Raids/'+ doc.id + '/playerStatus').doc("1").set(
        { ammo : 3, armor: 3, health:3}
      );
      await firebase.firestore().collection('Raids/'+ doc.id + '/playerStatus').doc("2").set(
        { ammo : 3, armor: 3, health:3}
      );
      await firebase.firestore().collection('Raids/'+ doc.id + '/playerStatus').doc("3").set(
        { ammo : 3, armor: 3, health:3}
      );
      await firebase.firestore().collection('Raids/'+ doc.id + '/playerStatus').doc("4").set(
        { ammo : 3, armor: 3, health:3}
      );


      window.location.href = "/tempRaid"

      //joinRaid(doc.id.slice(0,4))
    });
    //playerNumber = 1;
  }

  joinRaid = (raid_id, username) =>{
    var raidDB = "Raids"
    var user = firebase.auth().currentUser;
    firebase.firestore().collection(raidDB).where(firebase.firestore.FieldPath.documentId(), '>', raid_id).get().then(async (docSnap)=>{
      if(!docSnap.empty){
        var docID = docSnap.docs[0].id;
        
        console.log("DOC ID")
        var raidState = docSnap.docs[0].data(); 
        console.log(docSnap.docs[0].data().p1_name)

        //console.log(collection(firebase.firestore(), 'Raids/'+ docID + '/playerStatus'));
        window.localStorage.setItem("raidCol", 'Raids/'+ docID + '/playerStatus');
        window.localStorage.setItem("userNames", docID);
        window.localStorage.setItem("mapState", 'Raids/'+ docID + '/mapState');
        window.localStorage.setItem("raidMap", raidState.raid_map )
        window.localStorage.setItem("raidLeader", raidState.leader )
        //window.localStorage.setItem("mapState", 'Raids/'+ docID + '/mapState');
        
        console.log("status");
        //console.log(JSON.parse(window.localStorage.getItem("raidCol")));
        

        var placed = false

        if(docSnap.docs[0].data().p1 == "" && !placed){
          console.log("Position 1 FREE")
          placed = true;
          this.state.playerNumber = 1
          window.localStorage.setItem("playerNumber", "1");
          await firebase.firestore().collection(raidDB).doc(docID).update({p1: user.uid, p1_name: username})
          //await firebase.firestore().collection(raidDB).doc(docID).update({p1: user.uid})
          window.location.href = "/tempRaid"


        }else{
          console.log("Position 1 FULL")
        }
        if(docSnap.docs[0].data().p2 == "" && !placed){
          console.log("Position 2 FREE")
          placed = true;
          this.state.playerNumber = 2
          window.localStorage.setItem("playerNumber", "2");
          await firebase.firestore().collection(raidDB).doc(docID).update({p2: user.uid, p2_name: username})
          window.location.href = "/tempRaid"


        }
        if(docSnap.docs[0].data().p3 == "" && !placed){
          console.log("Position 3 FREE")
          placed = true;
          this.state.playerNumber = 3
          window.localStorage.setItem("playerNumber", "3");
          await firebase.firestore().collection(raidDB).doc(docID).update({p3: user.uid, p3_name: username})
          window.location.href = "/tempRaid"
          

        }
        if(docSnap.docs[0].data().p4 == "" && !placed){
          console.log("Position 4 FREE")
          placed = true;
          this.state.playerNumber = 4
          window.localStorage.setItem("playerNumber", "4");
          await firebase.firestore().collection(raidDB).doc(docID).update({p4: user.uid}, {p4_name: username})
          window.location.href = "/tempRaid"


        }

        if(placed){
          //const customEvent = new CustomEvent('joinedRaid', { detail: "" });
      
         // document.dispatchEvent(customEvent);
          //console.log(docSnap.docs[0].data().p1)
          //firebase.firestore().collection(raidDB).doc(raid_id).update({p1: user.uid})
          console.log('Joined raid')
        
          //window.location.href = "/tempRaid"
        }else{
          console.log("RAID FULL")
        }
      }else{
        console.log("Cant join the Raid")
      }
      
    })
    
  }

}


