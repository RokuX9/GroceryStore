import { ComponentPropsWithoutRef, useState } from "react";
import Cart from "./cart/Cart";
import Checkout from "./checkout/Checkout";
import { IItem } from "../../App";
import "./Shop.css";

interface IShop extends ComponentPropsWithoutRef<"div"> {
	items: Array<IItem>;
	transfareToSearch: (item: string) => void;
}

export default function Shop({ items, transfareToSearch }: IShop) {
	const [checkoutItems, setCheckoutItems] = useState<
		Array<{ id: String; amount: number; price: number }>
	>([]);

	const handleCheckoutAmountChange = (
		id: String,
		amount: number,
		price: number
	) => {
		setCheckoutItems((prev) => {
			const filteredItems = prev.filter((item) => item.id !== id);
			if (amount > 0) return [...filteredItems, { id, amount, price }];
			else return [...filteredItems];
		});
	};

	return (
		<div className="shop">
			<Cart
				items={items}
				transfareToSearch={transfareToSearch}
				setCheckoutItemAmount={handleCheckoutAmountChange}
			/>
			<hr className="shop__divider" />
			<Checkout items={checkoutItems} />
		</div>
	);
}
