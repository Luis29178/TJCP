import { DialogContent, Grid } from '@mui/material';
import React from 'react'
import tag1 from './Tags/SkullTag.png';
import greenlight from './Tags/green_light.png';
import loot from './Tags/loot_icon.png';
import money from './Tags/money_icon.png';
import redlight from './Tags/red_light.png';
import './_RaidTags.css'
//import useSpring, useDrag, animate
import {useSpring, animated} from "react-spring"
import {useDrag} from "react-use-gesture"
import { useEffect, useState, useRef} from 'react';
import { red } from '@mui/material/colors';
import RaidTagKeybinds from './RaidTagKeybinds';


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

    
    const [image, setImage] = useState(false);
    const ref = useRef()
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

        if(e.key === " "){
            setImage(!image);
            const customEvent = new CustomEvent('build', { detail: { keyP: e.key } });
            document.dispatchEvent(customEvent);
        }
    }
    const [src, setSrc] = useState(tag1);
    const images = [tag1, greenlight, money, redlight , loot];
    let currentIndex0 = 1;
    let currentIndex1 = 1;
    let currentIndex2 = 1;
    let currentIndex3 = 1;
    let currentIndex4= 1;
    let currentIndex5 = 1;
    let currentIndex6 = 1;
    let currentIndex7 = 1;
    let currentIndex8 = 1;

    const [showDiv1, setShowDiv1] = useState(true);
    const toggleDiv1 = () => {
        setShowDiv1(!showDiv1);
    }
    const [showDiv2, setShowDiv2] = useState(true);
    const toggleDiv2 = () => {
        setShowDiv2(!showDiv2);
    }
    const [showDiv3, setShowDiv3] = useState(true);
    const toggleDiv3 = () => {
        setShowDiv3(!showDiv3);
    }
    const [showDiv4, setShowDiv4] = useState(true);
    const toggleDiv4 = () => {
        setShowDiv4(!showDiv4);
    }
    const [showDiv5, setShowDiv5] = useState(true);
    const toggleDiv5 = () => {
        setShowDiv5(!showDiv5);
    }
    const [showDiv6, setShowDiv6] = useState(true);
    const toggleDiv6 = () => {
        setShowDiv6(!showDiv6);
    }
    const [showDiv7, setShowDiv7] = useState(true);
    const toggleDiv7 = () => {
        setShowDiv7(!showDiv7);
    }
    const [showDiv8, setShowDiv8] = useState(true);
    const toggleDiv8 = () => {
        setShowDiv8(!showDiv8);
    }
    const [showDiv9, setShowDiv9] = useState(true);
    const toggleDiv9 = () => {
        setShowDiv9(!showDiv9);
    }

    return (

        
            <Grid container spacing={2}>
                <Grid container item spacing={3}>

                    <button style={{fontSize: '0.8rem'}} onClick={toggleDiv1}>remove Q</button>
                    <button style={{fontSize: '0.8rem'}} onClick={toggleDiv2}>remove W</button>
                    <button style={{fontSize: '0.8rem'}} onClick={toggleDiv3}>remove E</button>
                    <button style={{fontSize: '0.8rem'}} onClick={toggleDiv4}>remove A</button>
                    <button style={{fontSize: '0.8rem'}} onClick={toggleDiv5}>remove S</button>
                    <button style={{fontSize: '0.8rem'}} onClick={toggleDiv6}>remove D</button>
                    <button style={{fontSize: '0.8rem'}} onClick={toggleDiv7}>remove Z</button>
                    <button style={{fontSize: '0.8rem'}} onClick={toggleDiv8}>remove X</button>
                    <button style={{fontSize: '0.8rem'}} onClick={toggleDiv9}>remove C</button>



                    {showDiv1 ? <animated.div {...bindSkullPos0()} className='tag' style={{x: skullPos0.x, y: skullPos0.y}}>       
                    <canvas ref={ref} style=
                        {{
                            backgroundImage:`url(${src})`, backgroundSize: "cover", height: "50px", width: "50px",
                            top: "50px", left: "50px", zIndex: "10px", backgroundColor: "transparent" 
                        }} 
                        onClick={() => {if(image === true){document.getElementById('item0').style.backgroundImage = `url(${images[currentIndex0]})`; currentIndex0 = currentIndex0 + 1; if(currentIndex0 === 5){currentIndex0=0};}}}
                        id="item0"
                        >
                        </canvas>               
                        <RaidTagKeybinds keyBind={keyBinds[0]} tagID="tag1"></RaidTagKeybinds>    
                    </animated.div> : null}


                    {showDiv2 ? <animated.div {...bindSkullPos1()} className='tag' style={{x: skullPos1.x, y: skullPos1.y}}>                      
                        <canvas style={canvasStyle} onClick={() => {if(image === true){document.getElementById('item1').style.backgroundImage = `url(${images[currentIndex1]})`; currentIndex1 = currentIndex1 + 1; if(currentIndex1 === 5){currentIndex1=0};}}}
 
                        id="item1"
                        ></canvas>
                        <RaidTagKeybinds keyBind={keyBinds[1]} tagID="tag2" ></RaidTagKeybinds>     
                    </animated.div>: null}
                    { showDiv3 ? <animated.div {...bindSkullPos2()} className='tag' style={{x: skullPos2.x, y: skullPos2.y}}>                      
                    <canvas style={canvasStyle} onClick={() => {if(image === true){document.getElementById('item2').style.backgroundImage = `url(${images[currentIndex2]})`; currentIndex2 = currentIndex2 + 1;  if(currentIndex2 === 5){currentIndex2=0};}}}
                        id="item2"></canvas>
                        <RaidTagKeybinds keyBind={keyBinds[2]} tagID="tag3"></RaidTagKeybinds>   
                    </animated.div>: null}
                </Grid>
                <Grid container item spacing={3}>
                { showDiv4 ?<animated.div {...bindSkullPos3()} className='tag' style={{x: skullPos3.x, y: skullPos3.y}}>                      
                <canvas style={canvasStyle} onClick={() => {if(image === true){document.getElementById('item3').style.backgroundImage = `url(${images[currentIndex3]})`; currentIndex3 = currentIndex3 + 1;  if(currentIndex3 === 5){currentIndex3=0};}}}
                        id="item3"></canvas>
                        <RaidTagKeybinds keyBind={keyBinds[3]} tagID="tag4"></RaidTagKeybinds>   
                    </animated.div>: null}
                    { showDiv5 ? <animated.div {...bindSkullPos4()} className='tag' style={{x: skullPos4.x, y: skullPos4.y}}>                      
                    <canvas style={canvasStyle} onClick={() => {if(image === true){document.getElementById('item4').style.backgroundImage = `url(${images[currentIndex4]})`; currentIndex4 = currentIndex4 + 1;  if(currentIndex4 === 5){currentIndex4=0};}}}
                        id="item4"></canvas>
                        <RaidTagKeybinds keyBind={keyBinds[4]} tagID="tag5"></RaidTagKeybinds>   
                    </animated.div>: null}
                    { showDiv6 ? <animated.div {...bindSkullPos5()} className='tag' style={{x: skullPos5.x, y: skullPos5.y}}>                      
                    <canvas style={canvasStyle} onClick={() => {if(image === true){document.getElementById('item5').style.backgroundImage = `url(${images[currentIndex5]})`; currentIndex5 = currentIndex5 + 1;  if(currentIndex5 === 5){currentIndex5=0};}}}
                        id="item5"></canvas>
                        <RaidTagKeybinds keyBind={keyBinds[5]} tagID="tag6"></RaidTagKeybinds>    
                    </animated.div>: null}
                </Grid>
                <Grid container item spacing={3}>
                { showDiv7 ? <animated.div {...bindSkullPos6()} className='tag' style={{x: skullPos6.x, y: skullPos6.y}}>                      
                <canvas style={canvasStyle} onClick={() => {if(image === true){document.getElementById('item6').style.backgroundImage = `url(${images[currentIndex6]})`; currentIndex6 = currentIndex6 + 1;  if(currentIndex6 === 5){currentIndex6=0};}}}
                        id="item6"></canvas>
                        <RaidTagKeybinds keyBind={keyBinds[6]} tagID="tag7"></RaidTagKeybinds>   
                    </animated.div>: null}
                    { showDiv8 ? <animated.div {...bindSkullPos7()} className='tag' style={{x: skullPos7.x, y: skullPos7.y}}>                      
                    <canvas style={canvasStyle} onClick={() => {if(image === true){document.getElementById('item7').style.backgroundImage = `url(${images[currentIndex7]})`; currentIndex7 = currentIndex7 + 1;  if(currentIndex7 === 5){currentIndex7=0};}}}
                        id="item7"></canvas>
                        <RaidTagKeybinds keyBind={keyBinds[7]} tagID="tag8"></RaidTagKeybinds>  
                    </animated.div>: null}
                    { showDiv9 ? <animated.div {...bindSkullPos8()} className='tag' style={{x: skullPos8.x, y: skullPos8.y}}>                      
                    <canvas style={canvasStyle} onClick={() => {if(image === true){document.getElementById('item8').style.backgroundImage = `url(${images[currentIndex8]})`; currentIndex8 = currentIndex8 + 1;  if(currentIndex8 === 5){currentIndex8=0};}}}
                        id="item8"></canvas>

                       <RaidTagKeybinds keyBind={keyBinds[8]} tagID="tag9"></RaidTagKeybinds>
                        
                        
                           
                    </animated.div>: null}
                </Grid>
            </Grid>
           
       
    );


};