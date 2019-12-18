import React, { useState, useEffect } from "react";
import axios from "./axios";
// import * from "d3-hierarchy";
import { useDispatch, useSelector } from "react-redux";
import { getApplicationsData } from "./actions";

// import getNetworkFrameData from "./get-network-frame-data";

import NetworkFrame from "semiotic/lib/NetworkFrame";

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
                    id: item,
                    category: "Base Import"
                    // output: 127.93,
                    // category: "Base Import"
                };
            })
        );
    });

    const myEdges = useSelector(state => {
        console.log("In my edges");

        let a = [];

        let b =
            state.allApplicationsData &&
            state.allApplicationsData.map(item => {
                // Cities -> Job Applications
                if (item.applied) {
                    a.push({
                        source: item.city,
                        target: (item.applied = "Job Applications"),
                        value: 1
                    });
                }
                // Job Applications -> Response | No Response
                if (item.app_response) {
                    a.push({
                        source: (item.applied = "Job Applications"),
                        target: "Responded",
                        value: 1
                    });
                } else {
                    a.push({
                        source: (item.applied = "Job Applications"),
                        target: "No Response",
                        value: 1
                    });
                }
                // Response -> Online Interview
                if (item.online_int) {
                    a.push({
                        source: (item.app_response = "Responded"),
                        target: "Online Interview",
                        value: 1
                    });
                }
                // Response -> Inperson Interview
                if (item.inperson_int) {
                    a.push({
                        source: (item.app_response = "Responded"),
                        target: "In-person Interview",
                        value: 1
                    });
                }
                // Online Interview -> Offer
                if (item.offer) {
                    a.push({
                        source: (item.online_int = "Online Interview"),
                        target: "Offer",
                        value: 1
                    });
                }
                // Inperson Interview -> Offer
                if (item.offer) {
                    a.push({
                        source: (item.inperson_int = "In-person Interview"),
                        target: "Offer",
                        value: 1
                    });
                }
                // Offer -> offer_declined
                if (item.offer_declined) {
                    a.push({
                        source: (item.offer = "Offer"),
                        target: "Declined",
                        value: 1
                    });
                }
                // Offer -> Offer Accepted
                if (item.offer_accepted) {
                    a.push({
                        source: (item.offer = "Offer"),
                        target: "Accepted",
                        value: 1
                    });
                }
                console.log("a: ", a);
            });
        return a;
    });

    console.log("myEdges: ", myEdges);

    // const [nodesData, setNodesData] = useState();

    useEffect(() => {
        console.log("useEffect myNodes: ", myNodes);
        if (!myNodes) {
            dispatch(getApplicationsData());
            return;
        }
        frameProps.nodes = myNodes;
        frameProps.edges = myEdges;
        console.log("myNodes true useEffect myNodes: ", myNodes);
        setDone(true);
    }, [myNodes]);

    const frameProps = {
        nodes: myNodes,
        edges: myEdges,
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
        hoverAnnotation: true,

        orient: "justify"

        // nodeLabels: d => <text>{d.id}</text>
    };
    // let data = getNetworkFrameData();
    // setTimeout(() => {
    //     console.log("frame: ", frameProps);
    //     console.log("myNodes: ", myNodes);
    // }, 3000);

    console.log("frameProps: ", frameProps);
    console.log("OLD myNodes: ", myNodes);

    return <>{done && <NetworkFrame {...frameProps} />}</>;
    // return <NetworkFrame {...frameProps} />;
};

// edges: [
//     { source: "Berlin", target: "Job Applications", value: 102 },
//     { source: "Barcelona", target: "Job Applications", value: 39 },
//     { source: "Madrid", target: "Job Applications", value: 35 },
//     { source: "Amsterdam", target: "Job Applications", value: 15 },
//     { source: "Paris", target: "Job Applications", value: 14 },
//     { source: "London", target: "Job Applications", value: 6 },
//     { source: "Munich", target: "Job Applications", value: 5 },
//     { source: "Brussels", target: "Job Applications", value: 4 },
//     { source: "Dubai", target: "Job Applications", value: 3 },
//     { source: "Dublin", target: "Job Applications", value: 3 },
//     { source: "Other Cities", target: "Job Applications", value: 12 },
//     { source: "Job Applications", target: "No Response", value: 189 },
//     { source: "Job Applications", target: "Responded", value: 49 },
//     { source: "Responded", target: "Rejected", value: 38 },
//     { source: "Responded", target: "Interviewed", value: 11 },
//     { source: "Interviewed", target: "No Offer", value: 8 },
//     { source: "Interviewed", target: "Declined Offer", value: 2 },
//     { source: "Interviewed", target: "Accepted Offer", value: 1 }
// ],
