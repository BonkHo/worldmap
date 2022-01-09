import React from "react";
import { useData } from "./hooks/useData";
import "./App.css";

// Components
import CircleMark from "./components/CircleMark";

const App = () => {
	const width = 1200;
	const height = 500;
	const data = useData();

	if (!data) {
		return <pre>"Loading"</pre>;
	}

	return (
		<svg width={width} height={height}>
			<CircleMark data={data} />
		</svg>
	);
};

export default App;
