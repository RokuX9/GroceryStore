import { ComponentPropsWithoutRef, Key } from "react";
import CartItem from "./cartItem/CartItem";
import { IItem } from "../../../App";
import "./Cart.css";

interface ICart extends ComponentPropsWithoutRef<"div"> {
	items: Array<IItem>;
	transfareToSearch: (item: string) => void;
	setCheckoutItemAmount: (id: String, amount: number, price: number) => void;
}

export default function Cart({
	items,
	transfareToSearch,
	setCheckoutItemAmount,
}: ICart) {
	return (
		<div className="cart">
			{items.map((item) => (
				<CartItem
					item={item}
					transfareToSearch={transfareToSearch}
					setCheckoutItemAmount={setCheckoutItemAmount}
					key={item.itemId as Key}
				/>
			))}
		</div>
	);
}
