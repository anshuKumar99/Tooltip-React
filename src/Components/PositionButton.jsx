// import css from PositionButton.module.css
import styles from "./PositionButton.module.css";

{
  /* PositionButton Component to set the position of the tooltip left, right, up or down */
}

const PositionButton = ({ handleButtonOnClick }) => {
  return (
    <div className={styles.buttonContainer}>
      {/* Buttons to set the position of the tooltip (left, right, up or down )*/}
      <button
        type="text"
        value="top"
        onClick={handleButtonOnClick}
        className={styles.button}
      >
        Top
      </button>
      <button
        type="text"
        value="right"
        onClick={handleButtonOnClick}
        className={styles.button}
      >
        Right
      </button>
      <button
        type="text"
        value="bottom"
        onClick={handleButtonOnClick}
        className={styles.button}
      >
        Bottom
      </button>
      <button
        type="text"
        value="left"
        onClick={handleButtonOnClick}
        className={styles.button}
      >
        Left
      </button>
    </div>
  );
};

//exporting PositionButton component
export default PositionButton;
