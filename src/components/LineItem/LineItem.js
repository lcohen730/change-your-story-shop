import { useState } from 'react';
import './LineItem.scss';

export default function LineItem({ item, handleChangeQty }) {
  const [qty, setQty] = useState(item.qty);
  const handleChange = (e) => {
    setQty(e.target.value)
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    handleChangeQty(item._id, qty)
  };
  return (
    <div className="lineItem">
      <div className="leftSide">
        <div className="itemImage">
          <img className="image" src={item.img} alt={item.name} />
        </div>
        <div className="name">
          <h2>{item.name}</h2>
        </div>
      </div>
      <div className="rightSide">
        <p className="price">${item.extPrice.toFixed(2)}</p>
        <form className="quantity" onSubmit={(e) => handleSubmit(e)}>
          <div className="changeQty">
            <input className="quantityWindow" type='number' value={qty} onChange={(e) => handleChange(e)} />
            <input className="quantityBtn" type='submit' value="CHANGE QUANTITY" />
          </div>
          <button className="quantityBtn" onClick={() => handleChangeQty(item._id, 0)}>REMOVE FROM CART</button>
        </form>
      </div>
    </div>
  )
}