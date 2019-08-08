import { GraphTypes } from "../beans/graph.beans";

export class Edge implements GraphTypes.Edge {
    sourceNode: GraphTypes.Node;
    targetNode: GraphTypes.Node;
    value?: any;

    constructor(value?: any) {
        this.value = value;
    }

    conect(sourceNode: GraphTypes.Node, targetNode: GraphTypes.Node): void {
        this.sourceNode = sourceNode;
        this.targetNode = targetNode;
    }
}