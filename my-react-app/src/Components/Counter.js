import React from "react";
import {useState} from 'react';
import '../Counter.css';

function Counter(){
    let count = 0;
    const [currentstate, updatedstate] = useState(count);
    const handleclick = () => {
        updatedstate(currentstate+1);
    };
    return(<>
    <div className="counter_parent">
        <div className="main-div">
            <h3>Counter</h3>
            <button onClick={handleclick}>{currentstate}</button>
        </div>
    </div>
    </>
    );

}
export default Counter;