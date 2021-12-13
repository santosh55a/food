import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Panner Butter Masala',
    description: 'cottage cheese, cream and spices',
    price: 12.99,
  },
  {
    id: 'm2',
    name: 'Pav Bhaji',
    description: 'smashed spicy indian curry with bread',
    price: 8.50,
  },
  {
    id: 'm3',
    name: 'Pani puri',
    description: 'Great Indian snacks',
    price: 9.50,
  },
  {
    id: 'm4',
    name: 'Bisebelle Bath',
    description: 'Healthy south indian meal',
    price: 8.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
