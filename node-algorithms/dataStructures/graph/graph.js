class Graph {

    constructor() {
        this.nodes = new Map()
    }

    addNode = (value) => {
        const node = new Node(value)
        this.nodes.set(value, node)
    }

    addEdge = (startValueNode, endValueNode) => {

        const  startNode = this.nodes.get(startValueNode)
        const  endNode = this.nodes.get(endValueNode)
        
        if(startNode && endNode) {
            startNode.addEdge(endNode)
            endNode.addEdge(startNode) // undirected graph
        }

    }

    showGraph = () => {
        for(const [key, node] of this.nodes) {
            const edges = node.edges.map(edge => edge.value)
            console.log(`${key} -> ${edges.join(', ')}`)
        }
    }

}

class Node {

    constructor(value) {
        this.value = value
        this.edges = []
    }

    addEdge(node) {
        this.edges.push(node)
    }



}

const graph = new Graph()
graph.addNode(1)
graph.addNode(2)
graph.addEdge(1, 2)
console.log(graph)
graph.addNode(3)
graph.addEdge(1, 3)
console.log(graph)
graph.addNode(4)    
graph.addEdge(2, 4)

graph.showGraph()