import styles from "./Input.module.css";

interface Props {
  label: string;

  input: any;
}

const Input = ({ label, input }: Props) => {
  return (
    <div className={styles.input}>
      <label htmlFor={input.id}>{label}</label>
      <input {...input} />
    </div>
  );
};

export default Input;
