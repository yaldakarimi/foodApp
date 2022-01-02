import { Input } from "components";
import styles from "./MealItemForm.module.css";

interface Props {
  id: string;
}

const MealItemForm = ({ id }: Props) => {
  return (
    <form className={styles.form}>
      <Input
        label="Amount"
        input={{
          type: "number",
          id: "amount" + id,
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
