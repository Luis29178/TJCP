import React from "react";
import { ItemInfoBodyGroup } from "./ItemInfoBodyGroup.jsx";

import "./_ItemInfoBody.css"




export class ItemInfoBody extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            info: this.props.ItemInfo

        }
    }





    render() {
        return (
            <>
                <div className="itemDiscCont">
                    <div className="desBox">
                        <ItemInfoBodyGroup title={"Description"} body={this.state.info.description}></ItemInfoBodyGroup>
                    </div>
                    <div className="qstBox">
                        <ItemInfoBodyGroup title={"Needed for Quests"} body={this.state.info.req}></ItemInfoBodyGroup>
                    </div>
                    <div className="locBox">
                        <ItemInfoBodyGroup title={"Locations Found"} body={this.state.info.locations}></ItemInfoBodyGroup>
                    </div>
                </div>
            </>
        );
    }


}