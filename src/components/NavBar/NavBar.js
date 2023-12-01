import './NavBar.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar({ cart }) {
    const [isHoveredCart, setIsHoveredCart] = useState(false);

    return (
        <div className="navBar">
            <div>
                <Link to="/home" className="logo">
                    <img
                        src="https://i.imgur.com/oc3HVWf.png"
                        alt="logo"
                    />
                </Link>
            </div>
            <div className="title">APPAREL <span>AND</span> NOVELTIES</div>
            <div>
                <Link to="/cart" className="cart">
                    <img
                        onMouseEnter={() => setIsHoveredCart(true)}
                        onMouseLeave={() => setIsHoveredCart(false)}
                        src={
                            isHoveredCart
                                ? 'https://cdn-icons-png.flaticon.com/128/2838/2838838.png'
                                : 'https://cdn-icons-png.flaticon.com/128/2838/2838895.png'
                        }
                        alt="cart"
                    />
                </Link>
                <div className="cartAmt">{cart.totalQty}</div>
            </div>        
        </div>
    );
}