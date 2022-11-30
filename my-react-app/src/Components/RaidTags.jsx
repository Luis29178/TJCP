import React from 'react'

const Styles =[
    "raid--tg--basic",
]

const Sizes = [
    "raid--tg-medium"
]


export const Tags = ({
    style,
    size
}) => {


    const checkbtnStyle = 
    /* checks if passed in _buttonStyle is included in List [Styles] */
    Styles.includes(style) 
    /* if it exsists set to _buttonStyle  */
    ? style 
    /* else set to a style in list ie. default */
    : Styles[0];


    const checkbtnSize = Sizes.includes(size) ? size : Sizes[0]





    return (

        <div>
            complete Component in raidTags.jsx and styles.css
        </div>

    );


};