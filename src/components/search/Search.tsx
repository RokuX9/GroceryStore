import { ComponentPropsWithoutRef, useState } from "react";
import SearchBar from "./search-bar/SearchBar";
import SearchItems from "./search-items/SearchItems";
import { IItem } from "../../App";
import "./Search.css";

interface ISearch extends ComponentPropsWithoutRef<"div"> {
	transfareToCart: (item: IItem) => void;
	items: Array<String>;
}

export default function Search({ items, transfareToCart }: ISearch) {
	const [openSearchItems, setOpenSearchItems] = useState<boolean>(false);

	const handleShowItems = () => setOpenSearchItems((prev) => !prev);

	return (
		<div className="search">
			<SearchBar handleShowItems={handleShowItems} />
			<SearchItems
				opened={openSearchItems}
				items={items}
				transfareToCart={transfareToCart}
			/>
		</div>
	);
}
