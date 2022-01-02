import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import mealImage from "assets/meals.jpg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <Fragment>
      <header className={styles.header}>
        <div className={styles.headerItems}>
          <h1>ReactMeals</h1>

          <HeaderCartButton />
        </div>
      </header>
      <div className={styles.mainImage}>
        <img src={mealImage} alt="a table full of food!" />
      </div>
    </Fragment>
  );
};

export default Header;
