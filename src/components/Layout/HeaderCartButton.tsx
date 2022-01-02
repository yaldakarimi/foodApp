import { FaShoppingCart } from "react-icons/fa";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
  return (
    <button className={styles.button}>
      <span className={styles.icon}>
        <FaShoppingCart />
      </span>
      <span>My Cart</span>
      <span className={styles.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
