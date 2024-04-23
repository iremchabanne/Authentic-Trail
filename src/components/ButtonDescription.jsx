import styles from "./ButtonDescription.module.css";

function ButtonDescription({ handleClick }) {
  return (
    <button onClick={handleClick} className={styles.button}>
      {" "}
      Go!{" "}
    </button>
  );
}

export default ButtonDescription;
