import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddOrder = () => {
    const [order, setOrder] = useState({ foodId: '', quantity: '', customerName: '', customerAddress: '' });
    const [foods, setFoods] = useState([]);
    const [message, setMessage] = useState(''); // State for the success or error message

    useEffect(() => {
        axios.get('http://localhost:5000/api/foods')
            .then(response => setFoods(response.data))
            .catch(error => console.log(error));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOrder({ ...order, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const selectedFood = foods.find(food => food._id === order.foodId);
        if (!selectedFood) {
            setMessage('Selected food item not found.');
            return;
        }
        const totalPrice = selectedFood.price * order.quantity;
        axios.post('http://localhost:5000/api/orders', { ...order, totalPrice })
            .then(response => {
                setMessage('Your order has been added successfully!');
                // Clear the form fields after submission
                setOrder({ foodId: '', quantity: '', customerName: '', customerAddress: '' });
            })
            .catch(error => {
                console.log(error);
                setMessage('There was an error adding your order.');
            });
    };

    return (
        <div>
            <h2>Add Order</h2>
            <form onSubmit={handleSubmit}>
                <select name="foodId" value={order.foodId} onChange={handleChange} required>
                    <option value="">Select Food</option>
                    {foods.map(food => (
                        <option key={food._id} value={food._id}>{food.name}</option>
                    ))}
                </select>
                <input type="number" name="quantity" value={order.quantity} onChange={handleChange} placeholder="Quantity" required />
                <input type="text" name="customerName" value={order.customerName} onChange={handleChange} placeholder="Customer Name" required />
                <input type="text" name="customerAddress" value={order.customerAddress} onChange={handleChange} placeholder="Customer Address" required />
                <button type="submit">Add Order</button>
            </form>
            {message && <p>{message}</p>} {/* Conditionally render the message */}
            <a href='/orders'>View all ORDER</a>
        </div>
    );
};

export default AddOrder;
