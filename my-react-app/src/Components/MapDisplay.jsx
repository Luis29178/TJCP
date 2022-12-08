import React from "react";
import "./_MapDisplay.css"


const Styles =[
        "map--menu--display",
    ]


export const MapDisplay = ({
    Imgsorce,
    mdstyle
}) => {
    const checkbtnStyle = 
    /* checks if passed in _buttonStyle is included in List [Styles] */
    Styles.includes(mdstyle) 
    /* if it exsists set to _buttonStyle  */
    ? mdstyle 
    /* else set to a style in list ie. default */
    : Styles[0];

    return (
        <div className={`dd ${checkbtnStyle} `}>
            <img className="mapImg" src={Imgsorce}></img>
        </div>
    );


};