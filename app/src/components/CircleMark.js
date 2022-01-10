import React from "react";
import { geoEqualEarth, geoPath } from "d3";

const projection = geoEqualEarth();
const path = geoPath(projection);

const CircleMark = ({ data }) => {
	return (
		<g className="marks">
			<path className="sphere" d={path({ type: "Sphere" })}></path>
			{data.features.map((feature) => (
				<path className="feature" d={path(feature)} />
			))}
		</g>
	);
};

export default CircleMark;
