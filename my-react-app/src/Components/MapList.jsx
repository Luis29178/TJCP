import React from "react";
import "./_MapList.css"

const Styles = [
    "ls--map--display",
]



export const MapList = ({
    style,
    func
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
            <button onClick= {() => func(1)} >Customs</button>
        </div>
        <div>
            <button onClick={() => func(3)}>Interchange</button>
        </div>
        <div>
            <button onClick={() => func(4)}>Labs</button>
        </div>
        <div >
            <button onClick={() => func(7)}>Shoreline</button>
        </div>
        <div >
            <button onClick={() => func(8)}>Woods</button>
        </div>
        <div >
            <button onClick={() => func(2)}>Factory</button>
        </div>
        <div >
            <button onClick={() => func(6)}>Reserve</button>
        </div>
        <div >
            <button onClick={() => func(5)}>Lighthouse</button>
        </div>
        </div>

    );


};