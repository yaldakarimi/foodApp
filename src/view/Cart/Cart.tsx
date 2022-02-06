import { useContext } from "react";
import { CartContext } from "app/store";
import { CartItemModel } from "app/types";
import { Modal } from "components";
import styles from "./Cart.module.css";

interface Props {
  onModalClose: () => void;
}

const Cart = ({ onModalClose }: Props) => {
  const cartCtx = useContext(CartContext);

  return (
    <Modal onClose={onModalClose}>
      <ul className={styles.cartItems}>
        {cartCtx.items.map((item: CartItemModel) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{cartCtx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles.buttonAlt} onClick={onModalClose}>
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
