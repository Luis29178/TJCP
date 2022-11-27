import React from "react";
import { MapDisplay } from "./MapDisplay";
import { DropDown } from "./DropDownBar";
import Customs from "../Images/custumsmapog.png";
import './_HomePage.css';


function EFTmaps() {
    return (

        <>
            <MapDisplay mdstyle={"dd--eft--basic"} ></MapDisplay>

            <DropDown ddstyle={"dd--eft--basic"}></DropDown>
        </>

    );

}




export default EFTmaps;