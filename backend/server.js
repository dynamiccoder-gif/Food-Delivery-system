import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import foods from './routes/foods.js'
import order from './routes/order.js'

dotenv.config(
    {
        path:'.env'
    }
)


const app = express();
const PORT = process.env.PORT || 5152;

app.use(cors({

origin: ["https://deploy-mern-1whq.vercel.app"],
methods: ["POST", "GET"],
credentials: true
}
I
    
));
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Routes
app.use('/api/foods', foods);
app.use('/api/orders', order);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
