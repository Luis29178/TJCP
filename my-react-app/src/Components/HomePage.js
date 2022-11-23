import { positions } from "@mui/system";
import React from "react";
import { Button } from "./Button.js";


function HomePage() {
    return (
        <>
            <div className="hbtnGroup" >
                <Button
                    onClick={() => { console.log("escaped from tarkov") }}
                    type="btn"
                    buttonStyle="btn--gray--outline"
                    size="btn--menu"
                    
                >
                    Escape From Tarkov
                </Button>
                <br></br>
                <br></br>


                <Button
                    onClick={() => { console.log("To the tracker") }}
                    type="button"
                    buttonStyle="btn--gray--outline"
                    size="btn--menu"
                >
                    Tracker
                </Button>
                <br></br>
                <br></br>


                <Button
                    onClick={() => { console.log("To plan a path") }}
                    type="button"
                    buttonStyle="btn--gray--outline"
                    size="btn--menu"
                
                >
                    Paths
                </Button>
                <br></br>
                <br></br>


                <Button
                    onClick={() => { console.log("lets log in") }}
                    type="button"
                    buttonStyle="btn--gray--outline"
                    size="btn--menu"
                
                >
                    Login
                </Button>
                <br></br>
                <br></br>

                <Button
                    onClick={() => { console.log("leaving so soon") }}
                    type="button"
                    buttonStyle="btn--gray--outline"
                    size="btn--menu"
                
                >
                    LogOut
                </Button>


            </div>
        </>
    );

}

const btns = document.querySelectorAll('.hbtnGroup')



export default HomePage;