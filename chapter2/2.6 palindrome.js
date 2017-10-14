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
 * 2.6
 * Palindrome: Implement a function to check if a linked list is a palindrome.
 * @param {Node} list
 */
function isPalindrome1(list) {
	reversedList = reverse(list);

	while (list) {
		if (list.data !== reversedList.data) {
			return false;
		}
		list = list.next;
		reversedList = reversedList.next;
	}
	return true;
}

function reverse(list) {
	let head = null;
	while (list) {
		const newNode = new Node(list.data);
		newNode.next = head;
		head = newNode;
		list = list.next;
	}
	return head;
}

let node = new Node(1);
let node2 = new Node(4);
node.next = node2;
let node3 = new Node(3);
node2.next = node3;

let node4 = new Node(3);
node3.next = node4;
let node5 = new Node(2);
node4.next = node5;
let node6 = new Node(1);
node5.next = node6;

console.log(isPalindrome1(node));

/**
 * runner version
 * @param {Node} list 
 */
function isPalindrome2(list) {
	// runner version
	if (!list.next) {
		return true;
	}
	let runner = list;
	let stack = [];

	while (runner && runner.next) {
		stack.push(list);
		runner = runner.next.next;
		list = list.next;
	}
	console.log(stack);

	if (runner) {
		list = list.next;
	}

	while (list) {
		const topValue = stack.pop().data;

		console.log(topValue, list.data);
		if (topValue !== list.data) {
			return false;
		}
		list = list.next;
	}
	return true;
}

node = new Node(1);
node2 = new Node(2);
node.next = node2;
node3 = new Node(3);
node2.next = node3;

node4 = new Node(3);
node3.next = node4;
node5 = new Node(2);
node4.next = node5;
node6 = new Node(1);
node5.next = node6;

console.log(isPalindrome2(node));

/**
 * recursive version
 * @param {Node} node 
 */
function isPalindrome3(node) {
	// recursive version
	const countWrapper = { count: 0 }; // counter instance
	return compareFromEnd(node, node, countWrapper) ? true : false;
}

function compareFromEnd(node, head, wrapper) {
	if (!node) {
		return head;
	}
	wrapper.count++;

	head = compareFromEnd(node.next, head, wrapper);

	if (wrapper.count <= 1) {
		return head;
	}
	wrapper.count -= 2;

	if (!head || head.data !== node.data) {
		return null;
	}
	return head.next ? head.next : head;
}

node = new Node(1);
node2 = new Node(2);
node.next = node2;
node3 = new Node(3);
node2.next = node3;

node4 = new Node(3);
node3.next = node4;
node5 = new Node(2);
node4.next = node5;
node6 = new Node(1);
node5.next = node6;

console.log(isPalindrome3(node));
