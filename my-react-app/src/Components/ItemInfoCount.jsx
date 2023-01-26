import React from "react";

import "./_ItemInfoCount.css"


export class InfoCounter extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            _iCount: 0

        }
    }
    countUp = () => {
        {

            var adjustedCount = this.state._iCount + 1;

            this.setState({
                _iCount: adjustedCount
            });


        }
    }
    countDown = () => {
        {

            var adjustedCount = this.state._iCount - 1;

            this.setState({
                _iCount: adjustedCount
            });


        }
    }






    render() {
        return (
            <>
                <div className="counterContainer">
                    <div className="infoPlus" onClick={this.countUp.bind(this)}>
                        <div className="subinfoPlus">+</div>
                    </div>
                    <div className="infoMinus" onClick={this.countDown.bind(this)}>
                        <div className="subinfoMinus">-</div>
                    </div>
                    <div className="infoCount">
                        <div className="subinfoCount">{this.state._iCount}</div>
                    </div>
                    <div className="infoItemName">{this.props.itemName}</div>
                </div>
            </>
        );
    }
}