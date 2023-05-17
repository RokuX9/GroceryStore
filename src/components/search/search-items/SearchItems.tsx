import { ComponentPropsWithoutRef, Key } from "react";
import SearchItem from "./search-item/SearchItem";
import { IItem } from "../../../App";

import "./SearchItems.css";

interface ISearchItems extends ComponentPropsWithoutRef<"div"> {
	opened: boolean;
	items: Array<String>;
	transfareToCart: (item: IItem) => void;
}

export default function SearchItems({
	opened,
	items,
	transfareToCart,
}: ISearchItems) {
	return (
		<div
			className={
				opened ? "search__items search__items_opened" : "search__items"
			}
		>
			{items.map((item) => (
				<SearchItem
					name={item}
					key={item as Key}
					transfareToCart={transfareToCart}
				/>
			))}
		</div>
	);
}
