import React from "react";
import './_ItemButton.css'

function ItemButton({ onClick, children, btnStyle, borderStyle }) {
    return (
        <>

                <div className="ibtn">
                
                <button 
                    className={`${btnStyle}`}
                    type="button"
                    onClick={onClick}
                ></button>
                <div className={`${borderStyle}`}>{children}</div>
                
                </div>
            
                

        </>


    )




}
export default ItemButton;