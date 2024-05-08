// Importing useState from react
import { useState } from "react";

// Importing App.css
import "./App.css";

// Importing Elements from Components
import TooltipElement from "./Components/TooltipElement";
import PositionButton from "./Components/PositionButton";

function App() {
  // Using state to set and get the direction of the tooltip
  const [direction, setDirection] = useState("right");

  // onButtonClick function called when position button clicked
  const onButtonClick = (event) => {
    const newDirection = event.target.value;

    // Setting the position of the tooltip
    setDirection(newDirection);
  };

  return (
    // Tooltip App Container
    <div className="tooltip-app">
      {/* PositionButton to set the position of the tooltip*/}
      <PositionButton handleButtonOnClick={onButtonClick}></PositionButton>

      {/* TooltipElement that contains tooltip text and tooltip hover */}
      <TooltipElement
        tooltipText={"Thanks for hovering! I'm a Tooltip"}
        direction={direction}
      >
        <p className="tooltip-hover">Hover Over Me</p>
      </TooltipElement>
    </div>
  );
}

//exporting App component
export default App;
