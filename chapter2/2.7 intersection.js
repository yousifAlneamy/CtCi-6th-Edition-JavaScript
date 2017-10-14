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
 * 2.7
 * Intersection: Given two (singly) linked lists, determine if the two lists intersect. Return the intersecting
 * node. Note that the intersection is defined based on reference, not value. That is, if the kth
 * node of the first linked list is the exact same node (by reference) as the jth node of the second
 * linked list, then they are intersecting.
 * @param {Node} list1
 * @param {Node} list2
 */
function intersection1(list1, list2) {
	if (!list1 || !list2) {
		return null;
	}

	let id = 1;
	let container = [];
	while (list1) {
		list1["id"] = id++;
		container.push(list1);
		list1 = list1.next;
	}

	while (list2) {
		if (list2["id"]) {
			for (let node of container) {
				delete node.id;
			}
			return list2;
		}
		list2 = list2.next;
	}
	for (let node of container) {
		delete node.id;
	}

	return null;
}

function intersection2(list1, list2) {
	if (!list1 || !list2) {
		return null;
	}

	let head1 = list1;
	let head2 = list2;
	// skipping extra nodes from beginning
	while (list1 || list2) {
		if (!list1) {
			head2 = head2.next;
		}
		if (!list2) {
			head1 = head1.next;
		}
		list1 = list1 ? list1.next : null;
		list2 = list2 ? list2.next : null;
	}

	while (head1) {
		if (head1 == head2) {
			return head1;
		}
		head1 = head1.next;
		head2 = head2.next;
	}
	return null;
}

let node = new Node(1);
let node2 = new Node(2);
node.next = node2;
let node3 = new Node(3);
node2.next = node3;

let node4 = new Node(3);
node3.next = node4;
let node5 = new Node(2);
node4.next = node5;
let node6 = new Node(1);
node5.next = node6;

console.log(
	"intersection1(node, new Node(10))",
	intersection1(node, new Node(10))
);
console.log("intersection2(node, node4)", intersection2(node, node4));
