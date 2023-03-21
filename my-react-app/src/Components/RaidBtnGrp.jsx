import React from "react";
import { Buttonnew } from "./newButton.jsx";

export function RaidMenuBtns() {



    return(
        <>


        <div className="btn3">
            <Buttonnew borderStyle={"discard"} onClick={() => { console.log("discard") }}> Leave</Buttonnew>
        </div>

        
        
        
        
        </>
    )
}