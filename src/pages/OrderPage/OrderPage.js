import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './OrderPage.scss';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import * as ordersAPI from '../../utilities/orders-api';

export default function OrderPage({ user }) {
    const [cart, setCart] = useState({})

    useEffect(function () {
        async function getCart() {
            const data = await ordersAPI.getCart();
            setCart(data);
        }
        getCart();
    }, [])

    async function handleChangeQty(itemId, newQty) {
        const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
        setCart(updatedCart);
    }

    const showOrder = () => (
        <div className="container">
            <OrderDetail
                user={user}
                cart={cart}
                handleChangeQty={handleChangeQty}
            />
            <div className="total">TOTAL: ${cart.orderTotal.toFixed(2)}</div>
            <Link to="/cart/checkout" className="goToCheckout">
                <button>GO TO CHECKOUT</button>
            </Link>
        </div>
    );

    const emptyCart = () => (
        <p>YOUR CART IS EMPTY.</p>
    );

    return (
        <div className="container">
            <h1>Your Cart</h1>
            {cart.lineItems && cart.lineItems.length ? showOrder() : emptyCart()}
        </div>
    )
}