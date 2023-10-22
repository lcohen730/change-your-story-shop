import "./ItemListItem.scss";
import { useState, useEffect } from "react";

export default function ItemListItem({
    itemListItem,
    handleAddToOrder,
    cart
}) {
    const [inCart, setInCart] = useState(false);

    /* useEffect(function () {
        cart.lineItems.forEach((lineItem) => {
            if (lineItem.item._id === itemListItem._id) {
                setInCart(true)
            }
        })
    }, []); */

    return (
        <div className="itemListItem">
            <div className="imageContainer">
                <img
                    className="image"
                    src={itemListItem.img.includes('imgur') ? itemListItem.img
                        : "https://images.thdstatic.com/productImages/1d64ea68-9f7f-45d3-ac5e-20b7c8522141/svn/orange-the-home-depot-paint-buckets-05glhd2-64_1000.jpg"
                    }
                />
            </div>
            <div className="itemInfoLine1">
                <div className="name">
                    {itemListItem.name}
                </div>
                <div className="price">
                    ${itemListItem.price}
                </div>
            </div>
            <div className="itemInfoLine2">
                {inCart ? (
                    <button className="btnDisabled">IN CART</button>
                ) : (
                    <button className="btnSm" onClick={() => {
                        handleAddToOrder(itemListItem._id);
                        setInCart(true);
                    }
                    }>
                        ADD TO CART
                    </button>
                )}
            </div>
        </div>
    );
}