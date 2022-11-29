import React from "react";
import "./_MapList.css"

const Styles = [
    "ls--map--display",
]



export const MapList = ({
    style
}) => {
    const checkbtnStyle =
        /* checks if passed in _buttonStyle is included in List [Styles] */
        Styles.includes(style)
            /* if it exsists set to _buttonStyle  */
            ? style
            /* else set to a style in list ie. default */
            : Styles[0];

    return (

    <div className={`ls ${checkbtnStyle} `}>
        <div>
            <button onClick={() =>console.log("Customs")} >Customs</button>
        </div>
        <div>
            <button onClick={() =>console.log("Interchange")}>Interchange</button>
        </div>
        <div>
            <button onClick={() =>console.log("Labs")}>Labs</button>
        </div>
        <div >
            <button onClick={() =>console.log("Shoreline")}>Shoreline</button>
        </div>
        <div >
            <button onClick={() =>console.log("Woods")}>Woods</button>
        </div>
        <div >
            <button onClick={() =>console.log("Factory")}>Factory</button>
        </div>
        <div >
            <button onClick={() =>console.log("Reserve")}>Reserve</button>
        </div>
        <div >
            <button onClick={() =>console.log("Lighthouse")}>Lighthouse</button>
        </div>
        </div>

    );


};