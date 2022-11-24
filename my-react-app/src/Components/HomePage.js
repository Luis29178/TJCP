import React from "react";
import { Button } from "./Button.jsx";
import './_HomePage.css';
import {Routes, Route, useNavigate} from 'react-router-dom';



function HomePage() {
    return (
        
            <div className="hcontainer">
                
                <div className="hbtnGroup">
                    <Button
                        onClick={() => { console.log("escaped from tarkov") }}
                        type="btn"
                        buttonStyle="btn--Menu--outline"
                        size="btn--menu"

                    >
                        Escape From Tarkov
                    </Button>
                    <br></br>
                    <br></br>

                    <Button
                        onClick={() => { console.log("To the tracker") }}
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

                             console.log("To plan a path") 
                            
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
                <Button
                        onClick={() => {window.location.href ="/login"}}
                        type="button"
                        buttonStyle="btn--Log--basic"
                        size="btn--menu"
                    >
                        LogIn
                    </Button>
                    
                        <div style={{float: "right", marginLeft: 10}}>
                    <Button
                        onClick={() => { window.location.href ="/signup" }}
                        type="button"
                        buttonStyle="btn--Log--basic"
                        size="btn--menu"
                    >
                        LogOut
                    </Button>
                    </div>
                </div>
                
            </div>
        
    );

}




export default HomePage;