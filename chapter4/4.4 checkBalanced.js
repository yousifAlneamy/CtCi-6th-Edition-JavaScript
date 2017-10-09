/**
 * 4.4
 * Check Balanced: Implement a function to check if a binary tree is balanced. For the purposes of
 * this question, a balanced tree is defined to be a tree such that the heights of the two subtrees of any
 * node never differ by more than one.
 * @param {BinaryTreeNodeWithId} root
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
function checkBalanced1(root, dec = {}) {
	if (!root) {
		return true;
	}
	let diff = Math.abs(treeHight(root.left, dec) - treeHight(root.right, dec));

	return diff <= 1 && checkBalanced1(root.left, dec) && checkBalanced1(root.right, dec);
}

function treeHight(root, dec) {
	if (!root) {
		return -1;
	}

	if (dec.hasOwnProperty(root.id)) {
		return dec[root.id];
	}

	const leftHeight = treeHight(root.left, dec) + 1;
	const rightHeight = treeHight(root.right, dec) + 1;
	dec[root.id] = Math.max(leftHeight, rightHeight);
	return dec[root.id];
}

/*******************************/

function checkBalanced2(root) {
	if (!root) {
		return true;
	}
	return checkHeight(root) !== Number.MIN_SAFE_INTEGER;
}

function checkHeight(root) {
	if (!root) {
		return -1;
	}

	const leftHeight = checkHeight(root.left);
	if (leftHeight === Number.MIN_SAFE_INTEGER) {
		return Number.MIN_SAFE_INTEGER;
	}

	const rightHeight = checkHeight(root.right);
	if (rightHeight === Number.MIN_SAFE_INTEGER) {
		return Number.MIN_SAFE_INTEGER;
	}

	const diff = Math.abs(rightHeight - leftHeight);

	if (diff > 1) {
		return Number.MIN_SAFE_INTEGER;
	}
	return Math.max(rightHeight, leftHeight) + 1;
}

let tree = new BinaryTreeNodeWithId(10);
let node1 = new BinaryTreeNodeWithId(1);
let node2 = new BinaryTreeNodeWithId(2);

tree.left = node1;
tree.right = node2;

let node3 = new BinaryTreeNodeWithId(3);
let node4 = new BinaryTreeNodeWithId(4);

node1.left = node3;
node1.right = node4;

let node5 = new BinaryTreeNodeWithId(5);
let node6 = new BinaryTreeNodeWithId(6);

node2.left = node5;
node2.right = node6;

console.log(checkBalanced1(tree));
console.log(checkBalanced2(tree));
