import React from "react";

import "./_InfoDropBar.css"


export class InfoDropBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            Lists: ["List 1", "List 2", "List 3"],
            selected: "List 1",
            
            isOpen: false,

            container: "infoContainer",
            arrow: "dropArrow",
            userList: "List",
            border: "border",




        }
    }

    Select(newSelected) {

        this.setState({
            selected: newSelected
        })

    }

    barInteract = () => {
        if (this.state.isOpen) {
            this.setState({
                isOpen: false,

                container: "infoContainer",
                arrow: "dropArrow",
                userList: "List",
                border: "border"

            })
        } else {
            this.setState({
                isOpen: true,

                container: "infoContainerOpen",
                arrow: "dropArrowOpen",
                userList: "ListOpen",
                border: "borderOpen"

            })

        }

    }



    render() {
        return (
            <>

                <div className={this.state.container}>
                    <div className={this.state.border}>
                        <div className="selected">
                            {this.state.selected}
                        </div>

                        <div className={this.state.arrow} onClick={this.barInteract.bind(this)}/>
                        <div className={this.state.userList}>
                            {this.state.Lists.map(List => (<div key={List.toString()} className="ListItem" onClick={() => this.Select(List).bind(this)}>{List.toString()}</div>))}
                        </div>
                    </div>
                </div>



            </>
        );
    }
}