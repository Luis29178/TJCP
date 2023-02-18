
import React from "react";
import MapCanvas from "./MapCanvas.js"
import Customs from '../Images/custumsmapog.png';
import firebase from 'firebase/compat/app';
import { collection, query, orderBy } from 'firebase/firestore';
import {onSnapshot} from 'firebase/firestore';
import { doc, deleteDoc } from "firebase/firestore";

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
            cursor: "",
            mapState: [],
            currentTagID:undefined,
            deleteMode: false,

        }

        this.changeCursor = this.changeCursor.bind(this);
        this.createMapTag = this.createMapTag.bind(this);
        this.onClick = this.onClick.bind(this);
        this.setToDeleteMode = this.setToDeleteMode.bind(this); // bind setToDeleteMode to this component


        document.addEventListener('ActivateKeyBind', function({ detail }) {
            
            let changeCursor = "wait";

            if(this.state.cursor != detail.tagImg){
                changeCursor = detail.tagImg;
            }

            this.setState(
                {cursor: changeCursor,
                currentTagID:parseInt(detail.tag.split("tag")[1])}
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
                tagImg = cursor3;
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
                return(<> <canvas onClick={this.setToDeleteMode} key={hist.id} style={this.getTagStyle(action.tag, tagX, tagY)}> </canvas>
                {this.state.deleteMode && <p1 onClick={() => {
                    const db = firebase.firestore();
                    db.collection("mapState").doc(hist.id).delete().then(() => {
                        console.log("Document successfully deleted!");
                    }).catch((error) => {
                        console.error("Error removing document: ", error);
                    });
                }} style={{position: 'absolute', left: tagY, top: tagX, backgroundColor: 'white', borderRadius: "5px", paddingLeft: '2px',paddingRight: '2px'}}>X</p1>}
            </>
        );
        break;
            
        }
    }

    handleClick(event){
        console.log(this.key);
        
    }

    setToDeleteMode(event){
        // set delete mode to true when button is clicked and set it to false when button is clicked again
        this.setState({deleteMode: !this.state.deleteMode});


    }

    
    onClick(event) {

        if(this.state.currentTagID != undefined){
            const bounds = event.currentTarget.getBoundingClientRect();
            console.log(event.currentTarget.scrollTop);
            const x = (event.clientX - bounds.left) + event.currentTarget.scrollLeft - 30;
            const y = (event.clientY - bounds.top) + event.currentTarget.scrollTop - 30
            console.log('ON CLICK, clientX:', x)
            console.log('ON CLICK, clientY:', y)
    
            //console.log('tag id '+ this.state.currentTagID);
    
            const cEvent = new CustomEvent('placeTagOnMap', {detail: {tag: this.state.currentTagID, x:y, y:x}});
            document.dispatchEvent(cEvent);

            this.setState({
                cursor: "",
                currentTagID: undefined
            }
            )
        }

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