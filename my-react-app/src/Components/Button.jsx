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

        <Button 
        className={`${checkbtnStyle} ${checkbtnSize}`} 
        onClick = {onClick} 
        type = {type}>

        {children}
        </Button>

    );


};