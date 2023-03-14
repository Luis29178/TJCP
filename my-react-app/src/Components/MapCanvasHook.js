import React, { useEffect, useRef, useState } from 'react'


import { RaidContext } from "..";






export function useOnDraw(onDraw, clear, clearKey, src , drawing) {

    const RaidController = React.useContext(RaidContext);


    const canRef = useRef(null);

    const isDrawingRef = useRef(false);

    var line = [];
    var prevduple = true;
    var lineRef = [];
    const [uploaded, setUploaded] = useState(false)





    const mouseMoveListenerRef = useRef(null);
    const mouseUpListenerRef = useRef(null);
    const mouseDownListenerRef = useRef(null);
    const handleClearKeyRef = useRef(null);

    const prevPointRef = useRef(null);









    function UploadPath() {

        function retunComp() {

            if (line.length === lineRef.length) {

                for (let index = 0; index < line.length; index++) {
                    const lineElement = line[index];
                    const lineRefElement = lineRef[index];

                    if (lineElement[0] === lineRefElement[0]) {
                        if (lineElement[1] !== lineRefElement[1]) {
                            return true;
                        }

                    }
                    else {
                        return true;
                    }


                }
                return false;



            }
            return true;
        }

        var comp = retunComp()

        if (comp) {
            lineRef = [...line];
            console.log(line.length);

            line = []




            RaidController.placeLineOnMap({ lineRef });
        } else {

        }

    }
    function ClearMap() {

        //RaidController.clearMap();
        console.log(`cleard`);



    }





    function setCanvasRef(ref) {
        if (drawing) {
            if (!ref) return;
            if (canRef.current) {

                canRef.current.removeEventListener("mousedown", mouseDownListenerRef.current);
                canRef.current.removeEventListener("mouseup", mouseUpListenerRef.current);
                canRef.current.removeEventListener("mousemove", mouseMoveListenerRef.current);
                canRef.current.removeEventListener("keydown", handleClearKeyRef.current);

            }

            canRef.current = ref

            initMouseMoveListener();
            initMouseDownListener();
            initMouseuUpListener();
            inithandleClearKey();
        }
    }

    function inithandleClearKey() {
        const handleClearKey = (e) => {
            var key = e.key;
            const ctx = canRef.current.getContext('2d');
            if (key === clearKey) {
                clear(ctx);
                ClearMap();
            }
        }
        handleClearKeyRef.current = handleClearKey;
        window.addEventListener("keydown", handleClearKey);


    }



    function initMouseMoveListener() {
        const mouseMoveListener = (e) => {

            if (isDrawingRef.current) {

                const point = Compointcanvas(e.clientX, e.clientY);
                line.push(point);
                const ctx = canRef.current.getContext('2d');
                if (onDraw) onDraw(ctx, point, prevPointRef.current);
                prevPointRef.current = point;




            }



        }
        mouseMoveListenerRef.current = mouseMoveListener;
        window.addEventListener("mousemove", mouseMoveListener);
    }


    function initMouseDownListener() {
        if (!canRef.current) return;
        const mdListener = () => {

            if(drawing){
                isDrawingRef.current = true;
            setUploaded(false)
            line = []
}

        }
        mouseDownListenerRef.current = mdListener;
        canRef.current.addEventListener("mousedown", mdListener);

    }


    function initMouseuUpListener() {
        if (!canRef.current) return;



        const muListener = (e) => {

            isDrawingRef.current = false;
            prevPointRef.current = null;

            if (uploaded === false) {

                UploadPath();
                setUploaded(true);
                e.stopImmediatePropagation();
            }



        }


        mouseUpListenerRef.current = muListener;
        window.addEventListener("mouseup", muListener, "once");



    }




    function Compointcanvas(clientX, clientY) {

        if (canRef.current) {
            const boundingRec = canRef.current.getBoundingClientRect();
            return {
                x: clientX - boundingRec.left,
                y: clientY - boundingRec.top
            }
        } else {
            return null;
        }
    }



    return setCanvasRef;


};