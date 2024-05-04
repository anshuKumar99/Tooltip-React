import styles from "./PositionButton.module.css";

const PositionButton = ({ handleButtonOnClick }) => {
  return (
    <div className={styles.buttonContainer}>
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

export default PositionButton;
