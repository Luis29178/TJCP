import React from "react";

import "_TrakerListSelect.css"


export class TrakerListSelect extends React.Component {
constructor(props){
    super(props)

    this.state = {
        DummyList:{
            doc: ["Flea" ,"Quests", "Hideout"]
        }
    }
}



    render() {
        return (
            <>
                <div className="TrakerSelect">


                    <div className="backBtn">
                        <Buttonnew borderStyle="back" onClick={() => { window.location.href = "/ListSelectMode" }}>{'<'}</Buttonnew>
                    </div>


                    <div className="listsGroup">
                        <div className="UserLists">

                            {this.state.DummyList.doc.map(item => (
                                <div borderStyle="join" onClick={console.log("send to list display")}>{item.toString()}</div>
                            ))}
                            
                        </div>

                    </div>


                </div>

            </>
        );
    }
}