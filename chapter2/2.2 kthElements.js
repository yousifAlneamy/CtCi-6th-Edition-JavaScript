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
 * 2.2
 * Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.
 * @param {Node} node
 * @param {number} k
 */
function kthElementsRecursion(node, k = 0) {
	const { kthNode } = countFromEnd(node, k);
	return kthNode;
}

function countFromEnd(node, k) {
	if (!node) {
		return { count: 0, kthNode: null };
	}

	let { count, kthNode } = countFromEnd(node.next, k);
	count++;

	if (count <= k) {
		console.log(node.data);
		kthNode = new Node(node.data, kthNode);
	}

	return { count, kthNode };
}

let node = new Node("1");
let node2 = new Node("2");
node.next = node2;
let node3 = new Node("3");
node2.next = node3;
let node4 = new Node("4");
node3.next = node4;
let node5 = new Node("5");
node4.next = node5;
let node6 = new Node("6");
node5.next = node6;

console.log(JSON.stringify(kthElementsRecursion(node, 3)));

/**
 *
 * @param {Node} node
 * @param {number} k
 */
function kthElementsRunner(node, k = 0) {
	// runner
	if (!node || k === 0) {
		return null;
	}
	let runner = node;
	while (runner && k > 0) {
		runner = runner.next;
		k--;
	}

	let kthNode = node;
	while (runner) {
		kthNode = kthNode.next;
		runner = runner.next;
	}
	return kthNode;
}

node = new Node("1");
node2 = new Node("2");
node.next = node2;
node3 = new Node("3");
node2.next = node3;
node4 = new Node("4");
node3.next = node4;
node5 = new Node("5");
node4.next = node5;
node6 = new Node("6");
node5.next = node6;

console.log(JSON.stringify(kthElementsRunner(node, 1)));
