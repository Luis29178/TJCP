import React from "react";
import './_InputBar.css'

function InputBar ({ placeholder, data }) {


    return (
        <>
            
            
                <div className="Ibar">
                <input type="text"
                    placeholder={placeholder}
                />
                </div>
                <div className="Ibarborder"></div>
                
            
            
        </>


    )




}
export default InputBar;