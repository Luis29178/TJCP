import React from "react";
import InputBar from "./InputBar";
import { Buttonnew } from "./newButton";


import "./_spectatorSideBarJoinNew.css"

export class JoinGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {


        }

    }

    onJoinPlayer() {

        console.log("joined new")
    }



    render() {
        return (
            <>
                <div className="JoinContainer">
                    <div className="inputBar">
                        <InputBar placeholder={"Enter Code:"}></InputBar>
                    </div>
                    <div className="joinbtn">
                        <Buttonnew borderStyle="join" onClick={this.onJoinPlayer.bind(this)}>Join</Buttonnew>
                    </div>
                </div>
            </>
        );
    }
}