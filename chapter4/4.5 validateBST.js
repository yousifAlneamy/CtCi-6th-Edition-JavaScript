/**
 * 4.5
 * Validate BST: Implement a function to check if a binary tree is a binary search tree.
 */

class BinaryTreeNodeWithId {
	constructor(data, left = null, right = null) {
		this.data = data;
		this.left = left;
		this.right = right;
		this.id = (++BinaryTreeNodeWithId.id).toString();
	}
}
BinaryTreeNodeWithId.id = 0;
/**
 *
 * @param {BinaryTreeNodeWithId} root
 */
function validateBST1(root, minDec = {}, maxDec = {}) {
	if (!root) {
		return true;
	}
	return (
		getMaxTreeElement(root.left, maxDec) <= root.data &&
		root.data < getMinTreeElement(root.right, minDec) &&
		validateBST1(root.left, minDec, maxDec) &&
		validateBST1(root.right, minDec, maxDec)
	);
}

function getMinTreeElement(root, minDec) {
	if (!root) {
		return Number.MAX_VALUE;
	}

	if (minDec.hasOwnProperty(root.id)) {
		return minDec[root.id];
	}

	const minLeft = getMinTreeElement(root.left, minDec);
	const minRight = getMinTreeElement(root.right, minDec);
	minDec[root.id] = Math.min(root.data, minLeft, minRight);
	return minDec[root.id];
}

function getMaxTreeElement(root, maxDec) {
	if (!root) {
		return Number.MIN_VALUE;
	}
	if (maxDec.hasOwnProperty(root.id)) {
		return maxDec[root.id];
	}

	const maxLeft = getMaxTreeElement(root.left, maxDec);
	const maxRight = getMaxTreeElement(root.right, maxDec);
	maxDec[root.id] = Math.max(root.data, maxLeft, maxRight);
	return maxDec[root.id];
}

/***************************************/

/**
 * @param {BinaryTreeNodeWithId} root
 * @param {number} min
 * @param {number} max
 */
function validateBST2(root, min = Number.MIN_VALUE, max = Number.MAX_VALUE) {
	if (!root) {
		return true;
	}
	if (min <= root.data && root.data < max) {
		return validateBST2(root.left, min, root.data) && validateBST2(root.right, root.data, max);
	}
	// else
	return false;
}

let tree = new BinaryTreeNodeWithId(4);
let node1 = new BinaryTreeNodeWithId(2);
let node2 = new BinaryTreeNodeWithId(6);

tree.left = node1;
tree.right = node2;

let node3 = new BinaryTreeNodeWithId(1);
let node4 = new BinaryTreeNodeWithId(3);

node1.left = node3;
node1.right = node4;

let node5 = new BinaryTreeNodeWithId(5);
let node6 = new BinaryTreeNodeWithId(7);

node2.left = node5;
node2.right = node6;

console.log(validateBST1(tree));
console.log(validateBST2(tree));
