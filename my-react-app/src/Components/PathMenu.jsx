import {Grid } from "@mui/material";
import React from "react";
import PathButtons from './pathBtnGroup'
import './_SideBar.css'

class PathMenu extends React.Component {
    state = {
        

    }

    render() {

        return (

                
                <Grid container direction="column" justifyContent="space-between"  alignItems="center" >
                    <Grid item xs ={12} marginBottom ={4}>
                        <div style={tittel}>Path Creator</div>

                    </Grid>
                    <Grid item xs={12} marginTop={25} marginBottom={25} maxHeight={50}>
                        <div style={pathname}>Path Name : sample</div>

                    </Grid>
                    <Grid item xs={12}>
                        <PathButtons/>
                    </Grid>
                </Grid>


            
        )
    }

}
export default PathMenu;
var tittel ={
    fontSize: "30px",

}
var pathname = {
    fontSize: "20px",
}
