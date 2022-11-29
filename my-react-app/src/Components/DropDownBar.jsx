import React from "react";
import "./_DropDownBar.css"


const Styles =[
        "dd--eft--basic",
    ]


export const DropDown = ({
    ddstyle
}) => {
    const checkbtnStyle = 
    /* checks if passed in _buttonStyle is included in List [Styles] */
    Styles.includes(ddstyle) 
    /* if it exsists set to _buttonStyle  */
    ? ddstyle 
    /* else set to a style in list ie. default */
    : Styles[0];

    return (
        <div className={`dd ${checkbtnStyle} `}>
        <select value="Path : none">
            <option>Sample 1</option>
            <option>Sample 2</option>
            <option>Sample 3</option>
        </select>
        <span className={"dd-arrow"}></span>
        </div>
    );


};

