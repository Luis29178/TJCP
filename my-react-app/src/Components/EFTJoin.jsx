import React from "react";
import { Buttonnew } from "./newButton";
import InputBar from "./InputBar.jsx"
import "./_EFTJoin.css"
import { createRaid, joinRaid } from "../preferenceHandler";
import 'firebase/compat/auth';
import { Redirect } from 'react-router-dom';
import { withRouter } from "./withRouter";




class JoinRaid extends React.Component {

    constructor(props){
        super(props)

        this.redirectToPage = this.redirectToPage.bind(this);
        
        document.addEventListener('joinedRaid', function({}) {
            this.redirectToPage()
        }.bind(this));

        this.state = {
            joinCode: '' 
        }
    }
    
    handleJoinCodeChange(e) {
        this.setState({joinCode: e.target.value})
        console.log(e.target.value)
    }

    redirectToPage = () =>
    {
        this.props.navigate('/tempRaid')
    }

    onJoinPlayer = (code) =>{
        console.log("PLAYER")
        //createRaid()
        joinRaid(this.state.joinCode)

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
                    <InputBar handleChange={this.handleJoinCodeChange.bind(this)}></InputBar>
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
                        <InputBar handleChange={this.handleJoinCodeChange.bind(this)} ></InputBar>
                        <div className="joinbtn">
                        <Buttonnew borderStyle="join" onClick={this.onJoinSpectator.bind(this)}>Join</Buttonnew>
                        </div>
    
                    </div>
    
    
                </div>
    
            )

        }

        
    }



}

export default withRouter(JoinRaid);