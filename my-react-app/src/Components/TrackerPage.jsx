import React from "react";
import SerchBar from "./SerchBar";
import ItemList from "./ItemList";
import { Button } from "./Button";
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



                    <div className="Ttitle">{this.state.Title}</div>

                    <div className="Tserchbar">
                        <SerchBar placeholder="Search Item" />
                    </div>

                    <div className="Titemlist">
                        <ItemList />
                    </div>



                </div>
            </>
        );
    }
}

export default TrackerPage;


