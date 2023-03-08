import React, {useState, useEffect, useContext} from "react";
import { Buttonnew } from "./newButton";
import InputBar from "./InputBar.jsx"
import "./_EFTJoin.css"
import 'firebase/compat/auth';
import { RaidContext } from "..";


function JoinRaid(props) {
    const RaidController = React.useContext(RaidContext); 

    const [joinCode, setJoincCode] = useState([]);
    const [playerName, setPlayerName] = useState("");
    
    var handleJoinCodeChange = (e) => {
        setJoincCode(e.target.value);
        console.log(e.target.value)
    }

    var handleNameChange = (e) =>{
        setPlayerName(e.target.value);
        console.log(e.target.value)
    }


   var onJoinPlayer = (code) =>{
        console.log("PLAYER")
        //createRaid()
        RaidController.joinRaid(joinCode, playerName)
        

    }
   var  onJoinSpectator = () =>{
        console.log("SPECTATOR")
    }
    

        if(props.player){
            return (

            <div className="EFTJoin">


<div className="BackBtn">
                    <Buttonnew borderStyle="back" onClick={() => {window.location.href = "/SelectMode"}}>{'<'}</Buttonnew>
                </div>
                <div>
                <div className="ImputGroup">
                    <div className="Prompt">Pick your username</div>
                    <InputBar handleChange={handleNameChange}></InputBar>
                    <div className="joinbtn">
                    {/* <Buttonnew borderStyle="join" onClick={onJoinPlayer}>Join</Buttonnew> */}
                    </div>

                </div>

                <div className="ImputGroup">
                    <div className="Prompt">Enter Code: </div>
                    <InputBar handleChange={handleJoinCodeChange}></InputBar>
                    <div className="joinbtn">
                    <Buttonnew borderStyle="join" onClick={onJoinPlayer}>Join</Buttonnew>
                    </div>
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
                        <div className="PromptSpec">Enter Code: </div>
                        <InputBar handleChange={handleJoinCodeChange} ></InputBar>
                        <div className="joinbtnSpec">
                        <Buttonnew borderStyle="join" onClick={onJoinSpectator}>Join</Buttonnew>
                        </div>
    
                    </div>
    
    
                </div>
    
            )

        }

        
    



}

export default JoinRaid;