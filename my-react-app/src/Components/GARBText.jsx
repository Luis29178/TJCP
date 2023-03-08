import React from "react";
import "./_GARBText.css";

import { RaidContext } from "..";

export const GARBText = ({
    Player
}) => {
    const RaidController = React.useContext(RaidContext);





    function statConverter(statValue) {

        switch (statValue) {
            case 0:
                return "black"
            case 1:
                return "red"
            case 2:
                return "amber"
            case 3:
                return "green"
        }

    }


    function changeAmmoColor() {
        switch (statConverter(Player.ammo)) {
            case "green":
                var temInfo = {
                    ammo: 2,
                    armor: Player.armor,
                    health: Player.health,
                    username: Player.user
                }
                RaidController.setPlayerInfo(temInfo, Player.playerNum);
                break;
            case "amber":
                var temInfo = {
                    ammo: 1,
                    armor: Player.armor,
                    health: Player.health,
                    username: Player.user
                }
                RaidController.setPlayerInfo(temInfo, Player.playerNum);

                break;
            case "red":
                var temInfo = {
                    ammo: 0,
                    armor: Player.armor,
                    health: Player.health,
                    username: Player.user
                }
                RaidController.setPlayerInfo(temInfo, Player.playerNum);

                break;
            case "black":
                var temInfo = {
                    ammo: 3,
                    armor: Player.armor,
                    health: Player.health,
                    username: Player.user
                }
                RaidController.setPlayerInfo(temInfo, Player.playerNum);

                break;
            default:
                console.log("FireBase Error");
                break;

        }


    }
    function changeHealthColor() {
        switch (statConverter(Player.health)) {
            case "green":
                var temInfo = {
                    ammo: Player.ammo,
                    armor: Player.armor,
                    health: 2,
                    username: Player.user
                }
                RaidController.setPlayerInfo(temInfo, Player.playerNum);
                break;
            case "amber":
                var temInfo = {
                    ammo: Player.ammo,
                    armor: Player.armor,
                    health: 1,
                    username: Player.user
                }
                RaidController.setPlayerInfo(temInfo, Player.playerNum);

                break;
            case "red":
                var temInfo = {
                    ammo: Player.ammo,
                    armor: Player.armor,
                    health: 0,
                    username: Player.user
                }
                RaidController.setPlayerInfo(temInfo, Player.playerNum);

                break;
            case "black":
                var temInfo = {
                    ammo: Player.ammo,
                    armor: Player.armor,
                    health: 3,
                    username: Player.user
                }
                RaidController.setPlayerInfo(temInfo, Player.playerNum);

                break;
            default:
                console.log("FireBase Error");
                break;

        }


    }
    function changeArmorColor() {
        switch (statConverter(Player.armor)) {
            case "green":
                var temInfo = {
                    ammo: Player.ammo,
                    armor: 2,
                    health: Player.health,
                    username: Player.user
                }
                RaidController.setPlayerInfo(temInfo, Player.playerNum);
                break;
            case "amber":
                var temInfo = {
                    ammo: Player.ammo,
                    armor: 1,
                    health: Player.health,
                    username: Player.user
                }
                RaidController.setPlayerInfo(temInfo, Player.playerNum);

                break;
            case "red":
                var temInfo = {
                    ammo: Player.ammo,
                    armor: 0,
                    health: Player.health,
                    username: Player.user
                }
                RaidController.setPlayerInfo(temInfo, Player.playerNum);

                break;
            case "black":
                var temInfo = {
                    ammo: Player.ammo,
                    armor: 3,
                    health: Player.health,
                    username: Player.user
                }
                RaidController.setPlayerInfo(temInfo, Player.playerNum);

                break;
            default:
                console.log("FireBase Error");
                break;

        }
    }



    return (<>
        <div className="container">

            <div className={`garb-user`} onClick={changeAmmoColor.bind(this)}>{Player.user}</div>

            <div className={`Ammo-${statConverter(Player.ammo)}`} onClick={changeAmmoColor.bind(this)}>A</div>

            <div className="SpacerA">:</div>

            <div className={`Health-${statConverter(Player.health)}`} onClick={changeHealthColor.bind(this)}>H</div>

            <div className="SpacerB">:</div>

            <div className={`Armor-${statConverter(Player.armor)}`} onClick={changeArmorColor.bind(this)}>AR</div>



        </div>


    </>)




}