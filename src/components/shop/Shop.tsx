import { ComponentPropsWithoutRef } from "react";
import Cart from "./cart/Cart";
import { IItem } from "../../App";
import "./Shop.css";

interface IShop extends ComponentPropsWithoutRef<"div"> {
	items: Array<IItem>;
	transfareToSearch: (item: string) => void;
}

export default function Shop({ items, transfareToSearch }: IShop) {
	return (
		<Cart
			items={items}
			transfareToSearch={transfareToSearch}
		/>
	);
}
