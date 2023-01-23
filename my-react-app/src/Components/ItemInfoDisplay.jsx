import React from "react";
import { ItemInfoBody } from "./ItemInfoBody";
import { Buttonnew } from "./newButton";

import LL from '../Images/Loot_Lord_plushie_icon.webp'

import "./_ItemInfoDisplay.css"
import { InfoCounter } from "./ItemInfoCount";
import { InfoDropBar } from "./InfoDropBar.jsx";



export class ItemInfoDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dummyInfo: {
                description: `"Loot Lord" plush toy from a famous Tarkov resident - AquaFPS. A very rare collectible!`,
                req: `1 needs to be found in raid for the quest Collector`,
                locations: `create listing script`
            },
            ItemName: "Loot Lord"


        }
    }

    PullInfo(ItemName) {
        console.log("Get info for" + ItemName);
    }



    render() {
        return (
            <>
                <div className="iInfoContainer">
                    <div className="xButton">
                        <Buttonnew borderStyle="back" onClick={() => { /*window.location.href = "/SelectMode"*/ console.log("return") }}>{'<'}</Buttonnew>
                    </div>

                    <div className="DropBar">

                        <InfoDropBar></InfoDropBar>
                    </div>

                    <div className="ItemImageIco">
                        <img className="ImageIcon" src={LL}></img>
                    </div>

                    <div className="ItemCount">
                        <InfoCounter itemName={this.state.ItemName}></InfoCounter>
                    </div>

                    <div className="BodyText">
                        <ItemInfoBody ItemInfo={this.state.dummyInfo}></ItemInfoBody>
                    </div>
                </div>
            </>
        );
    }
}