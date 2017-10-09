class Graph {
	constructor(data, children = []) {
		this.data = data;
		this.children = children;
		this.id = ++Graph.id;
	}
}
Graph.id = 0;

/**
 * 4.1
 * Route Between Nodes: Given a directed graph, design an algorithm to find out whether there is a
 * route between two nodes.
 * @param {Graph} start
 * @param {Graph} end
 *
 * NOTE: Even when start and end are the same node,
 * this will check if there is a route between start and end
 */
function routeBetweenNodes(start, end) {
	if (!start || !end) {
		return false;
	}

	const dec = {}; // to store visited nodes
	const queue = [start];
	dec[start.id] = true;

	while (queue.length) {
		const processNode = queue.shift();

		for (let child of processNode.children) {
			if (child === end) {
				return true;
			}

			if (!dec[child.id]) {
				queue.push(child);
				dec[child.id] = true;
			}
		}
	}
	return false;
}

let node1 = new Graph(1);
let node2 = new Graph(2);
let node3 = new Graph(3);
let node4 = new Graph(4);
let node5 = new Graph(5);
let node6 = new Graph(6);
let node7 = new Graph(7);
let node8 = new Graph(8);
let node9 = new Graph(9);
let node10 = new Graph(10);

node1.children.push(node2, node3, node6);
node2.children.push(node10);
node3.children.push(node4);
node4.children.push(node5);
node5.children.push(node3);
node6.children.push(node2, node8);
node7.children.push(node5);
node8.children.push(node9);
node9.children.push(node7);
node10.children.push(node2);

console.log("rootBetweenNodes", routeBetweenNodes(node6, node10));
