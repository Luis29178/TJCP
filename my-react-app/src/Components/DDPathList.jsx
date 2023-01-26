import React from "react";
import './_TrackerPage.css'

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

import { getFirestore, collection, CollectionReference , query, orderBy, limit, getDocs} from "firebase/firestore";

import DDPathItem from "./DDPathItem.jsx"

const firebaseConfig = {
    apiKey: "AIzaSyC4hztlkCki_2pnq93Rgf7cgncHC1V61N0",
    authDomain: "capstone-eeab2.firebaseapp.com",
    projectId: "capstone-eeab2",
    storageBucket: "capstone-eeab2.appspot.com",
    messagingSenderId: "779758566575",
    appId: "1:779758566575:web:fa8755a005fed7dd23a85a",
    measurementId: "G-55B1P13PP9"
};

const fb = firebase.initializeApp(firebaseConfig);




class PathList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dbf: firebase.firestore(fb),
            Paths: [],
        }



    }


    componentDidMount() {

        this.getAll();


    }
  


    render() {
        return (
            <>
                {this.state.Paths.map(Path => (
                    //path item
                    <>
                    <DDPathItem path = {Path}></DDPathItem>
                    </>

                ))}


            </>
        )

    }

    getAll() {

        const collect = new CollectionReference(this.state.dbf, `TestPath/${this.props.map}/Paths`);
        const q = query(collect);

        const getingData = async() => {
            const docs = await getDocs(q);
            docs.forEach(doc => {
                console.log(doc.data())
            });
        }

        getingData();




        // const dbPaths = this.state.dbf.collection(`TestPath/${this.props.map}/Paths`);
        // let pathsRef = [];

        // await dbPaths.get().then(snap =>{

            

        //     snap.docs.forEach(doc => {
        //         pathsRef.push(doc.data());
        //         console.log("doc Id: ", doc.id, "Doc Data:", doc.data());
    
        //     });
        // });



        // const dbPaths = this.state.dbf.collection(`TestPath/${this.props.map}/Paths`);
        // let pathsRef = [];
        
        // let snap = await dbPaths.get()
        //     snap.docs.forEach(doc => {
        //         pathsRef.push(doc.data());
        //         console.log("doc Id: ", doc.id, "Doc Data:", doc.data());
        //     });
        // 


        

    }


}
export default PathList;