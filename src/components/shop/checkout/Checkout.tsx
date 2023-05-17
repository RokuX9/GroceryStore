import { ComponentPropsWithoutRef, Key } from "react";
import CheckoutItem from "./checkoutItem/CheckoutItem";
import { apiUrl } from "../../../utils/constants";
import "./Checkout.css";

interface ICheckout extends ComponentPropsWithoutRef<"div"> {
	items: Array<{
		id: String;
		amount: number;
		price: number;
	}>;
}

export default function Checkout({ items }: ICheckout) {
	const calculateTotalPrice = () => {
		let total = 0;
		items.forEach((item) => {
			if (item.amount) {
				total = total + item.amount * item.price;
			}
		});
		return total;
	};

	const sendItemsToServer = async () => {
		const arrayForBody = items.map((item) => {
			return { id: item.id, amount: item.amount };
		});
		const result = await fetch(apiUrl, {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(arrayForBody),
		});
		const data = await result.json();
		alert(data.message);
	};

	return (
		<div className="checkout">
			<h2 className="checkout__header">Items List:</h2>
			<ul className="checkout__items">
				{items.map((item) =>
					item.amount ? (
						<CheckoutItem
							name={item.id}
							amount={item.amount}
							key={item.id as Key}
						/>
					) : (
						""
					)
				)}
			</ul>
			<p className="checkout__total">
				Total price:{" "}
				<span className="checkout__price">${calculateTotalPrice()}</span>
			</p>
			<button
				className={
					items.length
						? "checkout__submit"
						: "checkout__submit checkout__button_disabled"
				}
				onClick={sendItemsToServer}
				disabled={!Boolean(items.length)}
			>
				SUBMIT
			</button>
		</div>
	);
}
