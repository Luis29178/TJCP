import React from "react";
import "./_DDPathItem.css"

class ItemDisplay extends React.Component {
    

    setPath = () => {
        var selected = document.getElementById("dropdownSelectedPath");
        var self = document.getElementById("PathNameSelected");


    }



    render() {
        return (
            <>
            <div className="ddpathsContainer" onClick={this.setPath.bind(this)}>
                <div className="ddpathsBpoint" onClick={this.setPath.bind(this)}></div>
                <div id={"PathNameSelected"} className="ddpathsPathName" onClick={this.setPath.bind(this)}>{this.props.path}</div>
            </div>

            </>
        );
    }

}
export default ItemDisplay;