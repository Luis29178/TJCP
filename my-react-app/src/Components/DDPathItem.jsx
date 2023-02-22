import React from "react";
import "./_DDPathItem.css"

class ItemDisplay extends React.Component {
    

    setPath = () => {
        var selected = document.getElementById("dropdownSelectedPath");
        selected.innerHTML = `Path: ${this.props.path}`;


        this.props.baseParent.setState({
            PathVis:"pathImageDisplayVisible",
            pathimgURL: this.props.pathURL,
            

            
        })



        

        console.log("pathPause");
        

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