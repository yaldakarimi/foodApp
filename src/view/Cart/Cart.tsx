import { Modal } from "components";
import styles from "./Cart.module.css";

interface Props {
  onModalClose: () => void;
}

const Cart = ({ onModalClose }: Props) => {
  const cartItems = [{ id: "c1", name: "sushi", amount: "2", price: 12.99 }];
  return (
    <Modal onClose={onModalClose}>
      <ul className={styles.cartItems}>
        {cartItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.62</span>
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
