import { async } from "@firebase/util";
import React from "react";
import './_TrackerPage.css'

import DDPathItem from "./DDPathItem";

import {user} from "../FirebaseStorageController.jsx"

import firebase from "firebase/compat/app";




export class PathList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            paths: [],
            map: props.map,


        };


    }
    



    async componentDidMount() {
        
        const firestore = firebase.firestore();
        const _user = await firebase.auth().currentUser;
        

        await firestore.collection(`Users/${_user.uid}/Paths/${this.state.map}/Saved`).get().then((querySnapshot) => {
            querySnapshot.forEach(doc => {
                var tempArr = this.state.paths;

                tempArr.push(doc.id);


                this.setState({
                    //      paths is set to paths plus the new data from fb ie [...[x1,x2,x3],x4] = [x1,x2,x3,x4]
                    paths: [...this.state.paths, doc.data().Name]


                });
                console.log(this.state.paths)
            });
        });


    }



    render() {

        return (

            <>
                {
                    this.state.paths.map(Path => (
                        //path item
                        <>
                            <DDPathItem path={Path}></DDPathItem>
                        </>
                    ))
                }



            </>)
    }


}








// export function PathList() {
//     const [pathList, setPathList] = React.useState(["path1", "path2", "path3",]);

//     const raidController = React.useContext(RaidContext);

//     async function updatePathList() {
//         const pathListfb = await raidController.getPathsOnMap();
//         setPathList(pathListfb);
//     }






//     // return (

//     //     <>
//     //         {pathList.map(Path => (
//     //             //path item
//     //             <>
//     //                 <DDPathItem path={Path}></DDPathItem>
//     //             </>
//     //         ))}
//     //     </>
//     // )



// }
// export default PathList;