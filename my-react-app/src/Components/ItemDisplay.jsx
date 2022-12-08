import { Grid } from "@mui/material";
import React from "react";
import ItemBar from "./ItemBar";

class ItemDisplay extends React.Component {




    render() {
        return (
            <>
                <div style={cont}>
                <Grid container xs={12}>

                    <Grid item xs={2}>
                        <img  style={itemICO} src={this.props.imgSrc}></img>
                    </Grid>
                    <Grid item xs={10}>
                        <ItemBar iCount={this.props.iCount} iName={this.props.iName}></ItemBar>
                    </Grid>

                </Grid>
                </div>
            </>
        );
    }
}
export default ItemDisplay;

var itemICO = {
    height: "100px",
    width: "100px"

}
var cont = {
    margin: "10px 0px 10px 0px",
    height: "100px",
    width: "auto",

}