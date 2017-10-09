class BinaryTreeNode {
	constructor(data, left = null, right = null) {
		this.data = data;
		this.left = left;
		this.right = right;
	}
}

/**
 * 4.2
 * Minimal Tree: Given a sorted (increasing order) array with unique integer elements, write an
 * algorithm to create a binary search tree with minimal height.
 * @param {array} arr
 */
function minimalTree(arr) {
	return createBinarySearchTree(arr, 0, arr.length - 1);
}

/**
 *
 * @param {array} arr
 * @param {number} start
 * @param {number} end
 */
function createBinarySearchTree(arr, start, end) {
	if (start > end) {
		return null;
	}

	const middle = Math.floor((end + start) / 2);

	const root = new BinaryTreeNode(arr[middle]);

	root.left = createBinarySearchTree(arr, start, middle - 1);
	root.right = createBinarySearchTree(arr, middle + 1, end);

	return root;
}

console.log(minimalTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
