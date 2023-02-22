import { Grid } from "@mui/material";
import React from "react";
import {ItemBar} from "./ItemBar";

import "./_ItemDisplay.css"




class ItemDisplay extends React.Component {
    constructor(props){
        super(props)

    }

  


    render() {

        var itemICO = {
            height: "100px",
            width: "100px",
            backgroundImage: `url(./ItemImages/${this.props.imgSrc})`,
        
        }
        
        return (
            <>
                <div style={cont}>
                <Grid container xs={12}>

                    <Grid item xs={2}>
                        <img className="ItemIcon"  style={itemICO} ></img>
                    </Grid>
                    <Grid item xs={10}>
                        <ItemBar OnClick={() => this.props.OnClick()} iCount={this.props.iCount} iName={this.props.iName}></ItemBar>
                    </Grid>

                </Grid>
                </div>
            </>
        );
    }
}
export default ItemDisplay;


var cont = {
    margin: "10px 0px 10px 0px",
    height: "100px",
    width: "auto",

}