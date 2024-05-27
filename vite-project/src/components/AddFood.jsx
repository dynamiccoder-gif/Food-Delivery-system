import React, { useState } from 'react';
import axios from 'axios';

const AddFood = () => {
    const [food, setFood] = useState({ name: '', price: '', description: '', imageUrl: '' });
    const [message, setMessage] = useState(''); // State for the success message

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFood({ ...food, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/foods', food)
            .then(response => {
                setMessage('Your item has been added successfully!');
                // Clear the form fields after submission
                setFood({ name: '', price: '', description: '', imageUrl: '' });
            })
            .catch(error => {
                console.log(error);
                setMessage('There was an error adding your item.');
            });
    };

    return (
        <div>
            <h2>Add Food</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={food.name} onChange={handleChange} placeholder="Name" required />
                <input type="number" name="price" value={food.price} onChange={handleChange} placeholder="Price" required />
                <input type="text" name="description" value={food.description} onChange={handleChange} placeholder="Description" />
                <input type="text" name="imageUrl" value={food.imageUrl} onChange={handleChange} placeholder="Image URL" />
                <button type="submit">Add Food</button>
            </form>
            {message && <p>{message}</p>} {/* Conditionally render the message */}
            <a href='/'>View all foods</a>
        </div>
    );
};

export default AddFood;
