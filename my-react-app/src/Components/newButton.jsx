import React from 'react'
import './_newButton.css'

const Styles =[
    "ttRaid",
    "save",
    "discard",
    "back",
    "join",
    "eft--create",
    "eft--join",
    "eft--spectate",
    "specLeave",
    "SpectatorSideBarButton"
]



export const Buttonnew = ({
    children,
    type,
    onClick,
    borderStyle,

}) => {


    const checkborderStyle = 
    /* checks if passed in _buttonStyle is included in List [Styles] */
    Styles.includes(borderStyle) 
    /* if it exsists set to _buttonStyle  */
    ? borderStyle 
    /* else set to a style in list ie. default */
    : Styles[0];





    return (
        <div > 
        
        <button
        className={`${checkborderStyle}--insidenew`}
        onClick = {onClick} 
        type = {type}>
        {children}
        </button>
        <div className={`${checkborderStyle}`}></div>
        </div>
    

    );


};