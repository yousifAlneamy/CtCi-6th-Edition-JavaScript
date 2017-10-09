class BinaryTreeNode {
	constructor(data, left = null, right = null) {
		this.data = data;
		this.left = left;
		this.right = right;
	}
}

/**
 * 4.10
 * Check Subtree: Tl and T2 are two very large binary trees, with Tl much bigger than T2. Create an
 * algorithm to determine if T2 is a subtree of Tl.
 * A tree T2 is a subtree of T1 if there exists a node n in Tl such that the subtree of n is identical to T2 .
 * That is, if you cut off the tree at node n, the two trees would be identical.
 * @param {BinaryTreeNode} t1
 * @param {BinaryTreeNode} t2
 */

function checkSubTree(t1, t2) {
	if (t2 === null) {
		return true;
	}
	return containsTree(t1, t2);
}

function containsTree(t1, t2) {
	if (!t1) {
		return false;
	}
	if (t1.data === t2.data) {
		if (isSameTree(t1, t2)) {
			return true;
		}
	}
	// else
	return containsTree(t1.left, t2) || containsTree(t1.right, t2);
}

function isSameTree(t1, t2) {
	// is one of them null?
	if (!t1 || !t2) {
		return t1 === t2; // return whether they're both === null
	}

	if (t1.data !== t2.data) {
		return false;
	}
	// else
	return isSameTree(t1.left, t2.left) && isSameTree(t1.right, t2.right);
}

let tree = new BinaryTreeNode(4);
let node1 = new BinaryTreeNode(2);
let node2 = new BinaryTreeNode(6);

tree.left = node1;
tree.right = node2;

let node3 = new BinaryTreeNode(1);
let node4 = new BinaryTreeNode(3);

node1.left = node3;
node1.right = node4;

let node5 = new BinaryTreeNode(5);
let node6 = new BinaryTreeNode(7);

node2.left = node5;
node2.right = node6;

console.log("checkSubTree", checkSubTree(tree, node2));
