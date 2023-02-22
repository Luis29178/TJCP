import React from "react";
import ItemDisplay from "./ItemDisplay"
import LL from '../Images/Loot_Lord_plushie_icon.webp'
import './_TrackerPage.css'

import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/firestore';

import ItemDB from './ItemImages/UidCorr.json'
import corr from './ItemImages/correlation.json'

const firebaseConfig = {
    apiKey: "AIzaSyC4hztlkCki_2pnq93Rgf7cgncHC1V61N0",
    authDomain: "capstone-eeab2.firebaseapp.com",
    projectId: "capstone-eeab2",
    storageBucket: "capstone-eeab2.appspot.com",
    messagingSenderId: "779758566575",
    appId: "1:779758566575:web:fa8755a005fed7dd23a85a",
    measurementId: "G-55B1P13PP9"
};

firebase.initializeApp(firebaseConfig);




class ItemList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            db: firebase.database(),
            dbf: firebase.firestore(),
            items: [],
            fireBaseRef: []


        }



    }


    componentDidMount() {


        this.getAllLocal();




    }



    render() {
        return (
            <>
                {this.state.items.map(item => (
                    <ItemDisplay OnClick={() => this.props.OnClick(item.name)} imgSrc={item.imgSrc} iCount={item.iCount} iName={item.name} />
                ))}


            </>
        )

    }

    getAllLocal() {

        let itemsRef = [];
        let namebank = corr
        var counter = 0
        var limit = 9000



        ItemDB.map(item => {
            if (counter <= limit) {
                try {


                    var imgref = item.uid + ".png"


                    itemsRef.push({
                        uid: item.uid,
                        name: namebank[item.uid].name,
                        shortname: namebank[item.uid].shortName,
                        imgSrc: imgref,
                        iCount: 0

                    })

                    console.log(namebank[item.uid].name)
                    console.log(namebank[item.uid].shortName)
                    console.log(item.uid)
                    console.log(imgref)




                }
                catch {
                    console.log("Unkown error with:" + item.uid)

                }
            }
            counter = counter +1 ;
        })



        this.setState({ items: itemsRef })



    }
    // depreciated Function pulling from Firebase
    // getAll() {
    //     const dbRef = ref(this.state.db);



    //     get(child(dbRef, "/")).then((snapshot) => {
    //         let itemsRef = [];
    //         let fbRef = new Map();
    //         let infoSkip = true;
    //         var count = 0;
    //         if (snapshot.exists()) {


    //             snapshot.forEach(childSnap => {

    //                 if (count <= 10) {

    //                     if (infoSkip) {
    //                         infoSkip = !infoSkip
    //                     }
    //                     else {
    //                         let Name = childSnap.val().Name;
    //                         let UID = childSnap.val().UId;



    //                         itemsRef.push({ "imgSrc": LL, "iCount": 0, "iName": Name });

    //                         fbRef.set(`${Name}`, { "Name": Name, "Count": 0, UID });

    //                     }
    //                 }
    //                 count = count + 1;


    //             });
    //             this.setState({ items: itemsRef })
    //             this.setState({ fireBaseRef: fbRef })

    //         }


    //     });


    // }










}
export default ItemList;