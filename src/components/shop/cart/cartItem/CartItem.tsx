import {
	ComponentPropsWithoutRef,
	FormEvent,
	useState,
	useEffect,
} from "react";
import { IItem } from "../../../../App";
import "./CartItem.css";

interface ICartItem extends ComponentPropsWithoutRef<"div"> {
	item: IItem;
	transfareToSearch: (item: string) => void;
}

export default function CartItem({ item, transfareToSearch }: ICartItem) {
	const { itemId, name, itemColor, price, stock } = item;
	const [amount, setAmount] = useState<number>(0);

	const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
		if (parseInt(e.currentTarget.value) > stock) {
			setAmount(stock);
			return;
		}
		if (Number.isNaN(parseInt(e.currentTarget.value))) {
			setAmount(0);
			return;
		}
		setAmount(parseInt(e.currentTarget.value));
	};

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
							className="item__amount_input"
							disabled={!Boolean(stock)}
						/>{" "}
						<span>{amount} KG</span>
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
			<div className="item__price">Price: {amount * price}</div>
		</div>
	);
}
