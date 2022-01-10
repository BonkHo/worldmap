import React from "react";
import { geoEqualEarth, geoPath } from "d3";

const projection = geoEqualEarth();
const path = geoPath(projection);

const CircleMark = ({ data: { land, interiors } }) => {
	return (
		<g className="marks">
			<path className="sphere" d={path({ type: "Sphere" })}></path>
			{land.features.map((feature) => (
				<path className="land" d={path(feature)} />
			))}
			<path className="interiors" d={path(interiors)}></path>
		</g>
	);
};

export default CircleMark;
