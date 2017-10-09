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
function postOrderTraversalRecursion(node) {
	// recursion
	if (!node) {
		return null;
	}

	postOrderTraversalRecursion(node.left);
	postOrderTraversalRecursion(node.right);
	console.log(node.data);
}

/**
 * To understand this watch this video: https://youtu.be/qT65HltK2uE
 * @param {BinaryTreeNode} node
 */
function postOrderTraversal(node) {
	if (!node) {
		return null;
	}
	const stack1 = [node];
	const stack2 = [];

	while (stack1.length) {
		const processNode = stack1.pop();

		stack2.push(processNode);

		if (processNode.left) {
			stack1.push(processNode.left);
		}
		if (processNode.right) {
			stack1.push(processNode.right);
		}
	}

	while (stack2.length) {
		console.log(stack2.pop().data);
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

console.log("postOrderTraversalRecursion");
postOrderTraversalRecursion(tree);

console.log("postOrderTraversal");
postOrderTraversal(tree);
