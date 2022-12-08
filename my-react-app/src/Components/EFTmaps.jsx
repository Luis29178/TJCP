import React from "react";
import { MapDisplay } from "./MapDisplay";
import { DropDown } from "./DropDownBar";
import './_EFTmaps.css';
import { MapList } from "./MapList"
import { Button } from "./Button";


function EFTmaps() {
    return (

        <>
            <div className="eftpage">
                <div className="efttitle">Maps</div>
                <div className="eftxbtn">
                    <Button onClick={() => {  window.location.href ="/EFT" }}
                        type="button"
                        buttonStyle="btn--x--basic"
                        size="btn--x">{"<"}</Button>
                </div>
                <div className="eftmapDisplay">
                    <MapDisplay mdstyle={"map--menu--display"} ></MapDisplay>
                </div>
                <div className="eftmapList">
                    <MapList style={"ls--map--display"}></MapList>
                </div>
                <div className="eftDropDown">
                    <DropDown ddstyle={"dd--eft--basic"}></DropDown>
                </div>
            </div>
        </>

    );

}

export default EFTmaps;