import React from "react";
import "./_PopUpComponents.css"

export class PopUpWindow extends React.Component {


    render() {
        return (
            <div className="widowContainer">
                {this.props.Window}
            </div>
            );
    }
}