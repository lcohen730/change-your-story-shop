import './NavBar.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar({ cart }) {
    const [isHoveredCart, setIsHoveredCart] = useState(false);

    return (
        <div className="navBar">
            <div
                onMouseEnter={() => setIsHoveredLogo(true)}
                onMouseLeave={() => setIsHoveredLogo(false)}
            >
                <Link to="/home" className="logo">
                    <img
                        src="https://i.imgur.com/oc3HVWf.png"
                        alt="logo"
                    />
                </Link>
            </div>
            <div className="title">ONLINE SHOP</div>
            <div
                onMouseEnter={() => setIsHoveredCart(true)}
                onMouseLeave={() => setIsHoveredCart(false)}
            >
                <Link to="/cart" className="cart">
                    <img
                        src={
                            isHoveredCart
                                ? 'https://i.imgur.com/ZgV76Jx.png'
                                : 'https://i.imgur.com/H7PI4xJ.png'
                        }
                        alt="cart"
                    />
                </Link>
            </div>            
        </div>
    );
}