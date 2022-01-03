import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import mealImage from "assets/meals.jpg";
import styles from "./Header.module.css";

interface Props {
  onModalOpen: () => void;
}

const Header = ({ onModalOpen }: Props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <div className={styles.headerItems}>
          <h1>ReactMeals</h1>
          <HeaderCartButton onModalOpen={onModalOpen} />
        </div>
      </header>
      <div className={styles.mainImage}>
        <img src={mealImage} alt="a table full of food!" />
      </div>
    </Fragment>
  );
};

export default Header;
