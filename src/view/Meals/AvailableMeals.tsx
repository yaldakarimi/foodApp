import { MealModel } from "app/types";
import { MealItem } from "./MealItem";
import { Card } from "components/UI";
import styles from "./AvailableMeals.module.css";

const DUMMY_MEALS: Array<MealModel> = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS?.length &&
            DUMMY_MEALS.map((meal) => <MealItem key={meal.id} data={meal} />)}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
