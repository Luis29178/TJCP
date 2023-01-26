import React from "react";

import "./_SpctMatchDropBar.css"


export class SpectDropBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            Matches: ["Match 1", "Match 2", "Match 3"],
            selected: "Match 1",
            
            isOpen: false,

            container: "matchContainer",
            arrow: "dropArrow",
            usermatch: "match",
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

                container: "matchContainer",
                arrow: "dropArrow",
                match: "match",
                border: "border"

            })
        } else {
            this.setState({
                isOpen: true,

                container: "matchContainerOpen",
                arrow: "dropArrowOpen",
                match: "matchOpen",
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
                        <div className={this.state.match}>
                            {this.state.Matches.map(Match => (<div className="matchItem" onClick={() => this.Select(Match).bind(this)}>{Match.toString()}</div>))}
                        </div>
                    </div>
                </div>



            </>
        );
    }
}