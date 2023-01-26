import { useState } from 'react';
import { useDrag } from 'react-use-gesture';
import { GARBAdvanced } from './GARBset.jsx';

import "./_GarbPopUp.css"

export function GARBpopUp(props) {
    const [GarbPos, setGarbPos] = useState({ x: 0, y: 0 });
    const bindGarb = useDrag((params) => {
        console.log(params.offset[0],params.offset[1])
        setGarbPos({
            x: params.offset[0],
            y: params.offset[1]
        })

    });

    const func = () => props.OnClick().bind(this)


    return (
        <div {...bindGarb()}
            className="GARBpopUpBox"
            style={{
                position: 'relative',
                top: GarbPos.y,
                left: GarbPos.x
            }}>
            <GARBAdvanced OnClick = {() => func().bind(this)}></GARBAdvanced>
        </div>
    );
}