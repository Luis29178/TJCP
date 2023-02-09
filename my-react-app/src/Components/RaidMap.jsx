
import React from "react";
import MapCanvas from "./MapCanvas.js"
import Customs from '../Images/custumsmapog.png';



// Cursor Tags
import cursor from "./Tags/cursor.png";
import cursor1 from "./Tags/cursor1.png";
import cursor2 from "./Tags/cursor2.png";
import cursor3 from "./Tags/cursor3.png";
import cursor4 from "./Tags/cursor4.png";
import cursor5 from "./Tags/cursor5.png";
import cursor6 from "./Tags/cursor6.png";
import cursor7 from "./Tags/cursor7.png";
import cursor8 from "./Tags/cursor8.png";

class RaidMap extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            cursor: cursor2,
            mapState: []

        }

        this.changeCursor = this.changeCursor.bind(this);
        this.createMapTag = this.createMapTag.bind(this);

        document.addEventListener('ActivateKeyBind', function({ detail }) {
            
            let changeCursor = "wait";

            if(this.state.cursor != detail.tagImg){
                changeCursor = detail.tagImg;
            }

            this.setState(
                {cursor: changeCursor}
            )
        }.bind(this));

        document.addEventListener('mapStateUpdated', function({ detail }) {
            console.log("MAP WAS UPDATE FROM OTHER PLACE");
            this.setState(
                {mapState: detail.mapState}
            )
            


        }.bind(this));


    }

    changeCursor(key){
        

    }
    getTagStyle = (tagID, tX, tY) => {

        var tagImg = cursor;
        console.log("TAG ID "+tagID)
        switch(tagID){
            case 0:
                tagImg = cursor;
                break;
            case 1:
                tagImg = cursor1;
                break;
            case 2:
                tagImg = cursor2;
                break;
            case 3:
                tagImg = cursor4;
                break;
            case 4:
                tagImg = cursor4;
                break;
            case 5:
                tagImg = cursor5;
                break;
            case 6:
                tagImg = cursor6;
                break;
            case 7:
                tagImg = cursor7;
                break;    
            case 8:
                tagImg = cursor8;
                break;
        }
        return {
            position:"absolute",
            backgroundImage: `url(${tagImg})`,
            backgroundSize: "cover",
            top:tX + "px",
            left:tY + "px",
            height: "70px",
            width: "70px",
            
    
        }
    }


    createMapTag(hist){
        var action = hist.data()

        var string = "";
        switch(action.type){
            case "tag":
                string = "Placed tag "+ action.tag //+ " at: " + mark.pos
                var tagX = parseInt(action.point.split(",")[0])
                var tagY = parseInt(action.point.split(",")[1])
                return <canvas key={hist.id} style={this.getTagStyle(action.tag, tagX, tagY)}> </canvas>
                break;
            // case "path":
            //     string = "Drew a line";
            //     return <div key={hist.id}>
            //     Path {string}
            //      </div>;
            //     break;

        }
        
    }

    
    onClick(event) {
        const bounds = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - bounds.left;
        const y = event.clientY - bounds.top
        console.log('ON CLICK, clientX:', x)
    }

    render(){

        return <div onClick={this.onClick} style={{cursor: `url(${this.state.cursor}) 60 60, auto`, position:"relative"}} className="raidMap">
{this.state.mapState.map(hist =>(
            this.createMapTag(hist)
        ))}
<MapCanvas
    height={2142}
    width={4097}
    map={Customs}
    className={"Canvas"}>
</MapCanvas>
</div>

    
    }
}

export default RaidMap;