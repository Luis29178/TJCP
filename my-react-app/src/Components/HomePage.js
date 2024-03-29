import React, { useEffect, useState }  from "react";
import { Button } from "./Button.jsx";
import './_HomePage.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

  

function HomePage() {
    const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.
    const [isAnon, setIsAnon] = useState(false);
    // Listen to the Firebase Auth state and set the local state.
    useEffect(() => {
      const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
        setIsSignedIn(!!user);
        var email = user.email;
        window.localStorage.setItem('uid', user.uid)
        console.log("USER STATUS");
        //console.log(email === null ? true : false);
        setIsAnon(email == null ? true : false)
        window.localStorage.setItem('isAnon', email == null ? true : false)
        if(email == null ? true : false == false){
            localStorage.setItem('AnonKeybinds', JSON.stringify(["Q", "W", "D", "A", "K", "J", "Z", "X", "C"]))
        }
        //setIsAnon()
        //console.log(isAnon)
      });
      return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
    }, []); 
    if (isSignedIn) {}
    return (
            <div className="hcontainer">
                
                <div className="hbtnGroup">
                    <Button
                        onClick={() =>  { window.location.href ="/SelectMode" }}
                        type="btn"
                        buttonStyle="btn--Menu--outline"
                        size="btn--menu"
                    >
                        Escape From Tarkov
                    </Button>
                    <br></br>
                    <br></br>

                    <Button
                        onClick={() => {  window.location.href ="/Tracker" }}
                        type="button"
                        buttonStyle="btn--Menu--outline"
                        size="btn--menu"
                    >
                        Tracker
                    </Button>
                    <br></br>
                    <br></br>

                    <Button
                        onClick={() => {
                            window.location.href ="/Paths"
                            }
                        }
                        type="button"
                        buttonStyle="btn--Menu--outline"
                        size="btn--menu"

                    >
                        Paths
                    </Button>
                </div>
                
                <div className="abtngroup">

                { !isSignedIn && <Button
                        onClick={() => {window.location.href ="/login"}}
                        type="button"
                        buttonStyle="btn--Log--basic"
                        size="btn--menu"
                    >
                        LogIn
                    </Button>}
                    
                        <div style={{float: "right", marginLeft: 10}}>
                    { isSignedIn && <Button
                        onClick={() => {firebase.auth().signOut()}}
                        type="button"
                        buttonStyle="btn--Log--basic"
                        size="btn--menu"
                    >
                        LogOut
                    </Button>}
                    </div>
                </div>
                
            </div>
        
    );

}




export default HomePage;