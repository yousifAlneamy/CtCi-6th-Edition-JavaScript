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
 * 2.4
 * Partition: Write code to partition a linked list around a value x, such that all nodes less than x come
 * before all nodes greater than or equal to x. lf x is contained within the list, the values of x only need
 * to be after the elements less than x (see below). The partition element x can appear anywhere in the
 * "right partition"; it does not need to appear between the left and right partitions.
 * EXAMPLE
 * Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition = 5)
 * Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8
 * @param {Node} node
 * @param {number} x
 */
function partition(node, x) {
	if (!node) {
		return null;
	}
	let beforeTail, afterHead, afterTail, beforeHead;
	beforeTail = afterHead = afterTail = beforeHead = null;

	while (node) {
		let next = node.next;
		node.next = null;
		if (node.data < x) {
			const { head, tail } = insertNodeOnTail(node, beforeHead, beforeTail);
			beforeHead = head;
			beforeTail = tail;
		} else {
			const { head, tail } = insertNodeOnTail(node, afterHead, afterTail);
			afterHead = head;
			afterTail = tail;
		}
		node = next;
	}

	if (!beforeTail) {
		return afterHead;
	}
	beforeTail.next = afterHead;

	return beforeHead;
}
// this function adds a node to tail and sets the head if it's null
function insertNodeOnTail(node, head = null, tail = null) {
	if (tail) {
		tail.next = node;
	}
	tail = node;
	if (!head) {
		head = tail;
	}
	return { head, tail };
}

let node = new Node("3");
let node2 = new Node("5");
node.next = node2;
let node3 = new Node("8");
node2.next = node3;
let node4 = new Node("5");
node3.next = node4;
let node5 = new Node("10");
node4.next = node5;
let node6 = new Node("2");
node5.next = node6;
let node7 = new Node("1");
node6.next = node7;

console.log(JSON.stringify(partition(node, 3)));
