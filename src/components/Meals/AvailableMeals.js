import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useEffect, useState } from "react";

const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);


    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const response = await fetch('https://react-http-d4728-default-rtdb.firebaseio.com/meals.json');
                if (!response.ok) {
                    throw new Error('Something went wrong!');
                }
                const responseData = await response.json();
                const loadedMeals = [];

                for (const key in responseData) {
                    loadedMeals.push({
                        id: key,
                        name: responseData[key].name,
                        description: responseData[key].description,
                        price: responseData[key].price,
                    });
                }
                setMeals(loadedMeals);
            } catch (error) {
                console.error(error);
            }
        };
        fetchMeals();
    }, []);

    const mealsList = meals.map((meal) => (
        <MealItem
            key={meal.id}
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
