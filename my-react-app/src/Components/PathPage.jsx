import { Grid } from "@mui/material";
import MapCanvas from "./MapCanvas.js"
import { Tags } from "./RaidTags.jsx"
import React from "react";
import SideBar from "./SideBar.jsx";



class PathPage extends React.Component {
    state = {

    }



    render() {
        return (
            <>
                <div style={_container}>
                <Grid container direction="row" spacing={1}>

                    <Grid item xs={.5}>
                        <SideBar></SideBar>
                    </Grid>


                    <Grid item xs={11.5}>
                    <Grid container direction="row" spacing={-70}>

                        <Grid item xs={3}>
                            <Grid container direction="column">

                                <Grid item xs={6}>
                                    <div style={tagsCont}>
                                    <Tags style={"raid--tg--basic"}
                                        size={"raid--tg-medium"} />
                                    </div>

                                </Grid>

                                <Grid item xs={6}>
                                    tools

                                </Grid>

                            </Grid>
                        </Grid>

                        <Grid item xs={9}>
                            <div style={_mapContainer}>
                                <MapCanvas
                                    width={1280}
                                    height={720}
                                >
                                </MapCanvas>
                            </div>
                        </Grid>

                    </Grid>
                    </Grid>

                </Grid>
                </div>
            </>
        );
    }
}
export default PathPage;


var _mapContainer = {
    height: "675px",
    width: "1025px",
    overflow: "scroll",
    scrollbars:"none",
    border: "#000000",
    border: "solid"

}
var _container = {
    padding: "30px 0px 0px 0px",
    height: "720px",
    width: "1280px",
    border: "#ffffff",
    border: "solid"

}
var tagsCont = {
    margin: "30px 0px 0px 0px",
}

var tempsb = {
    height: "720px",
    width: "50px",
    position: "relative",
    float: "left"

}


