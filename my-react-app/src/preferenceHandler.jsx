//import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

  function readDoc() {
    console.log("read preferences")
  };

  function preferences(){
    firebase.firestore().collection("userPreferences").doc('mipMcXMiQedEIwki5QBqV00TaXg1').get().then((snapshot) => {
      console.log(snapshot.data())
    }).catch((e) => console.log(e))
  }

export {readDoc, preferences} 

