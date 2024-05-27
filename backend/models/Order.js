// Order.js
import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    foodId: { type: mongoose.Schema.Types.ObjectId, ref: 'Food', required: true },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    customerName: { type: String, required: true },
    customerAddress: { type: String, required: true },
    status: { type: String, default: 'Pending' },
});

export default mongoose.model('Order', OrderSchema);
