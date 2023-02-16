import React from "react";
import "./_DDPathItem.css"
import LL from "./ItemImages/5a0abb6e1526d8000a025282.png"

class ItemDisplay extends React.Component {
    

    setPath = () => {
        var selected = document.getElementById("dropdownSelectedPath");
        selected.innerHTML = `Path: ${this.props.path}`;

        //#region GetPath From FB
        var _pathImgURL = LL;
        

        this.props.baseParent.setState({
            PathVis:"pathImageDisplayVisible",
            pathimgURL: _pathImgURL

            
        })

    }



    render() {
        return (
            <>
            <div className="ddpathsContainer">
                <div className="ddpathsBpoint" onClick={this.setPath.bind(this)}></div>
                <div id={"PathNameSelected"} className="ddpathsPathName" onClick={this.setPath.bind(this)}>{this.props.path}</div>
            </div>

            </>
        );
    }

}
export default ItemDisplay;