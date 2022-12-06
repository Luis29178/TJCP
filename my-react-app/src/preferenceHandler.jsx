//import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const db = firebase.firestore();

  function readKeybinds(){
    firebase.firestore().collection("userPreferences").doc('mipMcXMiQedEIwki5QBqV00TaXg1').get().then((snapshot) => {
      console.log(snapshot.data())
    }).catch((e) => console.log(e))
  }
  function updateKeybinds(){
    firebase.firestore().collection("userPreferences").doc('mipMcXMiQedEIwki5QBqV00TaXg1').update({"Q": "dead", "W":"star"});
  }

export {readKeybinds, updateKeybinds} 

