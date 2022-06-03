

import React from 'react';
import Home from '../Components/Home/Home'
import Navbar from '../Components/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import Products from '../Components/Products/Products';
import Product from "../Components/Products/Product";
import Cart from '../Components/Cart/Cart';
import Checkout from '../Components/Checkout/Checkout';
import Login from '../Components/Login/Login';
import Singup from '../Components/Singup/Singup';
import About from '../Components/About/About';
import Contactus from '../Components/Contact/Contactus';
import PrivateRoute from '../Components/PrivateRoute';

export const AllRoutes =() => {
  return (
    <>
      <Navbar />

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/products" element={<Products />} />
  <Route path="/products/:id" element={<Product />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contactus />} />
  <Route path="/login" element={<Login />} />
  <Route path="/Singup" element={<Singup />} />
  <Route path="/cart" element={
    <PrivateRoute>
      <Cart />

    </PrivateRoute>
  } />
  <Route path="/checkout" element={<Checkout />} />
</Routes>
    </>
  );
}

