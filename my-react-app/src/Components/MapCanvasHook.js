import React, { useEffect, useRef } from 'react'


import { RaidContext } from "..";
import firebase from 'firebase/compat/app';
import { collection, query, orderBy } from 'firebase/firestore';


export function useOnDraw(onDraw, clear) {

    const RaidController = React.useContext(RaidContext);
    var line = [];

    const canRef = useRef(null);

    const isDrawingRef = useRef(false);




    const mouseMoveListenerRef = useRef(null);
    const mouseUpListenerRef = useRef(null);
    const mouseDownListenerRef = useRef(null);

    const prevPointRef = useRef(null);

    function UploadPath(){
        var templine = line
        console.log(line.length)
        line = [];

        RaidController.placeLineOnMap({templine});
        
    }


    function setCanvasRef(ref) {

        if (!ref) return;
        if (canRef.current) {

            canRef.current.removeEventListener("mousedown", mouseDownListenerRef.current);

        }

        canRef.current = ref
        initMouseMoveListener();
        initMouseDownListener();
        initMouseuUpListener();

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
            const ctx = canRef.current.getContext('2d');
            if (clear) clear(ctx);
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