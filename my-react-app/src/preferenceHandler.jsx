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

const playerStatusCollection = collection(db, 'Raids/mSUXqyXwthl8Vz0X5atU/playerStatus')

const userPreferencesDB = "userPreferences";
const raidDB = "Raids";


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

  function createRaid(){
    var user = firebase.auth().currentUser;
    firebase.firestore().collection(raidDB).doc().set({leader: firebase.auth().currentUser.uid, p1:firebase.auth().currentUser.uid, p2:"", p3:"",p4:""});
  }

  function joinRaid(raid_id){
    var user = firebase.auth().currentUser;
    firebase.firestore().collection(raidDB).where(firebase.firestore.FieldPath.documentId(), '==', raid_id).get().then((docSnap)=>{
      if(!docSnap.empty){
        var placed = false

        if(docSnap.docs[0].data().p1 == "" && !placed){
          console.log("Position 1 FREE")
        }else{
          console.log("Position 1 FULL")
        }
        if(docSnap.docs[0].data().p2 == "" && !placed){
          placed = true;
          firebase.firestore().collection(raidDB).doc(raid_id).update({p2: user.uid})
          console.log("Position 2 FREE")
        }
        if(docSnap.docs[0].data().p3 == "" && !placed){
          placed = true;
          firebase.firestore().collection(raidDB).doc(raid_id).update({p3: user.uid})
          console.log("Position 3 FREE")
        }
        if(docSnap.docs[0].data().p4 == "" && !placed){
          placed = true;
          firebase.firestore().collection(raidDB).doc(raid_id).update({p4: user.uid})
          console.log("Position 4 FREE")
        }

        const customEvent = new CustomEvent('joinedRaid', { detail: "" });
      
        document.dispatchEvent(customEvent);
        //console.log(docSnap.docs[0].data().p1)
        //firebase.firestore().collection(raidDB).doc(raid_id).update({p1: user.uid})
        console.log('Joined raid')
      }else{
        console.log("Cant join the Raid")
      }
      
    })
    
  }

export {readKeybinds, updateKeybinds, playerStatusCollection, createRaid, joinRaid} 

