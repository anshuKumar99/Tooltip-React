import { useState } from "react";
import styles from "./TooltipElement.module.css";

const TooltipElement = ({ tooltipText, direction, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div
      className={styles.tooltipContianer}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className={`${styles[direction]} ${styles.tooltipText}`}>
          {tooltipText}
        </div>
      )}
    </div>
  );
};

export default TooltipElement;
