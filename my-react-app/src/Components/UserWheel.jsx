import React from "react";
import "./_UserWheel.css"

export const UserWheel = ({
    onClick,
    GARBarr,
    User,

}) => {


    return (
        <button onClick={onClick}>
            <div className="ContainerBorder">
                <div className="Container">
                    <div className="CenterDot"></div>
                    <div className="Armor"></div>
                    <div className="Health"></div>
                    <div className="Sectioner"></div>
                    <div className="Ammo"></div>
                </div>

            </div>
        </button>
    );


};