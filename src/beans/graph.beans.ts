export namespace GraphTypes {
    export interface OperationGraph extends Graph {
        execute(): any;
    }

    export interface Graph {
        name?: string;
        isDirected: boolean;
        nodes: [Node];
        edges: [Edge];
        bfs(): [Node];
        dfs(): [Node];
        edgeCount(): number;
        nodeCount(): number;
        addNode(node: Node): void;
        toJson(): any;
        fromJson(data: any): void;
    }

    export interface Node {
        name?: string;
        entity: any;
        inComingEdges: [Edge];
        outGoingEdges?: [Edge];
        createEdge(sourceNode: Node, targetNode: Node, value?: number | string | any): Edge;
        link(targetNode: Node, value?: number | string | any): Edge;
    }

    export interface Edge {
        sourceNode: Node;
        targetNode: Node;
        value?: number | string | any;
        conect(sourceNode: Node, targetNode: Node): void;
    }

    export interface OperationEdge {
        operation: Function;
    }
}