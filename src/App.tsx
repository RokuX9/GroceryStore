import { useState } from "react";
import Search from "./components/search/Search";
import "./App.css";

function App() {
	const [showItems, setShowItems] = useState<boolean>(false);

	return (
		<>
			<Search />
		</>
	);
}

export default App;
