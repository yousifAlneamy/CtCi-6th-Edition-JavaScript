class BinaryTreeNode {
	constructor(data, left = null, right = null) {
		this.data = data;
		this.left = left;
		this.right = right;
	}
}

/**
 *
 * @param {BinaryTreeNode} root
 */
function breadthFirstSearch(root) {
	if (!root) {
		return null;
	}
	const queue = [root];

	while (queue.length) {
		const processNode = queue.shift();

		console.log(processNode.data);
		if (processNode.left) {
			queue.push(processNode.left);
		}
		if (processNode.right) {
			queue.push(processNode.right);
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

console.log("breadthFirstSearch");
breadthFirstSearch(tree);
