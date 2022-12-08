// Import FirebaseAuth and firebase.
import React, { useEffect, useState } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { auth as firebaseuiAuth } from 'firebaseui';
import  { Redirect } from 'react-router-dom'
import '../App.css';

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

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // We will display Google and Facebook as auth providers.
  signInSuccessUrl: '/',
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebaseuiAuth.AnonymousAuthProvider.PROVIDER_ID,
  ],
};

function SignInScreen() {
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user);
      console.log(user.email);
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  if (!isSignedIn) {
    return (
      <div className="App-header">
      <div style={{display: 'flex',alignItems: 'center', justifyContent: 'center',}}>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>

      </div>
    );
  }
  return (
    <div className="App-header">
    <div style={{display: 'flex',alignItems: 'center', justifyContent: 'center',}}>
    <div>
      <a onClick={() => firebase.auth().signOut()}>Click Here to Sign-Out</a>
    </div>
    </div>

    </div>
  );
}

export default SignInScreen;