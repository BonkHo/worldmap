import React from "react";
import { curveNatural, line } from "d3";

const CircleMark = ({ data }) => {
	return (
		<g className="marks">
			{data.map((d) => (
				<path d={d} />
			))}
		</g>
	);
};

export default CircleMark;
