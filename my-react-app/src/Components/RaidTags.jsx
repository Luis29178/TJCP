import { DialogContent, Grid } from '@mui/material';
import React from 'react'
import tag1 from './Tags/SkullTag.png'
import './_RaidTags.css'


const Styles = [
    "raid--tg--basic",
]

const Sizes = [
    "raid--tg-medium"
]


export const Tags = ({
    style,
    size,
    tagList,
    keybinds
}) => {


    const checkbtnStyle =
        /* checks if passed in _buttonStyle is included in List [Styles] */
        Styles.includes(style)
            /* if it exsists set to _buttonStyle  */
            ? style
            /* else set to a style in list ie. default */
            : Styles[0];


    const checkbtnSize = Sizes.includes(size) ? size : Sizes[0]
    var canvasStyle = {

        backgroundImage: `url(${tag1})`,
        backgroundSize: "cover",
        height: "50px",
        width: "50px"

    }
    
    let keyBinds = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

    if(keybinds == undefined)
    {
        
    }
    else{
        keyBinds = keybinds;
    }


    return (

        
            <Grid container spacing={2}>
                <Grid container item spacing={3}>
                    
                    <div className='tag'>                      
                        <canvas style={canvasStyle}  onClick={() =>  { console.log("[0]") }}></canvas>
                        <p className='tagbind'>{keyBinds[0]}</p>     
                    </div>
                    <div className='tag'>
                        <canvas style={canvasStyle}  onClick={() =>  { console.log("[1]") }}></canvas>
                        <p className='tagbind'>{keyBinds[1]}</p>
                    </div>
                    <div className='tag'>
                        <canvas style={canvasStyle}  onClick={() =>  { console.log("[2]") }}></canvas>
                        <p className='tagbind'>{keyBinds[2]}</p>
                    </div>
                </Grid>
                <Grid container item spacing={3}>
                    <div className='tag'>
                        <canvas style={canvasStyle}  onClick={() =>  { console.log("[3]") }}></canvas>
                        <p className='tagbind'>{keyBinds[3]}</p>
                    </div>
                    <div className='tag'>
                        <canvas style={canvasStyle}  onClick={() =>  { console.log("[4]") }}></canvas>
                        <p className='tagbind'>{keyBinds[4]}</p>
                    </div>
                    <div className='tag'>
                        <canvas style={canvasStyle} onClick={() =>  { console.log("[5]") }}></canvas>
                        <p className='tagbind'>{keyBinds[5]}</p>
                    </div>
                </Grid>
                <Grid container item spacing={3}>
                    <div className='tag'>
                        <canvas style={canvasStyle} onClick={() =>  { console.log("[6]") }}></canvas>
                        <p className='tagbind'>{keyBinds[6]}</p>
                    </div>
                    <div className='tag'>
                        <canvas style={canvasStyle} onClick={() =>  { console.log("[7]") }}></canvas>
                        <p className='tagbind'>{keyBinds[7]}</p>
                    </div>
                    <div className='tag'>
                        <canvas style={canvasStyle} onClick={() =>  { console.log("[8]") }}></canvas>
                        <p className='tagbind'>{keyBinds[8]}</p>
                    </div>
                </Grid>
            </Grid>
           
       
    );


};