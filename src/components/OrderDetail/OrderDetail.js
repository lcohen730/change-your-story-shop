import './OrderDetail.scss';
import LineItem from '../../components/LineItem/LineItem'; 

export default function OrderDetail({ user, cart, handleChangeQty }) {
  const items = cart.lineItems.map(item => 
    <LineItem
      user={user}
      key={item._id}
      item={item}
      handleChangeQty={handleChangeQty}
    />
  )

  return (
    <div className="lineItems">{items}</div>
  );
}