import React from "react";
import SerchBar from "./SerchBar";
import {UserSavedItemList} from "./UserSavedItemList"
import { Button } from "./Button";
import './_UserListTrackerPage.css';


export class UserListTrackerPage extends React.Component {
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
                    <UserSavedItemList ></UserSavedItemList>
                    </div>



                </div>
            </>
        );
    }
}

