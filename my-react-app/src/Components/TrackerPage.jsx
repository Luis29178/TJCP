import React from "react";
import SerchBar from "./SerchBar";
import ItemList from "./ItemList";
import { Button } from "./Button";
import './_TrackerPage.css';
import { ItemInfoDisplay } from "./ItemInfoDisplay";
import { PopUpWindow } from "./PopUpComponent";


class TrackerPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Title: "All",
            InfoState: "InfoPopUpClosed",
            ItemSelected: "",
            searchQuery: "",
        }
        this.RequestInfo = this.RequestInfo.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
    }
    RequestInfo(name) {
        this.setState({
            InfoState: "InfoPopUp",
            ItemSelected: name,
        });
    }
    OnReturn() {
        this.setState({ InfoState: "InfoPopUpClosed" })
    }
    handleSearch(query) {
        this.setState({ searchQuery: query })
    }
    render() {
        return (
            <>
                <div className={this.state.InfoState}>
                    <PopUpWindow Window={

                        <ItemInfoDisplay Name={this.state.ItemSelected.toString()} OnClick={() => this.OnReturn().bind(this)}>
                        </ItemInfoDisplay>}>

                    </PopUpWindow>
                </div>
                <div className="Tpage">
                    <div className="backButton">
                        <Button
                            onClick={() => { window.location.href = "/" }}
                            type="button"
                            buttonStyle="btn--x--basic"
                            size="btn--x">
                            {"<"}
                        </Button>
                    </div>



                    <div className="Ttitle">{this.state.Title}</div>

                    <div className="Tserchbar">
                        <SerchBar placeholder="Search Item"
                        onChange={this.handleSearch} />
                    </div>

                    <div className="Titemlist">
                    <ItemList OnClick={this.RequestInfo} query={this.state.searchQuery} />
                    </div>



                </div>
            </>
        );
    }
}

export default TrackerPage;


