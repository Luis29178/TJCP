import { Component, useState, useEffect  } from 'react';
import image from './Tags/skull.jpg';
import {useSpring, animated} from "react-spring"
import {useDrag} from "react-use-gesture"
import tag1 from './Tags/SkullTag.png'

// function useCursorPosition() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const updatePosition = (e) => {
//       setPosition({
//         x: e.clientX,
//         y: e.clientY
//       });
//     }
//     document.addEventListener('mousemove', updatePosition);
//     return () => {
//       document.removeEventListener('mousemove', updatePosition);
//     }
//   });

//   return position;

// }









    var canvasStyle = {

        backgroundImage: `url(${tag1})`,
        backgroundSize: "cover",
        height: "50px",
        width: "50px",
        // top: "50px",
        // left: "50px"
        
}









const ImageOnKeyPress = (props) => {
  const [showImage, setShowImage] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
      const keyDownHandler = (e) => {
          if (e.key === 'w') {
              setShowImage(true);
          }
      };

      document.addEventListener('keydown', keyDownHandler);

      return () => {
          document.removeEventListener('keydown', keyDownHandler);
      }
  }, [showImage]);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY
      });
    }
    document.addEventListener('mousemove', updatePosition);
    return () => {
      document.removeEventListener('mousemove', updatePosition);
    }
  });

  const skullPos0 = useSpring({x: 0, y:0});

  const bindSkullPos0 = useDrag((params) => {
      skullPos0.x.set(params.offset[0]);
      skullPos0.y.set(params.offset[1]);
  })

  return (<>
        {showImage && <animated.div {...bindSkullPos0()} id="item0" className='tag' style={{
            position: "absolute",
            left: position.x,
            top: position.y,
            zIndex: "10"
            }}>                      
            <canvas style={canvasStyle}></canvas>   
            </animated.div>}
            <div> x: {position.x} y: {position.y}</div>
          {/* {showImage && <img style={{
            position: "absolute",
            width: "50px",
            height: "50px",
            top: "100px",
            left: "400px",
            zIndex: "10",
            borderRadius: "5px",
          }}src={image} alt="Image" />} */}
</>);
}

export default ImageOnKeyPress;