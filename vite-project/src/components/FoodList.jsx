import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FoodList = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        axios.get('https://food-delivery-system-7yeu.vercel.app/api/foods/')
            .then(response => setFoods(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h2>Food List</h2>
            <ul>
                {foods.map(food => (
                    <li key={food._id}>{food.name} - ${food.price}</li>
                ))}
            </ul>
            <a href='/foods/new'>Add  New Food</a>
        </div>
    );
};

export default FoodList;
