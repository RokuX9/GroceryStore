import { ComponentPropsWithoutRef } from "react";
import SearchItem from "./search-item/SearchItem";
import { items } from "../../../utils/constants";
import "./SearchItems.css";

interface ISearchItems extends ComponentPropsWithoutRef<"div"> {
	opened: boolean;
}

export default function SearchItems({ opened }: ISearchItems) {
	return (
		<div
			className={
				opened ? "search__items search__items_opened" : "search__items"
			}
		>
			{items.map((item, i) => (
				<SearchItem
					name={item}
					key={i}
				/>
			))}
		</div>
	);
}
