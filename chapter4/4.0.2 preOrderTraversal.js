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
function preOrderTraversalRecursion(node) {
	// recursion
	if (!node) {
		return null;
	}

	console.log(node.data);
	preOrderTraversalRecursion(node.left);
	preOrderTraversalRecursion(node.right);
}

/**
 *
 * @param {BinaryTreeNode} node
 */
function preOrderTraversal(node) {
	if (!node) {
		return null;
	}
	const stack = [node];
	while (stack.length) {
		const processNode = stack.pop();

		console.log(processNode.data);

		if (processNode.right) {
			stack.push(processNode.right);
		}
		if (processNode.left) {
			stack.push(processNode.left);
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

console.log("Pre-Order Traversal");
preOrderTraversalRecursion(tree);

console.log("preOrderTraversal");
preOrderTraversal(tree);
