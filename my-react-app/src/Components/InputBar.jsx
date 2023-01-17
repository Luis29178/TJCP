import React from "react";
import './_InputBar.css'

function InputBar (props) {


    return (
        <>
            
            
                <div className="Ibar">
                <input type="text" onChange={props.handleChange}
                />
                </div>
                <div className="Ibarborder"></div>
                
            
            
        </>


    )




}
export default InputBar;