// Importing useState from react
import { useState } from "react";

// import css from TooltipElement.module.css
import styles from "./TooltipElement.module.css";

const TooltipElement = ({ tooltipText, direction, children }) => {
  // Using state to set and get the Visiblility of the tooltip
  const [isVisible, setIsVisible] = useState(false);
  return (
    // Tooltip container that contains tooltip text and tooltip hover element
    <div
      className={styles.tooltipContianer}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}

      {/* if isVisible state is true then only tooltip will be visible */}
      {isVisible && (
        <div className={`${styles[direction]} ${styles.tooltipText}`}>
          {/* this is the tooltip message */}
          {tooltipText}
        </div>
      )}
    </div>
  );
};

//exporting TooltipElement component
export default TooltipElement;
