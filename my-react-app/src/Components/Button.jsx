
import React from 'react'
import './_Button.css'

const Styles =[
    "btn--Log--basic",
    "btn--Menu--outline",
    "btn--Maps--basic",
    "btn--x--basic",
]

const Sizes = [
    "btn--tiny",
    "btn--maps",
    "btn--small",
    "btn--medium",
    "btn--menu",
    "btn--big",
    "btn--max",
    "btn--x"
]


export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    size
}) => {


    const checkbtnStyle = 
    /* checks if passed in _buttonStyle is included in List [Styles] */
    Styles.includes(buttonStyle) 
    /* if it exsists set to _buttonStyle  */
    ? buttonStyle 
    /* else set to a style in list ie. default */
    : Styles[0];


    const checkbtnSize = Sizes.includes(size) ? size : Sizes[3]





    return (

        <button 
        className={`btn ${checkbtnStyle} ${checkbtnSize}`} 
        onClick = {onClick} 
        type = {type}>
        {children}
        </button>

    );


};
