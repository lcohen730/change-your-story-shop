import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';
import { getUser, makeGuest } from '../../utilities/users-service';
import CheckoutPage from '../CheckoutPage/CheckoutPage';
import HomePage from '../HomePage/HomePage';
import OrderPage from '../OrderPage/OrderPage';
import NavBar from '../../components/NavBar/NavBar';
import * as ordersAPI from '../../utilities/orders-api';
/* import { PaymentForm } from 'react-square-web-payments-sdk'; */

export default function App() {
  const [user, setUser] = useState(getUser());
  const [cart, setCart] = useState({});

  useEffect(function () {
    try {
      async function confirmUser() {
        if (!user) {
          try {
            const guest = await makeGuest();
            setUser(guest);
          }
          catch (error) {
            console.log(error)
          }
          console.log(user)
        }
      }
      confirmUser();
      async function getCart() {
        if (user) {
          const data = await ordersAPI.getCart();
          setCart(data);
        }
      }
      getCart();
    } catch (error) {
      console.log(error)
    }
  }, [user])

  async function handleAddToOrder(itemId) {
    const updatedCart = await ordersAPI.addItemToCart(itemId);
    setCart(updatedCart);
  }

  return (
   /*  <PaymentForm> */
      <main className="App">
        <NavBar user={user} cart={cart} />
        <Routes>
          {/* client-side route that renders the component instance if the path matches the url in the address bar */}
          <Route path="/home" element={<HomePage user={user} handleAddToOrder={handleAddToOrder} cart={cart} />} />
          <Route path="/cart" element={<OrderPage user={user} />} />
          <Route path="/cart/checkout" element={<CheckoutPage user={user} />} />
          <Route path="/*" element={<Navigate to="/home" />} />
        </Routes>
      </main>
    /* </PaymentForm> */
  )
}