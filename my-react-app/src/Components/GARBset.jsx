import React from "react";


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
            <>
                <div className="xbtn">
                    <Button
                        onClick={() => { window.location.href = "/" }}
                        type="button"
                        buttonStyle="btn--x--basic"
                        size="btn--x">
                        {"<"}
                    </Button>
                </div>
                <div classname="GARBlist">
                    {this.state.tempPlayers.map(player => (
                        <GARBText Player={player}></GARBText>
                    ))}
                </div>
                <div className="GARBoverall"></div>

            </>
        );


    }




}

export class GARBPlayer extends React.Component {
    state = {


    }

    render() {

        return (
            <>

            </>
        );


    }




}


