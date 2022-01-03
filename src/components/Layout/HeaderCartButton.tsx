import { FaShoppingCart } from "react-icons/fa";
import styles from "./HeaderCartButton.module.css";

interface Props {
  onModalOpen: () => void;
}

const HeaderCartButton = ({ onModalOpen }: Props) => {
  return (
    <button className={styles.button} onClick={onModalOpen}>
      <span className={styles.icon}>
        <FaShoppingCart />
      </span>
      <span>My Cart</span>
      <span className={styles.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
