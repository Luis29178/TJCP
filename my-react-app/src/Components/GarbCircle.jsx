import React from "react";
import "./_GarbCircle.css"



export class GarbCircle extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            rootElm: document.querySelector(':root'),

        }

    } 
    calculateOVColor(){

        return '#ff0000'
        
    }
    SetOVColor() {

        var cmpRoot = getComputedStyle(this.state.rootElm);
        console.log(cmpRoot.getPropertyValue('--OvColor'));
        var color = cmpRoot.getPropertyValue('--OvColor');
        var colfromCalc = this.calculateOVColor();
        document.documentElement.style.setProperty('--OvColor','#ff0000');
        console.log(cmpRoot.getPropertyValue('--OvColor'));
    }




    render() {
        return (
            <>
                <div className="ovcontainer">
                    <div className="Overall" onClick={this.SetOVColor.bind(this)}>OverAll</div>
                    <div className="OvCircle"></div>
                </div>

            </>
        );
    }





}