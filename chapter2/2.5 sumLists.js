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
 * 2.5
 * Sum Lists: You have two numbers represented by a linked list, where each node contains a single
 * digit. The digits are stored in reverse order, such that the 1 's digit is at the head of the list. Write a
 * function that adds the two numbers and returns the sum as a linked list.
 * EXAMPLE
 * Input: (7-) 1 -) 6) + (5 -) 9 -) 2) .That is,617 + 295.
 * Output: 2 -) 1 -) 9. That is, 912.
 * FOLLOW UP
 * Suppose the digits are stored in forward order. Repeat the above problem.
 * EXAMPLE
 * Input: (6 -) 1 -) 7) + (2 -) 9 -) 5).That is,617 + 295.
 * Output: 9 -) 1 -) 2. That is, 912.
 * @param {Node} list1
 * @param {Node} list2
 */

function sumLists(list1, list2) {
	let sum = 0,
		reminder = 0;

	let sumNodeHead = null,
		sumNodeTail = null;

	while (list1 || list2 || reminder) {
		let num1 = list1 ? list1.data : 0;
		let num2 = list2 ? list2.data : 0;
		sum = num1 + num2 + reminder;

		let num3 = sum % 10;
		reminder = sum > 9 ? 1 : 0;

		const newNode = new Node(num3);
		if (sumNodeTail) {
			sumNodeTail.next = newNode;
		}
		sumNodeTail = newNode;
		if (!sumNodeHead) {
			sumNodeHead = sumNodeTail;
		}

		list1 = list1 ? list1.next : null;
		list2 = list2 ? list2.next : null;
	}
	return sumNodeHead;
}

let node = new Node(7);
let node2 = new Node(1);
node.next = node2;
let node3 = new Node(6);
node2.next = node3;

let node4 = new Node(5);
let node5 = new Node(9);
node4.next = node5;
let node6 = new Node(9);
node5.next = node6;

console.log(JSON.stringify(sumLists(node, node4)));

/**
 * B- Suppose the digits are stored in forward order. Repeat the above problem.
 * @param {Node} list1 
 * @param {Node} list2 
 */
function sumLists2(list1, list2) {
	let l1 = list1;
	let l2 = list2;
	while (list1 || list2) {
		if (!list1) {
			// adding zero at the beginning of list if it's shorter than the other list
			const newNode = new Node(0, l1);
			l1 = newNode;
		} else if (!list2) {
			const newNode = new Node(0, l2);
			l2 = newNode;
		}

		list1 = list1 ? list1.next : null;
		list2 = list2 ? list2.next : null;
	}

	function sum(list1, list2) {
		if (!list1 && !list2) {
			return { reminder: 0, sumNodeHead: null };
		}

		let { reminder, sumNodeHead } = sum(list1.next, list2.next);

		let num1 = list1.data;
		let num2 = list2.data;
		let calc = num1 + num2 + reminder;

		let num3 = calc % 10;

		reminder = calc >= 10 ? 1 : 0;

		const newNode = new Node(num3);

		newNode.next = sumNodeHead;
		sumNodeHead = newNode;

		return { reminder, sumNodeHead };
	}
	const { reminder, sumNodeHead } = sum(l1, l2);

	if (reminder) {
		const newNode = new Node(reminder, sumNodeHead);
		sumNodeHead = newNode;
	}
	return sumNodeHead;
}

node = new Node(7);
node2 = new Node(1);
node.next = node2;

node4 = new Node(5);
node5 = new Node(9);
node4.next = node5;
node6 = new Node(9);
node5.next = node6;

console.log(JSON.stringify(sumLists2(node, node4)));
