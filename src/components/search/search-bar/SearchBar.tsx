import { ComponentPropsWithoutRef } from "react";
import "./SearchBar.css";

interface ISearchBar extends ComponentPropsWithoutRef<"div"> {
	handleShowItems: () => void;
	opened: Boolean;
}

export default function SearchBar({ handleShowItems, opened }: ISearchBar) {
	return (
		<div
			className="search-bar"
			onClick={() => {
				handleShowItems();
			}}
		>
			<span className="search-bar__text">Select to add item to basket</span>
			<div
				className={
					opened
						? "search-bar__icon search-bar__icon_opened"
						: "search-bar__icon"
				}
			></div>
		</div>
	);
}
