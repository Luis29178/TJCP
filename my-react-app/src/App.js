import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import React, { useEffect, useState } from 'react';
import {readKeybinds, updateKeybinds} from './preferenceHandler';

function App() {

  // Configure Firebase.
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

  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.
  const [isAnon, setIsAnon] = useState(false);
  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user);
      var email = user.email;
      //console.log(user.email);
      //console.log(email == null ? true : false)
      setIsAnon(email == null ? false : true)
      //console.log(isAnon)
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  if (isSignedIn) {
    return (
      <div className="App">
      <header className="App-header">
        
        <p>
          Welcome to TJCP "Hello World" Project. 
        </p>
        <p>
        {isAnon?  <span> You are a Resigtered User </span> : <span>You are currently a Guest</span> }
        </p>
        <button onClick={() => readKeybinds()}>Read Keybinds</button>
        <button onClick={() => updateKeybinds()}>Update Keybinds</button>
        <p> <Link style={{color:"red"}} onClick={() =>firebase.auth().signOut()} > SignOut</Link></p>
      </header>
    </div>
    );
  }

  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to TJCP "Hello World" Project.
        </p>

        
        <p>  <Link to="/login" style={{color:"red"}}>Login</Link></p>
        <p>  <Link to="/signup" style={{color:"red"}} >Signup</Link></p>
      </header>
    </div>
  );
}

export default App;

