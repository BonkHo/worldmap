import React from "react";
import { geoEqualEarth, geoPath } from "d3";

const projection = geoEqualEarth();
const path = geoPath(projection);

const CircleMark = ({ data }) => {
	return (
		<g className="marks">
			{data.features.map((feature) => (
				<path d={path(feature)} />
			))}
		</g>
	);
};

export default CircleMark;
