import { apiUrl } from "../../../../utils/constants";
import { ComponentPropsWithoutRef } from "react";
import { IItem } from "../../../../App";
import "./SearchItem.css";

interface ISearchItem extends ComponentPropsWithoutRef<"div"> {
	name: String;
	transfareToCart: (item: IItem) => void;
}

export default function SearchItem({ name, transfareToCart }: ISearchItem) {
	return (
		<div
			className="search-item"
			onClick={async () => {
				const result = await fetch(apiUrl + name);
				const data = await result.json();
				transfareToCart({
					itemId: data!.id,
					name: data!.name,
					itemColor: data!.color,
					price: data!.price,
					stock: data!.stock,
				});
			}}
		>
			<span className="search-item__name">
				{name[0].toUpperCase() + name.substring(1)}
			</span>
			<div className="search-item__divider"></div>
			<div className={"search-item__icon search-item__icon_type_" + name}></div>
		</div>
	);
}
