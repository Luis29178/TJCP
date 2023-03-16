import React, { useState } from "react";
import MapCanvas from "./MapCanvas";

function RGBColorSlider(props) {
  const [color, setColor] = useState("#000000");

  const handleSliderChange = (event) => {
    const value = event.target.value;
    const red = (value >> 16) & 255;
    const green = (value >> 8) & 255;
    const blue = value & 255;
    // const selectedColor = `rgb(${red}, ${green}, ${blue})`;
    const selectedColor = `rgb(${red}, ${green}, ${blue})`;

    setColor(selectedColor);
  };

  const divStyle = {
    width: "50px",
    height: "50px",
    backgroundColor: color,
    transition: "background-color 0.5s ease",
  };

  return (
    <div>
      <input type="range" min="0" max="16777215" onChange={handleSliderChange} />
      <div style={divStyle}></div>
      {/* <p>{color}</p> */}
    </div>
  );
}

export default RGBColorSlider;
