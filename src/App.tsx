import Search from "./components/search/Search";
import "./App.css";
import { useState } from "react";
import Shop from "./components/shop/Shop";
import { items } from "./utils/constants";

export interface IItem {
	itemId: String;
	name: String;
	itemColor: String;
	price: number;
	stock: number;
}

function App() {
	const [searchItems, setSearchItems] = useState<Array<String>>(items);
	const [cartItems, setCartItems] = useState<Array<IItem>>([]);

	const transfareToCart = (item: IItem) => {
		setSearchItems((prev) => prev.filter((name) => name !== item.itemId));
		setCartItems((prev) => [...prev, item]);
	};
	const transfareToSearch = (item: String) => {
		setCartItems((prev) => prev.filter((itemObj) => itemObj.itemId !== item));
		setSearchItems((prev) => [...prev, item]);
	};

	return (
		<>
			<Search
				items={searchItems}
				transfareToCart={transfareToCart}
			/>
			<Shop
				items={cartItems}
				transfareToSearch={transfareToSearch}
			/>
		</>
	);
}

export default App;
