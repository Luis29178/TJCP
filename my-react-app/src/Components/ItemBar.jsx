import { Grid } from "@mui/material";
import React from "react";
import ItemButton from "./ItemButtons"



class ItemBar extends React.Component {


    render() {
        return (
            <>
                
                <Grid container spacing={2} columns={{ xs: 12, sm: 12, md: 12 }}>

                    <Grid item xs={8}><div style={itemName}>{this.props.iName}</div></Grid>

                    <Grid item xs={1}><div style={btns}><ItemButton btnStyle="itembtn--plus" borderStyle="ibtnBorder--plus" onClick={() => {console.log(`incrament in firebase based on ${this.props.iName}s true value within [itemBar.jsx]`)}}>{"+"}</ItemButton></div></Grid>

                    <Grid item xs={1}><div style={itemCount}>{this.props.iCount}</div></Grid>

                    <Grid item xs={1}><div style={btns}><ItemButton btnStyle="itembtn--minus" borderStyle="ibtnBorder--minus" onClick={() => {console.log(`decrament in firebase based on ${this.props.iName}s true value within [itemBar.jsx]`)}}>{"-"}</ItemButton></div></Grid>

                    <Grid item xs={1}><div style={btns}><ItemButton btnStyle="itembtn--info" borderStyle="ibtnBorder--info" onClick={() => {console.log(`send to info in based on ${this.props.iName}s true value within [itemBar.jsx]`)}}>{"i"}</ItemButton></div></Grid>

                </Grid>

            </>
        );
    }
}
export default ItemBar;


var btns= {
    margin:"0px 0px 0px 0px",
}
var itemName = {
    margin:"20px 0px 0px 0px",
    color: "#ffffff",
    fontSize: "38px"

}
var itemCount = {
    margin:"30px 0px 0px 0px",
    color: "#ffffff",
    fontSize: "38px",
    padding: "0px 0px 0px 15px"

}