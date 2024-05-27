// foods.js
import express from 'express';
const router = express.Router();
import Food from '../models/Food.js'

// Create a food item
router.post('/', async (req, res) => {
    try {
        const newFood = new Food(req.body);
        const savedFood = await newFood.save();
        res.status(201).json(savedFood);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Read all food items
router.get('/', async (req, res) => {
    try {
        const foods = await Food.find();
        res.status(200).json(foods);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update a food item
router.put('/:id', async (req, res) => {
    try {
        const updatedFood = await Food.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedFood);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Delete a food item
router.delete('/:id', async (req, res) => {
    try {
        await Food.findByIdAndDelete(req.params.id);
        res.status(200).json('Food item deleted');
    } catch (err) {
        res.status(500).json(err);
    }
});

export default router;
