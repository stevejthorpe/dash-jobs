import React from "react";
import { NetworkFrame, ORFrame, XYFrame } from "semiotic";
import flareData from "./data/flare.json";
// import baseballRaw from "./data/baseball_salary";
import { csvParse } from "d3-dsv";

// const baseballData = csvParse(baseballRaw);

// baseballData.forEach(d => {
//     d.salary = +d.salary;
//     d.value = +d.value;
//     d.average = +d.average;
// });

console.log("flareData", flareData);

const colors = [
    "#aee39a",
    "#5c922f",
    "#7efd7e",
    "#15b71e",
    "#fff655",
    "#b47548",
    "#fd5917",
    "#f4b6c7",
    "#fa217f",
    "#d65b6c",
    "#feba53",
    "#5f80da",
    "brown"
];

const quantitativeColors = [
    "#f1cbd5",
    "#f989a4",
    "#fa217f",
    "#a64d6c",
    "#887177"
];

export default class Hierarchy extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: "sankey",
            projection: "horozontal"
        };
    }

    render() {
        const selectOptions = [
            "sankey",
            "tree",
            "cluster",
            "force",

            "treemap",
            "partition",
            "chord"
        ].map(d => (
            <option key={`button-${d}`} value={d} label={d}>
                {d}
            </option>
        ));
        const projectionOptions = ["horozontal", "vertical", "radial"].map(
            d => (
                <option key={`button-${d}`} value={d} label={d}>
                    {d}
                </option>
            )
        );
        return (
            <div>
                Hierarchy all the things. Like this.
                <div>
                    <select
                        onChange={e => {
                            this.setState({ type: e.target.value });
                        }}
                    >
                        {selectOptions}
                    </select>
                    <select
                        onChange={e => {
                            this.setState({ projection: e.target.value });
                        }}
                    >
                        {projectionOptions}
                    </select>
                    <NetworkFrame
                        size={[500, 500]}
                        edges={flareData}
                        networkType={{
                            type: this.state.type,
                            projection: this.state.projection,
                            nodePadding: 1,
                            padding: this.state.type === "treemap" ? 5 : 0,
                            sum: d => d.value
                        }}
                        edgeStyle={{
                            fill: "brown",
                            fillOpacity: 0.5,
                            stroke: "none"
                        }}
                        edgeType={"arrowhead"}
                        nodeStyle={d => ({
                            fill: quantitativeColors[d.depth],
                            stroke: "black"
                        })}
                        nodeSizeAccessor={3}
                        nodeIDAccessor={"name"}
                        edgeWeightAccessor={"value"}
                        margin={{ top: 0, left: 0 }}
                        hoverAnnotation={true}
                        tooltipContent={d => (
                            <div className="tooltip-content">
                                <p>{d.name}</p>
                            </div>
                        )}
                        baseMarkProps={{ transitionDuration: 3000 }}
                    />
                </div>
            </div>
        );
    }
}
