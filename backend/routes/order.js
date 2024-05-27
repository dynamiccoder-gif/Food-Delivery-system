// orders.js
import express from 'express';
const router = express.Router();
import Order from '../models/Order.js';

// Create an order
router.post('/', async (req, res) => {
    try {
        const newOrder = new Order(req.body);
        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Read all orders
router.get('/', async (req, res) => {
    try {
        const orders = await Order.find().populate('foodId');
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update an order
router.put('/:id', async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Delete an order
router.delete('/:id', async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json('Order deleted');
    } catch (err) {
        res.status(500).json(err);
    }
});

export default router;