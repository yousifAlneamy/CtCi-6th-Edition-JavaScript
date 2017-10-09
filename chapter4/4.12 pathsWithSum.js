class BinaryTreeNode {
	constructor(data, left = null, right = null) {
		this.data = data;
		this.left = left;
		this.right = right;
	}
}

/**
 * 4.12
 * Paths with Sum: You are given a binary tree in which each node contains an integer value (which
 * might be positive or negative). Design an algorithm to count the number of paths that sum to a
 * given value. The path does not need to start or end at the root or a leaf, but it must go downwards
 * (traveling only from parent nodes to child nodes).
 * @param {BinaryTreeNode} root
 * @param {BinaryTreeNode} targetSum
 */
function pathsWithSum(root, targetSum) {
	if (!root) {
		return 0;
	}
	return countPathsWithSum(root, targetSum, []);
}

function countPathsWithSum(root, targetSum, prevNum = []) {
	if (!root) {
		return 0;
	}

	let count = 0;
	const arrNum = [...prevNum, root.data];
	let sum = 0;

	for (let i = arrNum.length - 1; i >= 0; i--) {
		sum += arrNum[i];
		if (sum === targetSum) {
			count++;
		}
	}

	count += countPathsWithSum(root.left, targetSum, [...arrNum]);
	count += countPathsWithSum(root.right, targetSum, [...arrNum]);

	return count;
}

let tree = new BinaryTreeNode(4);
let node1 = new BinaryTreeNode(2);
let node2 = new BinaryTreeNode(6);

tree.left = node1;
tree.right = node2;

let node3 = new BinaryTreeNode(6);
let node4 = new BinaryTreeNode(3);

node1.left = node3;
node1.right = node4;

let node5 = new BinaryTreeNode(5);
let node6 = new BinaryTreeNode(2);

node2.left = node5;
node2.right = node6;

console.log("pathsWithSum(tree, 9)", pathsWithSum(tree, 9));

console.log("pathsWithSum(tree, 12)", pathsWithSum(tree, 12));
