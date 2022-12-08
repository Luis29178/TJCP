import React from "react";
import './_SearchBar.css'

function SerchBar({ placeholder, data }) {
    return (
        <>
            
            
                <div className="Sbar">
                <input type="text"
                    placeholder={placeholder}
                />
                </div>
                <div className="Sbarborder"></div>
                
            
            
        </>


    )




}
export default SerchBar;