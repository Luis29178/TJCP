import React from "react";
import "./_DropDownBar.css"


const Styles = [
    "ub--Captain--basic",
    "ub--Player--basic",
    "ub--Spectator--basic",
]


export const UserInfoBar = ({
    style,
    userList
}) => {
    const checkbtnStyle =
        /* checks if passed in _buttonStyle is included in List [Styles] */
        Styles.includes(style)
            /* if it exsists set to _buttonStyle  */
            ? style
            /* else set to a style in list ie. default */
            : Styles[0];

    return (
        <div className={`dd ${checkbtnStyle} `}>

            <div>insert Userinfo wheel
                { userList.forEach(user => {
                    // place a user wheele
                })}
            </div>
            
        </div>
    );


};
