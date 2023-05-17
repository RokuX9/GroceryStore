import {
	ComponentPropsWithoutRef,
	FormEvent,
	useState,
	useEffect,
	useCallback,
} from "react";
import { IItem } from "../../../../App";
import "./CartItem.css";

interface ICartItem extends ComponentPropsWithoutRef<"div"> {
	item: IItem;
	transfareToSearch: (item: string) => void;
	setCheckoutItemAmount: (id: String, amount: number, price: number) => void;
}

export default function CartItem({
	item,
	transfareToSearch,
	setCheckoutItemAmount,
}: ICartItem) {
	const { itemId, name, itemColor, price, stock } = item;
	const [amount, setAmount] = useState<number>(0);

	const handleInputChange = useCallback((e: FormEvent<HTMLInputElement>) => {
		if (parseInt(e.currentTarget.value) > stock) {
			setAmount(stock);
			setCheckoutItemAmount(itemId, stock, price);
			return;
		}
		if (Number.isNaN(parseInt(e.currentTarget.value))) {
			setAmount(0);
			setCheckoutItemAmount(itemId, 0, price);
			return;
		}
		setAmount(parseInt(e.currentTarget.value));
		setCheckoutItemAmount(itemId, parseInt(e.currentTarget.value), price);
	}, []);

	useEffect(() => {
		if (stock === 0) {
			alert(`Sorry, ${name} not in stock.`);
		}
	}, []);

	return (
		<div className="item">
			<div
				className="item__header"
				style={{ backgroundColor: itemColor as string }}
			>
				<div className={"item__icon item__icon_type_" + itemId}></div>
				<span className="item__name">{name}</span>
			</div>
			<button
				className="item__delete"
				onClick={() => {
					setAmount(0);
					setCheckoutItemAmount(itemId, 0, price);
					transfareToSearch(itemId as string);
				}}
			>
				<div className="item__delete_icon"></div>
			</button>
			<div className="item__input">
				<div className="item__amount">
					<span className="item__amount_text">Select your amount</span>{" "}
					<span>
						<input
							type="number"
							min={0}
							max={stock}
							value={amount}
							onChange={handleInputChange}
							className={
								amount
									? "item__amount_input"
									: "item__amount_input item__text_disabled"
							}
							disabled={!Boolean(stock)}
						/>{" "}
						<span> KG</span>
					</span>
				</div>
				<input
					type="range"
					min={0}
					max={stock}
					value={amount}
					onChange={handleInputChange}
					className="item__range"
					disabled={!Boolean(stock)}
				/>
			</div>
			<div className="item__price">
				Price:{" "}
				<span
					className={
						amount ? "item__num-price" : "item__num-price item__text_disabled"
					}
				>
					${amount * price}
				</span>
			</div>
		</div>
	);
}
