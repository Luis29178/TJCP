import React from "react";
import './_InputBar.css'

function InputBar (props) {


    return (
        <div style={{width:600}}>
            
            
                <div className="Ibar">
                <input type="text" onChange={props.handleChange}
                />
                </div>
                <div className="Ibarborder"></div>
                
            
            
        </div>


    )




}
export default InputBar;