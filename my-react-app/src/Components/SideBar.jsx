import React from "react";
import PathMenu from './PathMenu.jsx'
import './_SideBar.css'

class SideBar extends React.Component {
    state = {
        isOpen: false,
        bar: "sbar",
        arrow: "sarrow",
        btn: "arrowcont",
        menuContent: "sbcontent",
        isClickable: this.barOpen

    }

    barOpen = () => {
        if (this.state.isOpen) {
            this.setState({
                isOpen: false,
                bar: "sbar",
                arrow: "sarrow",
                btn: "arrowcont",
                menuContent: "sbcontent",
                isClickable: this.doNothing
            })
        } else {
            this.setState({
                isOpen: true,
                bar: "sbarOpen",
                arrow: "sarrowOpen",
                btn: "arrowcontOpen",
                menuContent: "sbcontentOpen",
                isClickable: this.barOpen

            })

        }

    }






    render() {
        return (
            <>

                <div className={this.state.bar} >
                    <div className={this.state.menuContent}>
                        <PathMenu title ={this.props.title} info={this.props.info} btnGroup={this.props.btnGroup}></PathMenu>
                    </div>
                    <div className={this.state.btn} onClick={this.barOpen.bind(this)} />

                    <div className={this.state.arrow} onClick={this.barOpen.bind(this)} />
                </div>

            </>
        );
    }
}
export default SideBar;
