import React from "react";
import "./_DDPathItem.css"

class ItemDisplay extends React.Component {
    



    render() {
        return (
            <>
            <div className="Container">
                <div className="Bpoint"></div>
                <div className="PathName">{this.props.path}</div>
            </div>

            </>
        );
    }

}
export default ItemDisplay;