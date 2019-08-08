import { GraphTypes } from "../beans/graph.beans";
import { BaseNode, OperationNode } from "./node";
import { Edge } from "./edge";

export abstract class Graph {
    abstract createEdge(sourceNode: BaseNode, targetNode: BaseNode, value?: string): void;
}

export class DirectedGraph extends Graph implements GraphTypes.Graph {
    name?: string;
    isDirected: true;
    nodes: [BaseNode];
    edges: [Edge];

    constructor(name?: string) {
        super();
        this.name = name;
    }

    bfs(): [BaseNode] {
        throw new Error("Method not implemented.");
    }

    dfs(): [BaseNode] {
        throw new Error("Method not implemented.");
    }

    edgeCount(): number {
        return this.edges.length;
    }

    nodeCount(): number {
        return this.nodes.length;
    }

    addNode(node: BaseNode): void {
        this.nodes.push(node);
    }

    createEdge(sourceNode: BaseNode, targetNode: BaseNode, value?: string) {
        const connectingEdge = sourceNode.link(targetNode, value);
        this.addNode(sourceNode);
        this.addNode(targetNode);
        this.edges.push(connectingEdge);
    }

    toJson() {
        return this;
    }

    fromJson(data: any): void {
        this.name = data.name;
        this.nodes = data.nodes;
        this.edges = data.edges;
    }
}

export class OperationGraph extends DirectedGraph implements GraphTypes.OperationGraph {

    /**
     * Executes all Operational Nodes and returns collective graph result.
     * 
     * 
     * @memberOf OperationGraph
     */
    execute() {
        throw new Error("Method not implemented.");
    }

    private executeOperationNode(node: OperationNode) {
        node.outGoingEdges.forEach(e => {
            if (e.targetNode instanceof OperationNode) {
                this.executeOperationNode(e.targetNode);
            } else {
                e.sourceNode.entity(e.targetNode);
            }
        });
    }

}

export class GraphBuilder {
    private graph: GraphTypes.Graph;
    private name: string;

    constructor(name?: string) {
        this.name = name;
    }

    directed() {
        this.graph = new DirectedGraph(this.name);
        return this;
    }

    build() {
        return this.graph;
    }
}