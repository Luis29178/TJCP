import React from "react";
import { Buttonnew } from "./newButton.jsx";

import 'firebase/compat/auth';
import { RaidContext } from "..";

function PathMenuBtns() {
    const pathController = React.useContext(RaidContext);




    return (<>

        <div className="btn1">
            <Buttonnew borderStyle={"ttRaid"} onClick={() => { console.log("to Raid") }}> Take To Raid</Buttonnew>
        </div>
        <div className="btn2">
            <Buttonnew borderStyle={"save"} onClick={console.log("to Raid")}> Save</Buttonnew>
        </div>
        <div className="btn3">
            <Buttonnew borderStyle={"discard"} onClick={() => { console.log("discard") }}> Discard</Buttonnew>
        </div>

    </>);
}

export default PathMenuBtns;