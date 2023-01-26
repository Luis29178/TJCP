import React from "react";
import { GARBText } from "./GARBText.jsx"
import { Button } from "./Button";
import { GarbCircle } from "./GarbCircle.jsx";



import "./_GARBset.css";


export class GARBAdvanced extends React.Component {
    state = {
        tempPlayers: [
            {
                armor: "black",
                health: "green",
                ammo: "amber",
                user: "user1"
            },
            {
                armor: "green",
                health: "green",
                ammo: "amber",
                user: "user2"
            },
            {
                armor: "black",
                health: "red",
                ammo: "red",
                user: "user3"
            },
            {
                armor: "amber",
                health: "green",
                ammo: "amber",
                user: "user4"
            },
        ]


    }

    render() {

        return (

            <div className="containerA">
                <div className="xbtn">
                    <Button onClick={() => this.props.OnClick().bind(this)}
                        type="button"
                        buttonStyle="btn--x--basic"
                        size="btn--x--basic">{"<"}</Button>
                </div>

                    <div className="GARBList">
                        {this.state.tempPlayers.map(player => (
                            <GARBText Player={player}></GARBText>
                        ))}
                    </div>
                
                <div className="GARBoverall"><GarbCircle></GarbCircle></div>

            </div>


        );


    }




}




