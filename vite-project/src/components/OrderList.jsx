import React, { useEffect, useState } from 'react';
import AddOrder from './AddOrder';
import axios from 'axios';

const OrderList = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/orders/')
            .then(response => setOrders(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h2>Order List</h2>
            <ul>
                {orders.map(order => (
                    <li key={order._id}>
                        {order.customerName} ordered {order.quantity} of {order.foodId.name} - Status: {order.status}
                    </li>
                ))}
            </ul>
            <a href='/orders/new'>ADD  NEW ORDER</a>
        </div>
    );
};

export default OrderList;
