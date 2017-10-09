class BinaryTreeNode {
	constructor(data, left = null, right = null) {
		this.data = data;
		this.left = left;
		this.right = right;
	}
}

/**
 * 4.6
 * Successor: Write an algorithm to find the "next" node (i.e., in-order successor) of a given node in a
 * binary search tree. You may assume that each node has a link to its parent.
 * @param {BinaryTreeNode} node
 */
function successor(node) {
	if (!node) {
		return null;
	}

	if (node.right) {
		return leftMostNode(node.right);
	}

	let n = node;
	let p = node.parent;
	while (p !== null && p.left !== n) {
		n = p;
		p = p.parent;
	}
	return p;
}

function leftMostNode(node) {
	while (node.left) {
		node = node.left;
	}
	return node;
}

let tree = new BinaryTreeNode(4);
let node1 = new BinaryTreeNode(2);
let node2 = new BinaryTreeNode(6);

tree.left = node1;
tree.right = node2;

tree.parent = null;

node1.parent = node2.parent = tree;

let node3 = new BinaryTreeNode(1);
let node4 = new BinaryTreeNode(3);

node1.left = node3;
node1.right = node4;

node3.parent = node4.parent = node1;

let node5 = new BinaryTreeNode(5);
let node6 = new BinaryTreeNode(7);

node2.left = node5;
node2.right = node6;

node5.parent = node6.parent = node2;

console.log("\nsuccessor(node2): \n", successor(node2));
console.log("\nsuccessor(node6): \n", successor(node6));
