import { ComponentPropsWithoutRef } from "react";
import "./SearchBar.css";

interface ISearchBar extends ComponentPropsWithoutRef<"div"> {
	handleShowItems: () => void;
}

export default function SearchBar({ handleShowItems }: ISearchBar) {
	return (
		<div
			className="search-bar"
			onClick={() => {
				handleShowItems();
			}}
		>
			<span className="search-bar__text">Select to add item to basket</span>
			<div className="search-bar__icon"></div>
		</div>
	);
}
