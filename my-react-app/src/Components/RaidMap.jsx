
import React from "react";
import MapCanvas from "./MapCanvas.js"
import cursor from "./Tags/cursor.png";
import cursor2 from "./Tags/cursor2.png";

class RaidMap extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            cursor: cursor2,

        }

        this.changeCursor = this.changeCursor.bind(this);

        document.addEventListener('ActivateKeyBind', function({ detail }) {
            
            let changeCursor = "wait";

            if(this.state.cursor != detail.tagImg){
                changeCursor = detail.tagImg;
            }

            this.setState(
                {cursor: changeCursor}
            )
        }.bind(this));


    }

    changeCursor(key){
        

    }

    


    render(){

        return <div className="raidMap" style={{cursor: `url(${this.state.cursor}) 60 60, auto`}}>
        <MapCanvas
            width={1000}
            height={500}
            className={"Canvas"}>
        </MapCanvas>
    </div>
    }
}

export default RaidMap;