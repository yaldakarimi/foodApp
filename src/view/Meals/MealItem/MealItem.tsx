import { MealModel } from "app/types";
import MealItemForm from "./MealItemForm";
import styles from "./MealItem.module.css";

interface Props {
  data: MealModel;
}
const MealItem = ({ data }: Props) => {
  const price = `$${data.price.toFixed(2)}`;
  return (
    <li className={styles.meal}>
      <div>
        <h3>{data.name}</h3>
        <div className={styles.description}>{data.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={data.id} />
      </div>
    </li>
  );
};

export default MealItem;
