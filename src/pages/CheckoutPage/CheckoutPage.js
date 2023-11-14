import { useState, useEffect } from 'react';
import './CheckoutPage.scss';
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm';

export default function CheckoutPage({ user }) {
    const [cart, setCart] = useState({});

    useEffect(function () {
        async function getCart() {
            const data = await ordersAPI.getCart();
            setCart(data);
        }
        getCart();
    }, [])

    return (
        <div className='checkout'>
            <h1>CHECKOUT</h1>
            <CheckoutForm user={user} cart={cart} />
        </div>
    )
}