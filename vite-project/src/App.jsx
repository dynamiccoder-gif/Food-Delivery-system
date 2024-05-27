import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FoodList from './components/FoodList.jsx';
import OrderList from './components/OrderList.jsx';
import AddFood from './components/AddFood.jsx';
import AddOrder from './components/AddOrder.jsx';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
              <Routes>
                    <Route path="/" element={<FoodList/>} />
                    <Route path="/foods/new" element={<AddFood/>} />
                    <Route path="/orders" element={<OrderList/>} />
                    <Route path="/orders/new" element={<AddOrder/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
