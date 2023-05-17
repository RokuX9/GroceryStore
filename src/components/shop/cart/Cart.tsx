import { ComponentPropsWithoutRef } from "react";
import CartItem from "./cartItem/CartItem";
import { IItem } from "../../../App";
import "./Cart.css";

interface ICart extends ComponentPropsWithoutRef<"div"> {
	items: Array<IItem>;
	transfareToSearch: (item: string) => void;
}

export default function Cart({ items, transfareToSearch }: ICart) {
	return (
		<div className="cart">
			{items.map((item, i) => (
				<CartItem
					item={item}
					transfareToSearch={transfareToSearch}
					key={i}
				/>
			))}
		</div>
	);
}
