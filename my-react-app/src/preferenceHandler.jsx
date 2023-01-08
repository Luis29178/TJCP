//import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { collection, doc } from 'firebase/firestore';

const config = {
  apiKey: "AIzaSyC4hztlkCki_2pnq93Rgf7cgncHC1V61N0",
  authDomain: "capstone-eeab2.firebaseapp.com",
  projectId: "capstone-eeab2",
  storageBucket: "capstone-eeab2.appspot.com",
  messagingSenderId: "779758566575",
  appId: "1:779758566575:web:fa8755a005fed7dd23a85a",
  measurementId: "G-55B1P13PP9"

};
firebase.initializeApp(config); 

const db = firebase.firestore();

var playerStatusCollection = "";
var playerNumber = 0;

const userPreferencesDB = "userPreferences";
const raidDB = "Raids";

var raidID;


  function readKeybinds(){
    var user = firebase.auth().currentUser;
    firebase.firestore().collection(userPreferencesDB).doc(user.uid).get().then((snapshot) => {
      console.log(snapshot.data())
    }).catch((e) => console.log(e))
  }
  function updateKeybinds(updated_keyBinds){
    var user = firebase.auth().currentUser;
    firebase.firestore().collection(userPreferencesDB).doc(user.uid).update({"keyBinds" : updated_keyBinds}).then(()=>console.log("Edited"));
  }

  function getPlayerStatusCollection(){
    console.log(playerStatusCollection)

    return playerStatusCollection;
  }
  function createRaid(){
    var user = firebase.auth().currentUser;
    console.log(user.uid)
    var doc = firebase.firestore().collection(raidDB).doc();

    //playerStatusCollection = collection(db, 'Raids/'+ doc.id + '/playerStatus');


    console.log(doc.id.slice(0,4))
    doc.set({leader: user.uid, p1:"", p2:"", p3:"",p4:""}).then(()=>{
      firebase.firestore().collection('Raids/'+ doc.id + '/playerStatus').doc("1").set(
        { ammo : 3, armor: 3, health:3}
      );
      firebase.firestore().collection('Raids/'+ doc.id + '/playerStatus').doc("2").set(
        { ammo : 3, armor: 3, health:3}
      );
      firebase.firestore().collection('Raids/'+ doc.id + '/playerStatus').doc("3").set(
        { ammo : 3, armor: 3, health:3}
      );
      firebase.firestore().collection('Raids/'+ doc.id + '/playerStatus').doc("4").set(
        { ammo : 3, armor: 3, health:3}
      );

      //joinRaid(doc.id.slice(0,4))
    });
    //playerNumber = 1;
  }

  function joinRaid(raid_id){
    var user = firebase.auth().currentUser;
    firebase.firestore().collection(raidDB).where(firebase.firestore.FieldPath.documentId(), '>', raid_id).get().then((docSnap)=>{
      if(!docSnap.empty){
        var docID = docSnap.docs[0].id;
        playerStatusCollection =  playerStatusCollection = collection(db, 'Raids/'+ docID + '/playerStatus');

        var placed = false

        if(docSnap.docs[0].data().p1 == "" && !placed){
          console.log("Position 1 FREE")
          placed= true;
          firebase.firestore().collection(raidDB).doc(docID).update({p1: user.uid})
          playerNumber = 1;
        }else{
          console.log("Position 1 FULL")
        }
        if(docSnap.docs[0].data().p2 == "" && !placed){
          placed = true;
          firebase.firestore().collection(raidDB).doc(docID).update({p2: user.uid})
          console.log("Position 2 FREE")
          playerNumber = 2;
        }
        if(docSnap.docs[0].data().p3 == "" && !placed){
          placed = true;
          firebase.firestore().collection(raidDB).doc(docID).update({p3: user.uid})
          console.log("Position 3 FREE")
          playerNumber = 3;
        }
        if(docSnap.docs[0].data().p4 == "" && !placed){
          placed = true;
          firebase.firestore().collection(raidDB).doc(docID).update({p4: user.uid})
          console.log("Position 4 FREE")
          playerNumber = 3;
        }

        if(placed){
          const customEvent = new CustomEvent('joinedRaid', { detail: "" });
      
          document.dispatchEvent(customEvent);
          //console.log(docSnap.docs[0].data().p1)
          //firebase.firestore().collection(raidDB).doc(raid_id).update({p1: user.uid})
          console.log('Joined raid')
        }else{
          console.log("RAID FULL")
        }
      }else{
        console.log("Cant join the Raid")
      }
      
    })
    
  }

export {readKeybinds, updateKeybinds, getPlayerStatusCollection, createRaid, joinRaid} 

