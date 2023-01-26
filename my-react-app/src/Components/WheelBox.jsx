import React from "react";



import "./_WheelBox.css"


export class TagsBox extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            UserWheeldoc : [{
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
            },]



        }


    }





    render() {
        return (<>
            <div className="container">
                <div className="U1"><UserWheel onClick={() => { console.log("userWheel clicked") }}></UserWheel></div>
                <div className="U2"><UserWheel onClick={() => { console.log("userWheel clicked") }}></UserWheel></div>
                <div className="U3"><UserWheel onClick={() => { console.log("userWheel clicked") }}></UserWheel></div>
                <div className="U4"><UserWheel onClick={() => { console.log("userWheel clicked") }}></UserWheel></div>
            </div>
        </>);
    }
}