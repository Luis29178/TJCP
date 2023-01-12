import React from "react";
import ItemDisplay from "./ItemDisplay"
import LL from '../Images/Loot_Lord_plushie_icon.webp'
import './_TrackerPage.css'

import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/firestore';

import { ref, set, get, update, remove, child, onValue } from "firebase/database"


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

        this.getAll();


    }
  


    render() {
        return (
            <>
                {this.state.items.map(item => (
                    <ItemDisplay imgSrc={item.imgSrc} iCount={item.iCount} iName={item.iName} />
                ))}


            </>
        )

    }

    getAll() {
        const dbRef = ref(this.state.db);



        get(child(dbRef, "/")).then((snapshot) => {
            let itemsRef = [];
            let fbRef = new Map();
            let infoSkip = true;
            if (snapshot.exists()) {

                snapshot.forEach(childSnap => {


                    if (infoSkip) {
                        infoSkip = !infoSkip
                    }
                    else {
                        let keyName = childSnap.key;
                        let Name = childSnap.val().Name;


                        itemsRef.push({ "imgSrc": LL, "iCount": 0, "iName": Name });

                        fbRef.set(`${Name}`, { "Name": Name, "Count": 0 });

                    }

                });
                this.setState({ items: itemsRef })
                this.setState({ fireBaseRef: fbRef })

            }


        });


    }






    



}
export default ItemList;