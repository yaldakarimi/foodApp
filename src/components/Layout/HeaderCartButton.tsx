import { useContext } from "react";
import { CartContext } from "app/store";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./HeaderCartButton.module.css";
import { CartItemModel } from "app/types";

interface Props {
  onModalOpen: () => void;
}

const HeaderCartButton = ({ onModalOpen }: Props) => {
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((total, current: CartItemModel) => {
    return total + current.amount;
  }, 0);

  return (
    <button className={styles.button} onClick={onModalOpen}>
      <span className={styles.icon}>
        <FaShoppingCart />
      </span>
      <span>My Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
