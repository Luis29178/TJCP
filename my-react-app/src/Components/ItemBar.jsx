import { Grid } from "@mui/material";
import React from "react";
import ItemButton from "./ItemButtons"



export class ItemBar extends React.Component {


    render() {
        return (
            <>

                <Grid container spacing={2} columns={{ xs: 12, sm: 12, md: 12 }}>

                    <Grid item xs={11}><div style={itemName}>{this.props.iName}</div></Grid>

                    <Grid item xs={1}><div style={btns}>
                        <ItemButton
                            btnStyle="itembtn--info"
                            borderStyle="ibtnBorder--info"
                            onClick={() => this.props.OnClick()}>
                            {"i"}
                        </ItemButton>
                        </div></Grid>

                </Grid>

            </>

        );
    }
}



var btns = {
    margin: "0px 0px 0px 0px",
}
var itemName = {
    margin: "20px 0px 0px 0px",
    color: "#ffffff",
    fontSize: "38px"

}
var itemCount = {
    margin: "30px 0px 0px 0px",
    color: "#ffffff",
    fontSize: "38px",
    padding: "0px 0px 0px 15px"

}
