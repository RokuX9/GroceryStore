import { apiUrl } from "../../../../utils/constants";
import { ComponentPropsWithoutRef } from "react";
import "./SearchItem.css";

interface ISearchItem extends ComponentPropsWithoutRef<"div"> {
	name: String;
}

export default function SearchItem({ name }: ISearchItem) {
	return (
		<div
			className="search-item"
			onClick={async () => {
				const data = await fetch(apiUrl + name);
				console.log(await data.json());
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
