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
 * 2.1
 * Remove Dups: Write code to remove duplicates from an unsorted linked list.
 * FOLLOW UP
 * How would you solve this problem if a temporary buffer is not allowed?
 * @param {Node} head
 */

function removeDups(head) {
	const dec = {};
	let previous;
	let node = head;
	while (node) {
		if (dec[node.data]) {
			previous.next = node.next;
		} else {
			dec[node.data] = true;
			previous = node;
		}
		node = node.next;
	}
	return head;
}
let node = new Node("a");
let node2 = new Node("c");
node.next = node2;
let node3 = new Node("a");
node2.next = node3;
let node4 = new Node("b");
node3.next = node4;
let node5 = new Node("c");
node4.next = node5;
let node6 = new Node("b");
node5.next = node6;

console.log(JSON.stringify(removeDups(node)));

// With this function the runner is behind
function removeDupsNoBuffer(head) {
	let previous, runner;
	let node = head;
	let dupFoundFlag;
	while (node) {
		runner = head;
		dupFoundFlag = false;
		while (runner !== node) {
			if (runner.data === node.data) {
				previous.next = node.next;
				dupFoundFlag = true;
				break;
			}
			runner = runner.next;
		}
		if (!dupFoundFlag) {
			previous = node;
		}
		node = node.next;
	}
	return head;
}

node = new Node("a");
node2 = new Node("c");
node.next = node2;
node3 = new Node("a");
node2.next = node3;
node4 = new Node("b");
node3.next = node4;
node5 = new Node("c");
node4.next = node5;
node6 = new Node("b");
node5.next = node6;

console.log(JSON.stringify(removeDupsNoBuffer(node)));

function removeDupsNoBuffer_2(head) {
	// runner ahead
	let node = head;
	let runner, previous;
	while (node) {
		previous = node;
		runner = node.next;
		while (runner) {
			if (runner.data === node.data) {
				previous.next = runner.next;
				runner = runner.next;
			} else {
				previous = runner;
				runner = runner.next;
			}
		}
		node = node.next;
	}
	return head;
}

node = new Node("a");
node2 = new Node("c");
node.next = node2;
node3 = new Node("a");
node2.next = node3;
node4 = new Node("b");
node3.next = node4;
node5 = new Node("c");
node4.next = node5;
node6 = new Node("b");
node5.next = node6;

console.log(JSON.stringify(removeDupsNoBuffer_2(node)));
