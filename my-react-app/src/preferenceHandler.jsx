//import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { collection } from 'firebase/firestore';
import 'firebase/compat/auth';

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


  function readKeybinds(){
    var user = firebase.auth().currentUser;
    console.log(user)
    var data
    return firebase.firestore().collection(userPreferencesDB).doc(user.uid).get()
  }
  function updateKeybinds(updated_keyBind){
    var user = firebase.auth().currentUser;
    firebase.firestore().collection(userPreferencesDB).doc(user.uid).update(updated_keyBind).then(()=>console.log("Edited"));
  }
  function createKeyBinds(){
    console.log("CREATING KEYBINDS");
    var user = firebase.auth().currentUser;
    firebase.firestore().collection(userPreferencesDB).doc(user.uid).set({tag1:"q", tag2:"w", tag3:"e", tag4:"a", tag5:"s", tag6:"d", tag7:"z", tag8:"x", tag9:"c"})
  }

export { readKeybinds, updateKeybinds, playerStatusCollection, createKeyBinds }

