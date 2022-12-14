import React from "react";
import { Buttonnew } from "./newButton";
import InputBar from "./InputBar.jsx"
import "./_EFTJoin.css"




class JoinRaid extends React.Component {
    state = {
        player: false,

    }
    


    render() {

        return (
            <div className="EFTJoin">


                <div className="BackBtn">
                    <Buttonnew borderStyle="back">{'<'}</Buttonnew>
                </div>


                <div className="ImputGroup">
                    <div className="Prompt">Enter Code: </div>
                    <InputBar></InputBar>
                    <div className="joinbtn">
                    <Buttonnew borderStyle="join">Join</Buttonnew>
                    </div>

                </div>


            </div>

        )
    }



}

export default JoinRaid;