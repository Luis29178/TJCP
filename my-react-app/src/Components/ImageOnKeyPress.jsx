import { Component, useState, useEffect  } from 'react';
import image from './Tags/skull.jpg';
import {useSpring, animated} from "react-spring"
import {useDrag} from "react-use-gesture"
import tag1 from './Tags/SkullTag.png'
import greenlight from './Tags/green_light.png';
import loot from './Tags/loot_icon.png';
import money from './Tags/money_icon.png';
import redlight from './Tags/red_light.png';



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


  const mockPosX = position.x;
  const mockPosY = position.y;

  const [src, setSrc] = useState(tag1);
  const images = [tag1, greenlight, money, redlight , loot];
  let currentIndex0 = 1;
  var canvasStyle = {

    backgroundImage: `url(${src})`,
    backgroundSize: "cover",
    height: "50px",
    width: "50px",  
}
  return (<>
        {showImage && <animated.div className='tag' style={{
            position: "absolute",
            left: mockPosX - 25,
            top: mockPosY - 35,
            zIndex: "10"
            }}                         
            >                      
            <canvas onClick={() => {document.getElementById('item9').style.backgroundImage = `url(${images[currentIndex0]})`; currentIndex0 = currentIndex0 + 1; if(currentIndex0 === 5){currentIndex0=0};}} 
            style={canvasStyle}
            id="item9"></canvas>   
            </animated.div>}
            <div className='position'> x: {position.x} y: {position.y}</div>
</>);
}

export default ImageOnKeyPress;