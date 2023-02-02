import React, { useEffect, useRef } from 'react'


import { RaidContext } from "..";


var prevduple = true;
var lineRef = [];


    function ClearMap() {


        if (prevduple) {
            prevduple = !prevduple;
            RaidController.clearMap();
        } else {
            prevduple = !prevduple
        }

    }
    
export function useOnDraw(onDraw, clear, clearKey) {

    const RaidController = React.useContext(RaidContext);


    const canRef = useRef(null);

    const isDrawingRef = useRef(false);

    var line = [];




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





    function setCanvasRef(ref) {

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

            if (line.length > 0) {
                line = []

            }

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