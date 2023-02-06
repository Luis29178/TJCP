import { DialogContent, Grid } from '@mui/material';
import React from 'react'
import tag1 from './Tags/SkullTag.png';
import greenlight from './Tags/green_light.png';
import loot from './Tags/loot_icon.png';
import money from './Tags/money_icon.png';
import redlight from './Tags/red_light.png';
import './_RaidTags.css'
import {useSpring, animated} from "react-spring"
import {useDrag} from "react-use-gesture"
import { useEffect, useState} from 'react';
import RaidTagKeybinds from './RaidTagKeybinds';
import { RaidContext } from "..";


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
    const images = [tag1, greenlight, money, redlight , loot];
    const [image, setImage] = useState(false);
    const RaidController = React.useContext(RaidContext); 
    var playerNumber = localStorage.getItem("playerNumber");
    var mapStateDb = localStorage.getItem("mapState");
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

    let currentIndex0 = 1;
    const skullPos0 = useSpring({x: 0, y:0});
    const bindSkullPos0 = useDrag((params) => {
        // if component is dragging then set the x and y to the mouse position
        if(params.active){
            skullPos0.x.set(params.offset[0]);
            skullPos0.y.set(params.offset[1]);
        }
        else{
            placeTag0();
        }
    })
    function placeTag0(){
        RaidController.placeOnMap({
            player: playerNumber,
            type: "item0",
            post: `${skullPos0.x.get()},${skullPos0.y.get()}`,
            tag : 0,
            timestamp:Date.now()
        })
    }
    const toggleDiv0 = () => {
        skullPos0.x = skullPos0.x.set(0);
        skullPos0.y = skullPos0.y.set(0);
        // document.getElementById('item0').style.x = "0px";
        // document.getElementById('item0').style.y = "0px";
}

    let currentIndex1 = 1;
    const skullPos1 = useSpring({x: 0, y:0});
    const bindSkullPos1 = useDrag((params) => {
        if(params.active){
            skullPos1.x.set(params.offset[0]);
            skullPos1.y.set(params.offset[1]);
        }
        else{
            placeTag1();
        }

    })
    function placeTag1(){
        RaidController.placeOnMap({
            player: playerNumber,
            type: "item1",
            post: `${skullPos1.x.get()},${skullPos1.y.get()}`,
            tag : 1,
            timestamp:Date.now()
        })
    }
    const toggleDiv1 = () => {
        skullPos1.x.set(0);
        skullPos1.y.set(0);
    }

    let currentIndex2 = 1;
    const skullPos2 = useSpring({x: 0, y:0});
    const bindSkullPos2 = useDrag((params) => {
        if(params.active){
            skullPos2.x.set(params.offset[0]);
            skullPos2.y.set(params.offset[1]);
        }
        else{
            placeTag2();
        }
    })
    function placeTag2(){
        RaidController.placeOnMap({
            player: playerNumber,
            type: "item2",
            post: `${skullPos2.x.get()},${skullPos2.y.get()}`,
            tag : 2,
            timestamp:Date.now()
        })
    }
    const toggleDiv2 = () => {
        skullPos2.x.set(0);
        skullPos2.y.set(0);
    }

    let currentIndex3 = 1;
    const skullPos3 = useSpring({x: 0, y:0});
    const bindSkullPos3 = useDrag((params) => {
        if(params.active){
            skullPos3.x.set(params.offset[0]);
            skullPos3.y.set(params.offset[1]);
        }
        else{
            placeTag3();
        }
    })
    function placeTag3(){
        RaidController.placeOnMap({
            player: playerNumber,
            type: "item3",
            post: `${skullPos3.x.get()},${skullPos3.y.get()}`,
            tag : 3,
            timestamp:Date.now()
        })
    }
    const toggleDiv3 = () => {
        skullPos3.x.set(0);
        skullPos3.y.set(0);
    }

    let currentIndex4= 1;
    const skullPos4 = useSpring({x: 0, y:0});
    const bindSkullPos4 = useDrag((params) => {
        if(params.active){
            skullPos4.x.set(params.offset[0]);
            skullPos4.y.set(params.offset[1]);
        }
        else{
            placeTag4();
        }
    })
    function placeTag4(){
        RaidController.placeOnMap({
            player: playerNumber,
            type: "item4",
            post: `${skullPos4.x.get()},${skullPos4.y.get()}`,
            tag : 4,
            timestamp:Date.now()
        })
    }
    const toggleDiv4 = () => {
        skullPos4.x.set(0);
        skullPos4.y.set(0);
    }

    let currentIndex5 = 1;
    const skullPos5 = useSpring({x: 0, y:0});
    const bindSkullPos5 = useDrag((params) => {
        if(params.active){
            skullPos5.x.set(params.offset[0]);
            skullPos5.y.set(params.offset[1]);
        }
        else{
            placeTag5();
        }
    })
    function placeTag5(){
        RaidController.placeOnMap({
            player: playerNumber,
            type: "item5",
            post: `${skullPos5.x.get()},${skullPos5.y.get()}`,
            tag : 5,
            timestamp:Date.now()
        })
    }
    const toggleDiv5 = () => {
        skullPos5.x.set(0);
        skullPos5.y.set(0);
    }

    let currentIndex6 = 1;
    const skullPos6 = useSpring({x: 0, y:0});
    const bindSkullPos6 = useDrag((params) => {
        if(params.active){
            skullPos6.x.set(params.offset[0]);
            skullPos6.y.set(params.offset[1]);
        }
        else{
            placeTag6();
        }
    })
    function placeTag6(){
        RaidController.placeOnMap({
            player: playerNumber,
            type: "item6",
            post: `${skullPos6.x.get()},${skullPos6.y.get()}`,
            tag : 6,
            timestamp:Date.now()
        })
    }
    const toggleDiv6 = () => {
        skullPos6.x.set(0);
        skullPos6.y.set(0);
    }

    let currentIndex7 = 1;
    const skullPos7 = useSpring({x: 0, y:0});
    const bindSkullPos7 = useDrag((params) => {
        if(params.active){
            skullPos7.x.set(params.offset[0]);
            skullPos7.y.set(params.offset[1]);
        }
        else{
            placeTag7();
        }
    })
    function placeTag7(){
        RaidController.placeOnMap({
            player: playerNumber,
            type: "item7",
            post: `${skullPos7.x.get()},${skullPos7.y.get()}`,
            tag : 7,
            timestamp:Date.now()
        })
    }
    const toggleDiv7 = () => {
        skullPos7.x.set(0);
        skullPos7.y.set(0);
    }

    let currentIndex8 = 1;
    const skullPos8 = useSpring({x: 0, y:0});
    const bindSkullPos8 = useDrag((params) => {
        if(params.active){
            skullPos8.x.set(params.offset[0]);
            skullPos8.y.set(params.offset[1]);
        }
        else{
            placeTag8();
        }
    })
    function placeTag8(){
        RaidController.placeOnMap({
            player: playerNumber,
            type: "item8",
            post: `${skullPos8.x.get()},${skullPos8.y.get()}`,
            tag : 8,
            timestamp:Date.now()
        })
    }
    const toggleDiv8 = () => {
        skullPos8.x.set(0);
        skullPos8.y.set(0);
    }
    
    useEffect(() => {
        document.addEventListener('keydown', detectKeyDown, true)
        return () => {
            document.removeEventListener('keydown', detectKeyDown, true)
        }
    }, [])

    const detectKeyDown = (e) => {
        if(e.key === "q"){
            
            // skullPos0.x.set(e.offset[0]);
            // skullPos0.y.set(e.offset[1]);
            console.log('clicked: q');
            const customEvent = new CustomEvent('build', { detail: { keyP: e.key } });
            document.dispatchEvent(customEvent);
        }
        else if(e.key === "w"){
            console.log('pressed: W')
            const customEvent = new CustomEvent('build', { detail: { keyP: e.key } });
            document.dispatchEvent(customEvent);
        }    
        else if(e.key === " "){  
            setImage(!image);
        }
    }
    return (

        
            <Grid container spacing={2}>
                <Grid container item spacing={3}>
                    <button style={{fontSize: '0.8rem'}} onClick={toggleDiv0}>remove L</button>
                    <button style={{fontSize: '0.8rem'}} onClick={toggleDiv1}>remove T</button>
                    <button style={{fontSize: '0.8rem'}} onClick={toggleDiv2}>remove Q</button>
                    <button style={{fontSize: '0.8rem'}} onClick={toggleDiv3}>remove A</button>
                    <button style={{fontSize: '0.8rem'}} onClick={toggleDiv4}>remove H</button>
                    <button style={{fontSize: '0.8rem'}} onClick={toggleDiv5}>remove D</button>
                    <button style={{fontSize: '0.8rem'}} onClick={toggleDiv6}>remove M</button>
                    <button style={{fontSize: '0.8rem'}} onClick={toggleDiv7}>remove G</button>
                    <button style={{fontSize: '0.8rem'}} onClick={toggleDiv8}>remove C</button>
                    <animated.div {...bindSkullPos0()} className='tag' style={{x: skullPos0.x, y: skullPos0.y}}>   
                    <canvas style={canvasStyle} onClick={() => {if(image === true){document.getElementById('item0').style.backgroundImage = `url(${images[currentIndex0]})`; currentIndex0 = currentIndex0 + 1; if(currentIndex0 === 5){currentIndex0=0};}}}
                        id="item0"
                        >
                        </canvas>
                        <RaidTagKeybinds keyBind={keyBinds[0]} tagID="tag1"></RaidTagKeybinds>    
                    </animated.div>
                    <animated.div {...bindSkullPos1()} className='tag' style={{x: skullPos1.x, y: skullPos1.y}}>                      
                        <canvas style={canvasStyle} onClick={() => {if(image === true){document.getElementById('item1').style.backgroundImage = `url(${images[currentIndex1]})`; currentIndex1 = currentIndex1 + 1; if(currentIndex1 === 5){currentIndex1=0};}}}
                        id="item1"
                        ></canvas>
                        <RaidTagKeybinds keyBind={keyBinds[1]} tagID="tag2" ></RaidTagKeybinds>     
                    </animated.div>
                    <animated.div {...bindSkullPos2()} className='tag' style={{x: skullPos2.x, y: skullPos2.y}}>                      
                    <canvas style={canvasStyle} onClick={() => {if(image === true){document.getElementById('item2').style.backgroundImage = `url(${images[currentIndex2]})`; currentIndex2 = currentIndex2 + 1;  if(currentIndex2 === 5){currentIndex2=0};}}}
                        id="item2"></canvas>
                        <RaidTagKeybinds keyBind={keyBinds[2]} tagID="tag3"></RaidTagKeybinds>   
                    </animated.div>
                </Grid>
                <Grid container item spacing={3}>
                <animated.div {...bindSkullPos3()} className='tag' style={{x: skullPos3.x, y: skullPos3.y}}>                      
                <canvas style={canvasStyle} onClick={() => {if(image === true){document.getElementById('item3').style.backgroundImage = `url(${images[currentIndex3]})`; currentIndex3 = currentIndex3 + 1;  if(currentIndex3 === 5){currentIndex3=0};}}}
                        id="item3"></canvas>
                        <RaidTagKeybinds keyBind={keyBinds[3]} tagID="tag4"></RaidTagKeybinds>   
                    </animated.div>
                    <animated.div {...bindSkullPos4()} className='tag' style={{x: skullPos4.x, y: skullPos4.y}}>                      
                    <canvas style={canvasStyle} onClick={() => {if(image === true){document.getElementById('item4').style.backgroundImage = `url(${images[currentIndex4]})`; currentIndex4 = currentIndex4 + 1;  if(currentIndex4 === 5){currentIndex4=0};}}}
                        id="item4"></canvas>
                        <RaidTagKeybinds keyBind={keyBinds[4]} tagID="tag5"></RaidTagKeybinds>   
                    </animated.div>
                    <animated.div {...bindSkullPos5()} className='tag' style={{x: skullPos5.x, y: skullPos5.y}}>                      
                    <canvas style={canvasStyle} onClick={() => {if(image === true){document.getElementById('item5').style.backgroundImage = `url(${images[currentIndex5]})`; currentIndex5 = currentIndex5 + 1;  if(currentIndex5 === 5){currentIndex5=0};}}}
                        id="item5"></canvas>
                        <RaidTagKeybinds keyBind={keyBinds[5]} tagID="tag6"></RaidTagKeybinds>    
                    </animated.div>
                </Grid>
                <Grid container item spacing={3}>
                <animated.div {...bindSkullPos6()} className='tag' style={{x: skullPos6.x, y: skullPos6.y}}>                      
                <canvas style={canvasStyle} onClick={() => {if(image === true){document.getElementById('item6').style.backgroundImage = `url(${images[currentIndex6]})`; currentIndex6 = currentIndex6 + 1;  if(currentIndex6 === 5){currentIndex6=0};}}}
                        id="item6"></canvas>
                        <RaidTagKeybinds keyBind={keyBinds[6]} tagID="tag7"></RaidTagKeybinds>   
                    </animated.div>
                    <animated.div {...bindSkullPos7()} className='tag' style={{x: skullPos7.x, y: skullPos7.y}}>                      
                    <canvas style={canvasStyle} onClick={() => {if(image === true){document.getElementById('item7').style.backgroundImage = `url(${images[currentIndex7]})`; currentIndex7 = currentIndex7 + 1;  if(currentIndex7 === 5){currentIndex7=0};}}}
                        id="item7"></canvas>
                        <RaidTagKeybinds keyBind={keyBinds[7]} tagID="tag8"></RaidTagKeybinds>  
                    </animated.div>
                    <animated.div {...bindSkullPos8()} className='tag' style={{x: skullPos8.x, y: skullPos8.y}}>                      
                    <canvas style={canvasStyle} onClick={() => {if(image === true){document.getElementById('item8').style.backgroundImage = `url(${images[currentIndex8]})`; currentIndex8 = currentIndex8 + 1;  if(currentIndex8 === 5){currentIndex8=0};}}}
                        id="item8"></canvas>
                       <RaidTagKeybinds keyBind={keyBinds[8]} tagID="tag9"></RaidTagKeybinds>    
                    </animated.div>
                </Grid>
            </Grid>
    );
};