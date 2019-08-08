import { GraphTypes } from "../beans/graph.beans";
import { Edge } from "./edge";

export class BaseNode implements GraphTypes.Node {
    name?: string;
    entity: any;
    inComingEdges: [GraphTypes.Edge];
    outGoingEdges?: [GraphTypes.Edge];

    constructor(entity: any, name?: string) {
        this.entity = entity;
        this.name = name;
    }

    public createEdge(sourceNode: GraphTypes.Node, targetNode: GraphTypes.Node, value?: any): Edge {
        const connectingEdge = new Edge(value);
        connectingEdge.conect(sourceNode, targetNode);
        this.outGoingEdges.push(connectingEdge);
        targetNode.inComingEdges.push(connectingEdge);
        return connectingEdge;
    }

    public link(targetNode: GraphTypes.Node, value?: any): Edge {
        return this.createEdge(this, targetNode, value);
    }
}

export class Node extends BaseNode {
    entity: string | number | Object;

    constructor(entiry: Function, name?: string) {
        super(entiry, name);
        this.entity = entiry;
        this.name = name;
    }
}

export class OperationNode extends BaseNode {
    entity: Function;

    constructor(entiry: Function, name?: string) {
        super(entiry, name);
        this.entity = entiry;
        this.name = name;
    }

}