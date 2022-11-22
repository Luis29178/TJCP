import React from 'react'
import './_Button.css'

const Styles =[
    "btn--amber--solid",
    "btn--gray--solid",
    "btn--green--solid",
    "btn--red--solid",
    "btn--amber--outline",
    "btn--gray--outline",
    "btn--green--outline",
    "btn--red--outline",
]

const Sizes = [
    "btn--tiny",
    "btn--small",
    "btn--medium",
    "btn--menu",
    "btn--big",
    "btn--max",
]


export const _Button = ({
    _children,
    _type,
    _onClick,
    _buttonStyle,
    _size
}) => {


    const checkbtnStyle = 
    /* checks if passed in _buttonStyle is included in List [Styles] */
    Styles.includes(_buttonStyle) 
    /* if it exsists set to _buttonStyle  */
    ? _buttonStyle 
    /* else set to a style in list ie. default */
    : Styles[0];


    const checkbtnSize = Sizes.includes(_size) ? _size : Sizes[3]





    return (

        <button 
        className={`btn ${checkbtnStyle} ${checkbtnSize}`} 
        onClick = {_onClick} 
        type = {_type}>

        {_children}
        </button>

    );


};