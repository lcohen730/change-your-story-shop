import { useState, useEffect } from 'react';

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
            <h1>CHECKOUT PAGE PLACEHOLDER</h1>
        </div>
    )
}