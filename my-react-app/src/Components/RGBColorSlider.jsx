import { ColorContext } from './RaidMap.jsx';

function RGBColorSlider({ setColor }) {
  return (
    <ColorContext.Consumer>
      {(color) => {
        const handleSliderChange = (event) => {
          const value = event.target.value;
          const red = (value >> 16) & 255;
          const green = (value >> 8) & 255;
          const blue = value & 255;
          const selectedColor = `rgb(${red}, ${green}, ${blue})`;

          setColor(selectedColor);
        };

        const divStyle = {
          width: '20px',
          height: '20px',
          backgroundColor: color,
          transition: 'background-color 0.5s ease',
        };

        return (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input type="range" min="0" max="16777215" onChange={handleSliderChange} />
            <div style={{ ...divStyle}}></div>
          </div>
        );
      }}
    </ColorContext.Consumer>
  );
}

export default RGBColorSlider;
