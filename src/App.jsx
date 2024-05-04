import { useState } from "react";
import "./App.css";
import TooltipElement from "./Components/TooltipElement";
import PositionButton from "./Components/PositionButton";

function App() {
  const [direction, setDirection] = useState("right");

  const onButtonClick = (event) => {
    const newDirection = event.target.value;
    setDirection(newDirection);
  };

  return (
    <div className="tooltip-app">
      <PositionButton handleButtonOnClick={onButtonClick}></PositionButton>
      <TooltipElement
        tooltipText={"Thanks for hovering! I'm a Tooltip"}
        direction={direction}
      >
        <p className="tooltip-hover">Hover Over Me</p>
      </TooltipElement>
    </div>
  );
}

export default App;
