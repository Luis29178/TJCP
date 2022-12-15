import { DialogContent, Grid } from '@mui/material';
import React from 'react'
import tag1 from './Tags/SkullTag.png'
import './_RaidTags.css'
//import useSpring, useDrag, animate
import {useSpring, animated} from "react-spring"
import {useDrag} from "react-use-gesture"
import { useEffect } from 'react';


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
        width: "50px",
        top: "50px",
        left: "50px"
        

    }
    
    let keyBinds = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

    if(keybinds == undefined)
    {
        
    }
    else{
        keyBinds = keybinds;
    }

    const skullPos0 = useSpring({x: 0, y:0});

    const bindSkullPos0 = useDrag((params) => {
        skullPos0.x.set(params.offset[0]);
        skullPos0.y.set(params.offset[1]);
    })

    const skullPos1 = useSpring({x: 0, y:0});

    const bindSkullPos1 = useDrag((params) => {
        skullPos1.x.set(params.offset[0]);
        skullPos1.y.set(params.offset[1]);
    })

    const skullPos2 = useSpring({x: 0, y:0});

    const bindSkullPos2 = useDrag((params) => {
        skullPos2.x.set(params.offset[0]);
        skullPos2.y.set(params.offset[1]);
    })

    const skullPos3 = useSpring({x: 0, y:0});

    const bindSkullPos3 = useDrag((params) => {
        skullPos3.x.set(params.offset[0]);
        skullPos3.y.set(params.offset[1]);
    })

    const skullPos4 = useSpring({x: 0, y:0});

    const bindSkullPos4 = useDrag((params) => {
        skullPos4.x.set(params.offset[0]);
        skullPos4.y.set(params.offset[1]);
    })

    const skullPos5 = useSpring({x: 0, y:0});

    const bindSkullPos5 = useDrag((params) => {
        skullPos5.x.set(params.offset[0]);
        skullPos5.y.set(params.offset[1]);
    })

    const skullPos6 = useSpring({x: 0, y:0});

    const bindSkullPos6 = useDrag((params) => {
        skullPos6.x.set(params.offset[0]);
        skullPos6.y.set(params.offset[1]);
    })

    const skullPos7 = useSpring({x: 0, y:0});

    const bindSkullPos7 = useDrag((params) => {
        skullPos7.x.set(params.offset[0]);
        skullPos7.y.set(params.offset[1]);
    })

    const skullPos8 = useSpring({x: 0, y:0});

    const bindSkullPos8 = useDrag((params) => {
        skullPos8.x.set(params.offset[0]);
        skullPos8.y.set(params.offset[1]);
    })

    useEffect(() => {
        document.addEventListener('keydown', detectKeyDown, true)
    }, [])

    const detectKeyDown = (e) => {
        if(e.key === "q"){
            
            // skullPos0.x.set(e.offset[0]);
            // skullPos0.y.set(e.offset[1]);
            console.log('clicked: q');
            const customEvent = new CustomEvent('build', { detail: { keyP: e.key } });
            document.dispatchEvent(customEvent);
        }
        if(e.key === "w"){
            console.log('pressed: W')
            const customEvent = new CustomEvent('build', { detail: { keyP: e.key } });
            document.dispatchEvent(customEvent);
        }

        
    }



    // function keydownevent()
	// {
	// 	document.getElementById("test");
	// 	alert("Pressed a key");
	// }

    return (

        
            <Grid container spacing={2}>
                <Grid container item spacing={3}>
                    
                    <animated.div {...bindSkullPos0()} id="item0" className='tag' style={{x: skullPos0.x, y: skullPos0.y}}>                      
                        <canvas style={canvasStyle}  onClick={() =>  { console.log("[0]") }}></canvas>
                        <p className='tagbind'>{keyBinds[0]}</p>     
                    </animated.div>


                    <animated.div {...bindSkullPos1()} className='tag' style={{x: skullPos1.x, y: skullPos1.y}}>                      
                        <canvas style={canvasStyle}  onClick={() =>  { console.log("[1]") }}></canvas>
                        <p className='tagbind'>{keyBinds[1]}</p>     
                    </animated.div>
                    <animated.div {...bindSkullPos2()} className='tag' style={{x: skullPos2.x, y: skullPos2.y}}>                      
                        <canvas style={canvasStyle}  onClick={() =>  { console.log("[2]") }}></canvas>
                        <p className='tagbind'>{keyBinds[2]}</p>     
                    </animated.div>
                </Grid>
                <Grid container item spacing={3}>
                <animated.div {...bindSkullPos3()} className='tag' style={{x: skullPos3.x, y: skullPos3.y}}>                      
                        <canvas style={canvasStyle}  onClick={() =>  { console.log("[3]") }}></canvas>
                        <p className='tagbind'>{keyBinds[3]}</p>     
                    </animated.div>
                    <animated.div {...bindSkullPos4()} className='tag' style={{x: skullPos4.x, y: skullPos4.y}}>                      
                        <canvas style={canvasStyle}  onClick={() =>  { console.log("[4]") }}></canvas>
                        <p className='tagbind'>{keyBinds[4]}</p>     
                    </animated.div>
                    <animated.div {...bindSkullPos5()} className='tag' style={{x: skullPos5.x, y: skullPos5.y}}>                      
                        <canvas style={canvasStyle}  onClick={() =>  { console.log("[5]") }}></canvas>
                        <p className='tagbind'>{keyBinds[5]}</p>     
                    </animated.div>
                </Grid>
                <Grid container item spacing={3}>
                <animated.div {...bindSkullPos6()} className='tag' style={{x: skullPos6.x, y: skullPos6.y}}>                      
                        <canvas style={canvasStyle}  onClick={() =>  { console.log("[6]") }}></canvas>
                        <p className='tagbind'>{keyBinds[6]}</p>     
                    </animated.div>
                    <animated.div {...bindSkullPos7()} className='tag' style={{x: skullPos7.x, y: skullPos7.y}}>                      
                        <canvas style={canvasStyle}  onClick={() =>  { console.log("[7]") }}></canvas>
                        <p className='tagbind'>{keyBinds[7]}</p>     
                    </animated.div>
                    <animated.div {...bindSkullPos8()} className='tag' style={{x: skullPos8.x, y: skullPos8.y}}>                      
                        <canvas style={canvasStyle}  onClick={() =>  { console.log("[8]") }}></canvas>
                        <p className='tagbind'>{keyBinds[8]}</p>     
                    </animated.div>
                </Grid>
            </Grid>
           
       
    );


};