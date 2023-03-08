import React, { useState, useEffect } from "react";
import { GARBText } from "./GARBText.jsx"
import { Button } from "./Button";
import { GarbCircle } from "./GarbCircle.jsx";


import "./_GARBset.css";

export const GARBAdvanced = ({
    OnClick,
}) => {

    const [PlayerDoc, setPlayerInfo] = useState([
        {
            ammo: 0,
            armor: 0,
            health: 0,
            user: 0
        },
        {
            ammo: 0,
            armor: 0,
            health: 0,
            user: 0
        },
        {
            ammo: 0,
            armor: 0,
            health: 0,
            user: 0
        },
        {
            ammo: 0,
            armor: 0,
            health: 0,
            user: 0
        },])

    useEffect(() => {



        document.addEventListener('userInfoChanged', function ({ detail }) {

            var playerInfo = [];
            var id = "GarbPlayerInfo-"
            var count = 0;
            detail.snapshot.docs.forEach(player => {
                var playerStats = {
                    ammo: player.data().ammo,
                    armor: player.data().armor,
                    health: player.data().health,
                    user: player.data().username,
                    playerNum: count
                }
                playerInfo.push(playerStats);
                count = count + 1;
            });
            setPlayerInfo(playerInfo);
            console.log(playerInfo);
        })


    })




    return (

        <div className="containerA">
            <div className="xbtn">
                <Button onClick={() => OnClick().bind(this)}
                    type="button"
                    buttonStyle="btn--x--basic"
                    size="btn--x--basic">{"<"}</Button>
            </div>

            <div className="GARBList">

                <GARBText key={"player1Garb"} Player={PlayerDoc[0]}></GARBText>
                <GARBText key={"player2Garb"} Player={PlayerDoc[1]}></GARBText>
                <GARBText key={"player3Garb"} Player={PlayerDoc[2]}></GARBText>
                <GARBText key={"player4Garb"} Player={PlayerDoc[3]}></GARBText>

            </div>

            <div className="GARBoverall"><GarbCircle></GarbCircle></div>

        </div>


    );
}





