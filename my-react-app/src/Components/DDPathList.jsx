import React from "react";
import './_TrackerPage.css'
import DDPathItem from "./DDPathItem";





export class PathList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            map: props.map,


        };


    }



    componentDidUpdate(){
    }

    render() {
        console.log(this.props.PathList);
        


        return (

            <>
                {
                    this.props.PathList.map(Path => (
                        //path item
                        <>
                            <DDPathItem path={Path}  baseParent = {this.props.baseParent}></DDPathItem>
                        </>
                    ))
                }



            </>)
    }


}