class Node {
	/**
	 * @param {any} data 
	 * @param {Node} next 
	 */
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

/**
 * 2.3
 * Delete Middle Node: Implement an algorithm to delete a node in the middle (i.e., any node but
 * the first and last node, not necessarily the exact middle) of a singly linked list, given only access to
 * that node.
 * EXAMPLE
 * Input: the node c from the linked list a - >b- >c - >d - >e- >f
 * Result: nothing is returned, but the new linked list looks like a - >b- >d - >e- >f
 * @param {Node} node
 */
function deleteMiddleNode(node) {
	if (!node || !node.next) {
		return null;
	}

	let runner = node.next;
	let previous = null;

	while (runner.next) {
		previous = node;
		node = node.next;
		runner = runner.next;
		runner = runner.next ? runner.next : runner;
	}
	console.log("middle node", node);
	previous.next = node.next;
}

let node = new Node("a");
let node2 = new Node("b");
node.next = node2;
let node3 = new Node("c");
node2.next = node3;
let node4 = new Node("d");
node3.next = node4;
let node5 = new Node("e");
node4.next = node5;
let node6 = new Node("f");
node5.next = node6;

deleteMiddleNode(node);

console.log("After delete", JSON.stringify(node));
