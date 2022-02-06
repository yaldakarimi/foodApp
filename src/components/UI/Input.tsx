import React, { forwardRef } from "react";
import styles from "./Input.module.css";

interface Props {
  label: string;
  input: any;
}

const Input = forwardRef(({ label, input }: Props, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={input.id}>{label}</label>
      <input {...input} ref={ref} />
    </div>
  );
});

export default Input;
