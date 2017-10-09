class BinaryTreeNode {
	constructor(data, left = null, right = null) {
		this.data = data;
		this.left = left;
		this.right = right;
	}
}

/**
 *
 * @param {BinaryTreeNode} node
 */
function inOrderTraversalRecursion(node) {
	// recursion
	if (!node) {
		return null;
	}

	inOrderTraversalRecursion(node.left);
	console.log(node.data);
	inOrderTraversalRecursion(node.right);
}

/*******************/

/**
 *
 * @param {BinaryTreeNode} node
 */
function inOrderTraversal(node) {
	// iterative
	if (!node) {
		return null;
	}

	const stack = [];

	while (true) {
		if (node) {
			stack.push(node);
			node = node.left;
		} else {
			if (stack.length === 0) {
				break;
			}
			const processNode = stack.pop();

			console.log(processNode.data);

			node = processNode.right;
		}
	}
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

console.log("In-Order Traversal Recursive");
inOrderTraversalRecursion(tree);
console.log("In-Order Traversal");
inOrderTraversal(tree);
