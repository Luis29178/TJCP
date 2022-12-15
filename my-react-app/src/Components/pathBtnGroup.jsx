import React from "react";
import {Grid } from "@mui/material";
import {Buttonnew} from "./newButton";

class PathButtons extends React.Component {


    render() {
        return(
        <Grid container direction="column" spacing={1}>
            <Grid item xs={4}>
                <Buttonnew borderStyle={"ttRaid"} onClick={() => { console.log("to Raid") }}> Take To Raid</Buttonnew>

            </Grid>
            <Grid item xs={4}>
                <Buttonnew borderStyle={"save"} onClick={() => { console.log("save") }}> Save</Buttonnew>

            </Grid>
            <Grid item xs={4}>
                <Buttonnew borderStyle={"discard"} onClick={() => { console.log("save") }}> Discard</Buttonnew>

            </Grid>
        </Grid>
        )

    }
}
export default PathButtons;