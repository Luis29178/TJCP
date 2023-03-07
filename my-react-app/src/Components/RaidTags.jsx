import { DialogContent, Grid } from '@mui/material';
import React from 'react'
import greenlight from './Tags/green_light.png';
import loot from './Tags/loot_icon.png';
import money from './Tags/money_icon.png';
import redlight from './Tags/red_light.png';
import './_RaidTags.css'
import {useSpring, animated} from "react-spring"
import {useDrag} from "react-use-gesture"
import { useEffect, useRef, useState} from 'react';
import RaidTagKeybinds from './RaidTagKeybinds';
import { RaidContext } from "..";

// Cursor Tags
import cursor from "./Tags/cursor.png";
import cursor1 from "./Tags/cursor1.png";
import cursor2 from "./Tags/cursor2.png";
import cursor3 from "./Tags/cursor3.png";
import cursor4 from "./Tags/cursor4.png";
import cursor5 from "./Tags/cursor5.png";
import cursor6 from "./Tags/cursor6.png";
import cursor7 from "./Tags/cursor7.png";
import cursor8 from "./Tags/cursor8.png";




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
    const images = [cursor, greenlight, money, redlight , loot];
    const [image, setImage] = useState(false);
    //const ref = useRef()
    const checkbtnStyle =
        /* checks if passed in _buttonStyle is included in List [Styles] */
        Styles.includes(style)
            /* if it exsists set to _buttonStyle  */
            ? style
            /* else set to a style in list ie. default */
            : Styles[0];


    const checkbtnSize = Sizes.includes(size) ? size : Sizes[0]

    var getTagStyle = (tagID) => {
        return {

            backgroundImage: `url(${tagID})`,
            backgroundSize: "cover",
            height: "50px",
            width: "50px",
            top: "50px",
            left: "50px"
            
    
        }
    }


    const RaidController = React.useContext(RaidContext); 
    var playerNumber = localStorage.getItem("playerNumber");
    var mapStateDb = localStorage.getItem("mapState");
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
        RaidController.placeTagOnMap(0,`${skullPos0.x.get()},${skullPos0.y.get()}`)
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
        RaidController.placeTagOnMap(1,`${skullPos1.x.get()},${skullPos1.y.get()}`)

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
        RaidController.placeTagOnMap(2,`${skullPos2.x.get()},${skullPos2.y.get()}`)
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

        RaidController.placeTagOnMap(3,`${skullPos3.x.get()},${skullPos3.y.get()}`)

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
        RaidController.placeTagOnMap(4,`${skullPos4.x.get()},${skullPos4.y.get()}`)

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
        RaidController.placeTagOnMap(5,`${skullPos5.x.get()},${skullPos5.y.get()}`)

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
        RaidController.placeTagOnMap(6,`${skullPos6.x.get()},${skullPos6.y.get()}`)
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
        RaidController.placeTagOnMap(7,`${skullPos7.x.get()},${skullPos7.y.get()}`)

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
        RaidController.placeTagOnMap(8,`${skullPos8.x.get()},${skullPos8.y.get()}`)

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
                    {/* <button style={{fontSize: '0.8rem'}} onClick={toggleDiv0}>remove L</button>
                    <button style={{fontSize: '0.8rem'}} onClick={toggleDiv1}>remove T</button>
                    <button style={{fontSize: '0.8rem'}} onClick={toggleDiv2}>remove Q</button>
                    <button style={{fontSize: '0.8rem'}} onClick={toggleDiv3}>remove A</button>
                    <button style={{fontSize: '0.8rem'}} onClick={toggleDiv4}>remove H</button>
                    <button style={{fontSize: '0.8rem'}} onClick={toggleDiv5}>remove D</button>
                    <button style={{fontSize: '0.8rem'}} onClick={toggleDiv6}>remove M</button>
                    <button style={{fontSize: '0.8rem'}} onClick={toggleDiv7}>remove G</button>
                    <button style={{fontSize: '0.8rem'}} onClick={toggleDiv8}>remove C</button> */}
                    <animated.div className='tag'>   
                    <canvas style={{...getTagStyle(cursor), border: '2px solid green', padding: '5px'}}
                        id="item0"
                        >
                        </canvas>
                        <RaidTagKeybinds keyBind={keyBinds[0]} tagImg={cursor} tagID="tag0"></RaidTagKeybinds>    
                    </animated.div>
                    <animated.div className='tag'>                      
                        <canvas style={{...getTagStyle(cursor1), border: '2px solid green', marginLeft: '2px', padding: '5px'}} 
                        id="item1"
                        ></canvas>
                        <RaidTagKeybinds keyBind={keyBinds[1]}  tagImg={cursor1} tagID="tag1" ></RaidTagKeybinds>     
                    </animated.div>
                    <animated.div className='tag'>                      
                    <canvas style={{...getTagStyle(cursor2), border: '2px solid green', marginLeft: '2px', padding: '5px'}} 
                        id="item2"></canvas>
                        <RaidTagKeybinds keyBind={keyBinds[2]}  tagImg={cursor2} tagID="tag2"></RaidTagKeybinds>   
                    </animated.div>
                </Grid>
                <Grid container item spacing={3}>
                <animated.div className='tag'>                      
                <canvas style={{...getTagStyle(cursor3), border: '2px solid green', marginLeft: '2px', padding: '5px'}} 
                        id="item3"></canvas>
                        <RaidTagKeybinds keyBind={keyBinds[3]} tagImg={cursor3} tagID="tag3"></RaidTagKeybinds>   
                    </animated.div>
                    <animated.div className='tag'>                      
                    <canvas style={{...getTagStyle(cursor4), border: '2px solid green', marginLeft: '2px', padding: '5px'}} 
                        id="item4"></canvas>
                        <RaidTagKeybinds keyBind={keyBinds[4]} tagImg={cursor4} tagID="tag4"></RaidTagKeybinds>   
                    </animated.div>
                    <animated.div className='tag'>                      
                    <canvas style={{...getTagStyle(cursor5), border: '2px solid green', marginLeft: '2px', padding: '5px'}} 
                        id="item5"></canvas>
                        <RaidTagKeybinds keyBind={keyBinds[5]} tagImg={cursor5} tagID="tag5"></RaidTagKeybinds>    
                    </animated.div>
                </Grid>
                <Grid container item spacing={3}>
                <animated.div className='tag'>                      
                <canvas style={{...getTagStyle(cursor6), border: '2px solid green', marginLeft: '2px', padding: '5px'}} 
                        id="item6"></canvas>
                        <RaidTagKeybinds keyBind={keyBinds[6]} tagImg={cursor6} tagID="tag6"></RaidTagKeybinds>   
                    </animated.div>
                    <animated.div className='tag'>                      
                    <canvas style={{...getTagStyle(cursor7), border: '2px solid green', marginLeft: '2px', padding: '5px'}} 
                        id="item7"></canvas>
                        <RaidTagKeybinds keyBind={keyBinds[7]} tagImg={cursor7} tagID="tag7"></RaidTagKeybinds>  
                    </animated.div>
                    <animated.div className='tag'>                      
                    <canvas style={{...getTagStyle(cursor8), border: '2px solid green', marginLeft: '2px', padding: '5px'}} 
                        id="item8"></canvas>
                       <RaidTagKeybinds keyBind={keyBinds[8]} tagImg={cursor8} tagID="tag8"></RaidTagKeybinds>    
                    </animated.div>
                </Grid>
            </Grid>
    );
};