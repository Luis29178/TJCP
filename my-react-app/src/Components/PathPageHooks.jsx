import React, { useState, useEffect } from 'react';

import 'firebase/compat/auth';
import { RaidContext } from "..";



export function PathHooks() {
    const RaidController = React.useContext(RaidContext);



    function useUploadPath(){



    var canvas = document.getElementById("CanvaseToBeSaved");

    var canContext = canvas.getContext("2d")

    var canUri = canvas.toDataURL("image/png", 1.0);

    const createEl = document.createElement('a');

    createEl.href = canUri;

    RaidController.UploadPath(canUri, "Customs");




    // This is the name of our downloaded file
    createEl.download = "download-this-canvas";

    // Click the download button, causing a download, and then remove it
    createEl.click();


    createEl.remove();
    }




    return useUploadPath;

}

