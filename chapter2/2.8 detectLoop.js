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
 * 2.8
 * Loop Detection: Given a circular linked list, implement an algorithm that returns the node at the
 * beginning of the loop.
 * DEFINITION
 * Circular linked list: A (corrupt) linked list in which a node's next pointer points to an earlier node, so
 * as to make a loop in the linked list.
 * EXAMPLE
 * Input: A -) B -) C -) 0 -) E - ) C[the same C as earlier]
 * Output: C
 * @param {Node} list
 */
function detectLoop(list) {
	let nodesTracker = [];

	while (list) {
		if (list["passed"]) {
			break;
		}

		list["passed"] = true;
		nodesTracker.push(list);
		list = list.next;
	}

	for (let node of nodesTracker) {
		delete node.passed;
	}
	return list;
}

let node = new Node(1);
let node2 = new Node(2);
node.next = node2;
let node3 = new Node(3);
node2.next = node3;

let node4 = new Node(5);
node3.next = node4;
let node5 = new Node(2);
node4.next = node5;
let node6 = new Node(1);
node5.next = node6;

node6.next = node4; // looping

console.log(detectLoop(node));
