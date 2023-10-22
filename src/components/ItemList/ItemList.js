import "./ItemList.scss";
import ItemListItem from "../ItemListItem/ItemListItem";

export default function ItemList({
  handleAddToOrder,
  setItemListItems,
  itemListItems,
  cart
}) {
  const items = itemListItems.map(item =>
    <ItemListItem
      key={item._id}
      handleAddToOrder={handleAddToOrder}
      itemListItem={item}
      setItemListItems={setItemListItems}
      itemListItems={itemListItems} 
      cart={cart} 
    />
  );

  return (
    <div className="itemList">
      {items}
    </div>
  );
}