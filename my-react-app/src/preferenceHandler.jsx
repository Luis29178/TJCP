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
    firebase.firestore().collection(raidDB).doc().set({leader: firebase.auth().currentUser.uid, p1:"", p2:"", p3:"",p4:""});
  }

  function joinRaid(raid_id){
    var user = firebase.auth().currentUser;
    firebase.firestore().collection(raidDB).where(firebase.firestore.FieldPath.documentId(), '==', raid_id).get().then((docSnap)=>{
      if(!docSnap.empty){
        //loop on current player and check if you can join as each player
        firebase.firestore().collection(raidDB).doc(raid_id).update({p1: user.uid})
        console.log('Joined raid')
      }else{
        console.log("Cant join the Raid")
      }
      
    })
    
  }

export {readKeybinds, updateKeybinds, playerStatusCollection, createRaid, joinRaid} 

