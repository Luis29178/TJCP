import React, { useState } from "react";
import { Buttonnew } from "./newButton.jsx";

import firebase from 'firebase/compat/app';
import { storage } from "../FirebaseStorageController"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"

import 'firebase/compat/auth';
import { RaidContext } from "..";


export function PathMenuBtns() {

    const RaidController = React.useContext(RaidContext);



    async function UploadPath(pathName, ImgUrl, map) {
        RaidController.UploadPath(pathName, ImgUrl, map);
    }


    const uploadImage = (imgUrl, mapName) => {
        if (imgUrl == null) return;
        var Inputbar = document.getElementById("PathName")
        var InputName = Inputbar.value;
        var user = firebase.auth().currentUser;

        const imgRef = ref(storage, `${user.uid}/${mapName}/${InputName}.png`)

        const imgBlob = dataURItoBlob(imgUrl);
        let _url;



        uploadBytes(imgRef, imgBlob).then(() => {
            alert("ImageUploaded");

            getDownloadURL(imgRef).then((url) => {
                _url = url

                console.log(_url);

                UploadPath(InputName, _url, mapName);
            })



        })

    }
    function dataURItoBlob(dataURI) {
        // convert base64 to raw binary data held in a string
        // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
        var byteString = atob(dataURI.split(',')[1]);

        // separate out the mime component
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

        // write the bytes of the string to an ArrayBuffer
        var ab = new ArrayBuffer(byteString.length);

        // create a view into the buffer
        var ia = new Uint8Array(ab);

        // set the bytes of the buffer to the correct values
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }

        // write the ArrayBuffer to a blob, and you're done
        var blob = new Blob([ab], { type: mimeString });
        return blob;

    }






    return (<>

        <div className="btn1">
            <Buttonnew borderStyle={"ttRaid"} onClick={() => { console.log("to Raid") }}> Take To Raid</Buttonnew>
        </div>
        <div className="btn2">
            <Buttonnew borderStyle={"save"} onClick={() => {

                const canvas = document.getElementById("CanvaseToBeSaved")
                const ctx = canvas.getContext("2d");

                const canvasUrl = canvas.toDataURL("image/png");




                uploadImage(canvasUrl, "Customs")

                // var link = document.createElement('a');
                // link.download = './LocalPaths/Customs/tempDownload.png';
                // link.href = canvasUrl;
                // link.click();


                // console.log(link.href);

                // link.remove();


            }}> Save</Buttonnew>
        </div>
        <div className="btn3">
            <Buttonnew borderStyle={"discard"} onClick={() => { console.log("discard") }}> Discard</Buttonnew>
        </div>

    </>);
}
