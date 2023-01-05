import React from "react";
import { Buttonnew } from "./newButton";
import InputBar from "./InputBar.jsx"
import "./_EFTJoin.css"
import { createRaid, joinRaid } from "../preferenceHandler";
import 'firebase/compat/auth';




class JoinRaid extends React.Component {

    onJoinPlayer = () =>{
        console.log("PLAYER")
        createRaid()
        //joinRaid("ofuL4KioYwatODLYBRvh");

    }
    onJoinSpectator = () =>{
        console.log("SPECTATOR")
    }
    


    render() {
        if(this.props.player){
            return (

            <div className="EFTJoin">


                <div className="BackBtn">
                    <Buttonnew borderStyle="back" onClick={() => {window.location.href = "/SelectMode"}}>{'<'}</Buttonnew>
                </div>


                <div className="ImputGroup">
                    <div className="Prompt">Enter Code: </div>
                    <InputBar></InputBar>
                    <div className="joinbtn">
                    <Buttonnew borderStyle="join" onClick={this.onJoinPlayer.bind(this)}>Join</Buttonnew>
                    </div>

                </div>


            </div>

        )
        }
        else{
            return (

                <div className="EFTJoin">
    
    
                    <div className="BackBtn">
                        <Buttonnew borderStyle="back" onClick={() => {window.location.href = "/SelectMode"}}>{'<'}</Buttonnew>
                    </div>
    
    
                    <div className="ImputGroup">
                        <div className="Prompt">Enter Code: </div>
                        <InputBar></InputBar>
                        <div className="joinbtn">
                        <Buttonnew borderStyle="join" onClick={this.onJoinSpectator.bind(this)}>Join</Buttonnew>
                        </div>
    
                    </div>
    
    
                </div>
    
            )

        }

        
    }



}

export default JoinRaid;