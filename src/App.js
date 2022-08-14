import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import React from 'react';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Product from './Pages/Product';
import ProductList from './Pages/ProductList';
import Register from './Pages/Register';
import Cart from './Pages/Cart';
import Navbar from './Components/Navbar';

const App = () => {
    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/products/cart" element={<Cart />} />
                    <Route path="product/:id" element={<Product />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
};

export default App;