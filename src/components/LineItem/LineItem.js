import { useState } from 'react';
import './LineItem.scss';

export default function LineItem({ item, handleChangeQty }) {
  const [qty, setQty] = useState(item.qty);
  
  const handleChange = (e) => {
    setQty(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleChangeQty(item.item._id, qty);
  };

  const handleRemoveFromCart = () => {
    handleChangeQty(item.item._id, 0);
    window.location.reload();
  };

  return (
    <div className="lineItem">
      <div className="leftSide">
        <div className="itemImage">
          <img className="image" src={item.item.img} alt={item.item.name} />
        </div>
        <div className="name">
          <h2>{item.item.name}</h2>
        </div>
      </div>
      <div className="rightSide">
        <p className="price">${item.extPrice.toFixed(2)}</p>
        <form className="quantity" onSubmit={(e) => handleSubmit(e)}>
          <div className="changeQty">
            <input className="quantityWindow" type='number' value={qty} onChange={(e) => handleChange(e)} />
            <input className="quantityBtn" type='submit' value="CHANGE QUANTITY" />
          </div>
          <div className="removeBtn" onClick={handleRemoveFromCart}>REMOVE FROM CART</div>
        </form>
      </div>
    </div>
  )
}