import { Grid } from "@mui/material";
import React from "react";
import { Buttonnew } from "./newButton";


class SelectMode extends React.Component {


    render() {

        return (
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: "#000000",
                    borderStyle: "solid",
                    height: "100vh",
                    width: "100vw",
                    background: "#0c0c0c"
                }}
            >
                <div style={{
                    alignSelf: "flex-start",
                    margin: "10px 0px 0px 10px"
                }}>
                    <Buttonnew borderStyle="back">{'<'}</Buttonnew>
                </div>
                <Grid container direction="column" spacing={4} justifyContent =  'center' alignItems="center">
                    <Grid item xs={12}>
                        <Buttonnew borderStyle="eft--create" onClick={() => {window.location.href ="/EFT"}}> Create</Buttonnew>

                    </Grid>
                    <Grid item xs={12}>
                        <Buttonnew borderStyle="eft--join" >Join</Buttonnew>

                    </Grid>
                    <Grid item xs={12}>
                        <Buttonnew borderStyle="eft--spectate"> Spectate</Buttonnew>

                    </Grid>
                </Grid>
            </div>

        )
    }



}

export default SelectMode;