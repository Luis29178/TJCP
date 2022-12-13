import {Grid } from "@mui/material";
import { Button } from "./Button";
import React from "react";

import { Children } from "react";
import './_SideBar.css'

class PathMenu extends React.Component {
    state = {

    }

    render() {

        return (

                
                <Grid container direction="column"  justifyContent="space-between"  alignItems="center" >
                    <Grid item xs ={4}>
                        <div>Menu</div>

                    </Grid>
                    <Grid item xs={4}>
                        <div>Path Name :</div>

                    </Grid>
                    <Grid item xs={4}>
                        <Grid container direction="column" spacing={1}>
                            <Grid item xs={4}>
                                <Button >
                                    Take To Raid
                                </Button >
                            </Grid>
                            <Grid item xs={4}>
                                <Button >
                                    Save
                                </Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button >
                                    Discard
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>


            
        )
    }

}
export default PathMenu;
