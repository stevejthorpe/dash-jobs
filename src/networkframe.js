import React, { useState, useEffect } from "react";
import axios from "./axios";
import { useDispatch, useSelector } from "react-redux";
import { getApplicationsData } from "./actions";

// import getNetworkFrameData from "./get-network-frame-data";

import NetworkFrame from "semiotic/lib/NetworkFrame";

// let myNodes;

// const dispatch = useDispatch();

export default () => {
    const colors = {
        "Base Import": "#ac58e5",
        Usage: "#E0488B",
        Intermediary: "#9fd0cb",
        Other: "#e0d33a"
    };

    const dispatch = useDispatch();

    const [done, setDone] = useState(false);

    const myNodes = useSelector(state => {
        return (
            state.allApplicationsData &&
            Object.keys(state.allApplicationsData[0]).map(item => {
                return {
                    id: item
                };
            })
        );
    });

    // const myEdges = useSelector(state => {
    //     return (
    //         state.allApplicationsData &&
    //         state.allApplicationsData.map(node => {
    //             // console.log("node: ", node);
    //             // console.log("In myNodes");
    //             return {
    //                 source: //i.e city
    //                 target: // to job status
    //                 value:
    //             };
    //         })
    //     );
    // });

    // const [nodesData, setNodesData] = useState();

    useEffect(() => {
        console.log("myNodes");
        console.log("NEW: ", myNodes);
        if (!myNodes) {
            dispatch(getApplicationsData());
            return;
        }
        frameProps.nodes = myNodes;
        setDone(true);
    }, [myNodes]);

    const frameProps = {
        nodes: [],
        // edges: [],
        size: [700, 500],
        margin: { right: 130, bottom: 20 },
        networkType: { type: "sankey", nodePaddingRatio: 0.1 },
        nodeIDAccessor: "id",
        sourceAccessor: "source",
        targetAccessor: "target",
        nodeStyle: function(e) {
            // console.log("nodeStyle e: ", e);
            return { stroke: colors[e.category], fill: colors[e.category] };
        },

        edgeStyle: function(e) {
            return {
                stroke: colors[e.target.category],
                fill: colors[e.source.category],
                fillOpacity: 0.1
            };
        },
        edgeWidthAccessor: "value",
        hoverAnnotation: true
        // nodeLabels: d => <text>{d.id}</text>
    };
    // let data = getNetworkFrameData();
    // setTimeout(() => {
    //     console.log("frame: ", frameProps);
    //     console.log("myNodes: ", myNodes);
    // }, 3000);

    console.log("frame: ", frameProps);
    console.log("myNodes: ", myNodes);

    return <>{done && <NetworkFrame {...frameProps} />}</>;
};
