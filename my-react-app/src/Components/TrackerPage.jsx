import { Grid } from "@mui/material";
import React from "react";
import SerchBar from "./SerchBar";
import ItemList from "./ItemList";
import {Button} from "./Button";
import './_TrackerPage.css';


class TrackerPage extends React.Component {
    state = {
        Title: "All"

    }



    render() {
        return (
            <>
                <div className="Tpage">
                    <div className="backButton">
                        <Button
                            onClick={() => { window.location.href = "/" }}
                            type="button"
                            buttonStyle="btn--x--basic"
                            size="btn--x">
                            {"<"}
                        </Button>
                    </div>


                    <Grid container direction="column" justifyContent="center" alignItems="center" xs={12}>

                        <Grid item xs={2}>
                            <div className="Ttitle">{this.state.Title}</div>
                        </Grid>

                        <Grid item xs={2} >
                            <div className="Tserchbar">
                                <SerchBar placeholder="Search Item" />
                            </div>
                        </Grid>

                        <Grid item xs={8}>
                            <div className="Titemlist">
                                <ItemList />
                            </div>
                        </Grid>

                    </Grid>




                </div>
            </>
        );
    }
}

export default TrackerPage;


