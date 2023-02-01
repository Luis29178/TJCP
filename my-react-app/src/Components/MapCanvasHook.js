import React, { useEffect, useRef } from 'react'


import { RaidContext } from "..";


var prevduple = true;

export function useOnDraw(onDraw, clearKey) {

    const RaidController = React.useContext(RaidContext);
    var line = [];

    const canRef = useRef(null);

    const isDrawingRef = useRef(false);




    const mouseMoveListenerRef = useRef(null);
    const mouseUpListenerRef = useRef(null);
    const mouseDownListenerRef = useRef(null);
    const handleClearKeyRef = useRef(null);

    const prevPointRef = useRef(null);

    function UploadPath() {
        
        if (prevduple) {
            var templine = line;
            console.log(line.length);
            line = [];

            prevduple = !prevduple;

            RaidController.placeLineOnMap({ templine });
        }else{
            prevduple = !prevduple
        }

    }



    function setCanvasRef(ref) {

        if (!ref) return;
        if (canRef.current) {

            canRef.current.removeEventListener("mousedown", mouseDownListenerRef.current);
            canRef.current.removeEventListener("mouseup", mouseUpListenerRef.current);
            canRef.current.removeEventListener("mousemove", mouseMoveListenerRef.current);
            canRef.current.removeEventListener("clearkey", handleClearKeyRef.current);

        }

        canRef.current = ref
        initMouseMoveListener();
        initMouseDownListener();
        initMouseuUpListener();
        inithandleClearKey();

    }

    function inithandleClearKey(){
        const handleClearKey = (e) => {
            var key = e.key;
            const ctx = canRef.current.getContext('2d');
            if (key === "k") clear(ctx);

            console.log(`you pressed: ${key}`)
        }
        handleClearKeyRef.current = handleClearKey;
        window.addEventListener("clearkey", handleClearKey);

    
    }



    function initMouseMoveListener() {
        const mouseMoveListener = (e) => {

            if (isDrawingRef.current) {

                const point = Compointcanvas(e.clientX, e.clientY);
                const ctx = canRef.current.getContext('2d');
                if (onDraw) onDraw(ctx, point, prevPointRef.current);
                prevPointRef.current = point;


                line.push(point);

            }



        }
        mouseMoveListenerRef.current = mouseMoveListener;
        window.addEventListener("mousemove", mouseMoveListener);
    }


    function initMouseDownListener() {
        if (!canRef.current) return;
        const mdListener = () => {

            isDrawingRef.current = true;

        }
        mouseDownListenerRef.current = mdListener;
        canRef.current.addEventListener("mousedown", mdListener);

    }


    function initMouseuUpListener() {
        if (!canRef.current) return;

        const muListener = () => {

            isDrawingRef.current = false;
            prevPointRef.current = null;
            UploadPath();



        }


        mouseUpListenerRef.current = muListener;
        window.addEventListener("mouseup", muListener);



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