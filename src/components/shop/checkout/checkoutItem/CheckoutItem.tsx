import { ComponentPropsWithRef } from "react";
import "./CheckoutItem.css";

interface ICheckoutItem extends ComponentPropsWithRef<"li"> {
	name: String;
	amount: number;
}

export default function CheckoutItem({ name, amount }: ICheckoutItem) {
	return (
		<li className="checkout-item">
			<span className="checkout-item__name">
				{name[0].toUpperCase() + name.substring(1)}
			</span>
			<div className="checkout-item__divider"></div>
			<span className="checkout-item__amount">{amount.toString()}KG</span>
		</li>
	);
}
