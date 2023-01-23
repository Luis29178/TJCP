import React from "react";

import "./_ItemInfoBodyGroup.css"




export class ItemInfoBodyGroup extends React.Component {

    render() {
        return (
            <>

                    <div className="segmentContainer">
                        <div className="segTitle">{this.props.title}</div>
                        <div className="segBody">{this.props.body}</div>
                    </div>

            </>
        );
    }


}