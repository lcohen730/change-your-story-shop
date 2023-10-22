import '../HomePage/HomePage.scss';
import { useState, useEffect } from "react";
import * as itemsAPI from "../../utilities/items-api";
import ItemList from "../../components/ItemList/ItemList";

export default function HomePage({ handleAddToOrder, cart }) {
	const [itemListItems, setItemListItems] = useState([]);

	useEffect(function () {
		async function getItems() {
			const items = await itemsAPI.getAll();
			setItemListItems(items);
		}
		getItems();
	}, []);

	return (
		<div className="homePage">
			<ItemList
				itemListItems={itemListItems}
				setItemListItems={setItemListItems}
				handleAddToOrder={handleAddToOrder}
				cart={cart}
			/>
		</div>
	);
}