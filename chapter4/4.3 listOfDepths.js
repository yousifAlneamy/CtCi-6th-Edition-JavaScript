class BinaryTreeNode {
	constructor(data, left = null, right = null) {
		this.data = data;
		this.left = left;
		this.right = right;
	}
}

// linkedList node
class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

/**
 * 4.3
 * List of Depths: Given a binary tree, design an algorithm which creates a linked list of all the nodes
 * at each depth (e.g., if you have a tree with depth D, you'll have D linked lists).
 * @param {BinaryTreeNode} root
 */
function listOfDepths1(root) {
	if (!root) {
		return null;
	}

	const list = [];
	root["depth"] = 0;
	const queue = [root];
	let depth = 0;
	let linkedList = null;

	while (queue.length) {
		const processNode = queue.shift();

		if (depth === processNode["depth"]) {
			if (list.length <= depth) {
				// This only executed once for the root
				linkedList = new Node(processNode.data);
				list.push(linkedList);
			} else {
				linkedList.next = new Node(processNode.data);
				linkedList = linkedList.next;
			}
		} else {
			depth++;
			linkedList = new Node(processNode.data);
			list.push(linkedList);
		}

		if (processNode.left) {
			processNode.left["depth"] = depth + 1;
			queue.push(processNode.left);
		}
		if (processNode.right) {
			processNode.right["depth"] = depth + 1;
			queue.push(processNode.right);
		}
	}
	return list;
}

function listOfDepths2(root) {
	if (!root) {
		return null;
	}

	let currentList = new Node(root);
	const listArr = [];

	while (currentList !== null) {
		listArr.push(currentList);
		let linkedList = currentList;
		currentList = null;
		//console.log(linkedList);
		while (linkedList) {
			const processNode = linkedList.data;
			if (processNode.left) {
				const newNode = new Node(processNode.left, currentList);
				currentList = newNode;
			}
			if (processNode.right) {
				const newNode = new Node(processNode.right, currentList);
				currentList = newNode;
			}
			linkedList = linkedList.next;
		}
	}
	return listArr;
}

function listOfDepths3(root, lists = [], level = 0) {
	if (!root) {
		return;
	}

	if (lists.length === level) {
		const newNode = new Node(root.data);
		lists.push(newNode);
	} else {
		const linkedList = lists[level];
		const newNode = new Node(root.data, linkedList);
		lists[level] = newNode;
	}
	listOfDepths3(root.left, lists, level + 1);
	listOfDepths3(root.right, lists, level + 1);

	return lists;
}
let tree = new BinaryTreeNode(10);
let node1 = new BinaryTreeNode(1);
let node2 = new BinaryTreeNode(2);

tree.left = node1;
tree.right = node2;

let node3 = new BinaryTreeNode(3);
let node4 = new BinaryTreeNode(4);

node1.left = node3;
node1.right = node4;

let node5 = new BinaryTreeNode(5);
let node6 = new BinaryTreeNode(6);

node2.left = node5;
node2.right = node6;

console.log(JSON.stringify(listOfDepths1(tree)));
console.log(JSON.stringify(listOfDepths2(tree)));
console.log(JSON.stringify(listOfDepths3(tree)));
