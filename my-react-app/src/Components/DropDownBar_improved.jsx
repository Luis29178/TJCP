import React from "react";
import {PathList} from "./DDPathList"
import "./_DropDownBar_improved.css"

class DropDownBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        isOpen: false,
        SelectedPath: "None",
        container: "container-Closed",
        arrow: "arrow-Closed",
        pathList: "pathList-Closed",
        arrowCont: "arrowCont-Closed",
        isClickable: this.barOpen,

    }
}
    barOpen = () => {
        if(this.state.isOpen){
            this.setState({
                isOpen: false,

                container: "container-Closed",
                arrow: "arrow-Closed",
                pathList: "pathList-Closed",
                arrowCont: "arrowCont-Closed",

                isClickable: this.doNothing
            })
        }else{
            this.setState({
                isOpen: true,

                container: "container-Open",
                arrow: "arrow-Open",
                pathList: "pathList-Open",
                arrowCont: "arrowCont-Open",

                isClickable: this.barOpen

            })

        }

    }

    render() {

        return(
            <>
        <div className={this.state.container} >
        <div id={"dropdownSelectedPath"} className="sPath">{`Path: ${this.state.SelectedPath}`}</div>

        <div className= {this.state.pathList} ><PathList map={this.props.map} baseParent={this.props.baseParent} PathList={this.props.PathList}></PathList></div>

        <div className={this.state.arrowCont} onClick={this.barOpen.bind(this)}>
        <div className={this.state.arrow}></div>
        </div>
        

        

        </div>
        </>
        );


    }




}
export default DropDownBar;