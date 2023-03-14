
import React from "react";
import MapCanvas from "./MapCanvas.js"
import Customs from '../Images/custumsmapog.png';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


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

import "./_RaidMap.css";



class RaidMap extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cursor: "",
            mapState: [],
            currentTagID: undefined,
            deleteMode: false,
            LinesArr: [],
            newLinesTD: false,
           



        }

        this.changeCursor = this.changeCursor.bind(this);
        this.createMapTag = this.createMapTag.bind(this);
        this.onClick = this.onClick.bind(this);
        this.setToDeleteMode = this.setToDeleteMode.bind(this); // bind setToDeleteMode to this component


        document.addEventListener('ActivateKeyBind', function ({ detail }) {

            let changeCursor = "wait";

            if (this.state.cursor != detail.tagImg) {
                changeCursor = detail.tagImg;
            }

            this.setState(
                {
                    cursor: changeCursor,
                    currentTagID: parseInt(detail.tag.split("tag")[1])
                }
            )
        }.bind(this));

        document.addEventListener('mapStateUpdated', function ({ detail }) {
            console.log("MAP WAS UPDATE FROM OTHER PLACE");
            this.setState(
                { mapState: detail.mapState }
            )



        }.bind(this));


    }

    changeCursor(key) {


    }
    getTagStyle = (tagID, tX, tY) => {

        var tagImg = cursor;
        console.log("TAG ID " + tagID)
        switch (tagID) {
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
            position: "absolute",
            backgroundImage: `url(${tagImg})`,
            backgroundSize: "cover",
            top: tX + "px",
            left: tY + "px",
            height: "70px",
            width: "70px",
            zIndex: 2,
            


        }
    }


    createMapTag(hist) {
        var action = hist.data()

        var string = "";
        switch (action.type) {
            case "tag":
                string = "Placed tag " + action.tag //+ " at: " + mark.pos
                var tagX = parseInt(action.point.split(",")[0])
                var tagY = parseInt(action.point.split(",")[1])
                return (<> <canvas
                    onClick={this.setToDeleteMode} key={hist.id} style={this.getTagStyle(action.tag, tagX, tagY)}> </canvas>
                    {this.state.deleteMode && <p1 onClick={() => {
                        const db = firebase.firestore();
                        var mapStateDb = localStorage.getItem("mapState");
                        db.collection(mapStateDb).doc(hist.id).delete().then(() => {
                            console.log("Document successfully deleted!");
                        }).catch((error) => {
                            console.error("Error removing document: ", error);
                        });
                    }} style={{ position: 'absolute', left: tagY, top: tagX, backgroundColor: 'white', borderRadius: "5px", paddingLeft: '2px', paddingRight: '2px', zIndex:3}}>X</p1>}
                </>
                );
            case "line":
                string = `Placed tag ${action.linePath}`
                var pointArr = []
                var tempArr = this.state.LinesArr;
                var check = false;
                var incoming = [];
                var incomingLen = 0;

                action.linePath.lineRef.forEach(point => {
                    incoming.push(point)
                    incomingLen++;
                })
                if (tempArr.length <= 0) {
                    tempArr.push(incoming)
                }

                var UniqueScore = 0;


                tempArr.forEach(Line => {
                    var lineRef = []
                    var lineRefLen = 0
                    var Ucheck = false;



                    Line.forEach(point => {
                        lineRef.push(point)
                        lineRefLen++;
                    })

                    if (lineRefLen === incomingLen) {
                        var count = 0;
                        lineRef.forEach(point => {
                            if (point.x === incoming[count].x && point.y === incoming[count].y) {

                            }
                            else {
                                Ucheck = true;
                            }
                            count++;

                        })

                    } else {
                        Ucheck = true;


                    }

                    if (Ucheck) {
                        UniqueScore++;
                    }
                })







                // action.linePath.lineRef.forEach(point => {

                //     pointArr.push(point)



                // })



                // action.linePath.lineRef.forEach(Line => {
                //     var thisSize = 0
                //     var count = 0

                //     Line.forEach(point => {
                //         thisSize++;

                //     })





                //     if (pointArr.length === thisSize) {
                //         Line.forEach(point => {

                //             var refPoint = pointArr[count]


                //             if (point.x === refPoint.x && point.y === refPoint.y) {
                //                 check = false;

                //             }
                //             else {
                //                 check = true
                //             }
                //             count++;



                //         })
                //     }
                //     else {
                //         check = true
                //     }
                // });







                if (UniqueScore === tempArr.length) {

                    tempArr.push(action.linePath.lineRef)
                    this.setState({ LinesArr: tempArr })
                    console.log(this.state.LinesArr)

                    this.drawLines(action.linePath.lineRef);
                }





                break;


        }
    }

    handleClick(event) {
        console.log(this.key);

    }

    setToDeleteMode(event) {
        // set delete mode to true when button is clicked and set it to false when button is clicked again
        this.setState({ deleteMode: !this.state.deleteMode });


    }



    // drawLines(ctx) {


    //     LinesArray.forEach(Line => {
    //         var pointStart = undefined
    //         var lineLen = 0
    //         var count = 0


    //         Line.forEach(Point => {
    //             if(lineLen < 1){
    //                 pointStart = Point;
    //             }
    //             lineLen++;

    //         })

    //         Line.forEach(Pointend => {
    //             if(count > 0){
    //                 drawLine(pointStart, Pointend, ctx, '#000000', 5);
    //                 pointStart = Pointend;

    //             }
    //             count++;


    //         })



    //     });

    // }

    // drawLine(start, end, ctx, color, width) {
    //     start = start ?? end;
    //     ctx.beginPath();
    //     ctx.lineWidth = width;
    //     ctx.strokeStyle = color;
    //     ctx.moveTo(start.x, start.y);
    //     ctx.lineTo(end.x, end.y);
    //     ctx.stroke();

    //     ctx.fillStyle = color;
    //     ctx.beginPath();
    //     ctx.arc(start.x, start.y, 2, 0, 2 * Math.PI);
    //     ctx.fill();

    // }





    onClick(event) {

        if (this.state.currentTagID != undefined) {
            const bounds = event.currentTarget.getBoundingClientRect();
            console.log(event.currentTarget.scrollTop);
            const x = (event.clientX - bounds.left) + event.currentTarget.scrollLeft - 30;
            const y = (event.clientY - bounds.top) + event.currentTarget.scrollTop - 30
            console.log('ON CLICK, clientX:', x)
            console.log('ON CLICK, clientY:', y)

            //console.log('tag id '+ this.state.currentTagID);

            const cEvent = new CustomEvent('placeTagOnMap', { detail: { tag: this.state.currentTagID, x: y, y: x } });
            document.dispatchEvent(cEvent);

            this.setState({
                cursor: "",
                currentTagID: undefined
            }
            )
        }

    }
    drawLine(start, end, ctx, color, width) {
        start = start ?? end;
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.strokeStyle = color;
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(start.x, start.y, 2, 0, 2 * Math.PI);
        ctx.fill();

    }
    drawLines(Line) {
        var pointStart = 0
        var pointEnd = 0
        var lineLen = 0
        var count = 0
        const ctx = document.getElementById('CanvaseToBeSaved').getContext('2d');
        

        Line.forEach(Point => {
            if (lineLen < 1) {
                pointStart = Point;
            }
            lineLen++;

        })

        Line.forEach(Point => {
            pointEnd = Point;
            
            if (count > 0 && count !== lineLen) {
                this.drawLine(pointStart, pointEnd, ctx, '#000000', 5);
                pointStart = pointEnd;

            }
            count++;


        })






    }

    render() {
        return( 
            
        
        <div onClick={this.onClick} style={{ cursor: `url(${this.state.cursor}) 60 60, auto`, position: "relative", zindex:2}} zIndex={2} className="raidMap" >
            {
                this.state.mapState.map(hist => (
                    this.createMapTag(hist)
                ))
            }
            {/* <FirestoreDelete docId="ZyhV6ocV9sTNWTpSNLwQ" /> */}
            <MapCanvas
                height={2142}
                width={4097}
                PathVis={this.props.PathVis}
                LinesArray={this.props.LinesArray}
                drawing={this.props.drawing}
                map={Customs}
                className={"Canvas"}>
            </MapCanvas>
        </div >
        )


    }
}

export default RaidMap;