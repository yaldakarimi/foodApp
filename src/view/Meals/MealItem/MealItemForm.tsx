import { useRef } from "react";

import { Input } from "components";
import styles from "./MealItemForm.module.css";

interface Props {
  id: string;
  onAdd: (amount: number) => void;
}

const MealItemForm = ({ id, onAdd }: Props) => {
  const amountInputRef = useRef<HTMLInputElement>();

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    if (amountInputRef.current?.value) {
      onAdd(+amountInputRef.current?.valueAsNumber);
    }
  };
  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          type: "number",
          id: "amount" + id,
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type='submit'>+ Add</button>
    </form>
  );
};

export default MealItemForm;
