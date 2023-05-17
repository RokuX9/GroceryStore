import { useState } from "react";
import SearchBar from "./search-bar/SearchBar";
import SearchItems from "./search-items/SearchItems";
import "./Search.css";

export default function Search() {
	const [openSearchItems, setOpenSearchItems] = useState<boolean>(false);

	const handleShowItems = () => setOpenSearchItems((prev) => !prev);

	return (
		<div className="search">
			<SearchBar handleShowItems={handleShowItems} />
			<SearchItems opened={openSearchItems} />
		</div>
	);
}
