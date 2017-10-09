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
 * @param {number} element
 */
function addNodeToBinarySearchTree(root, element) {
	// add to binary search tree
	if (!root) {
		return new BinaryTreeNode(element);
	}
	let node = root;
	while (true) {
		if (element <= node.data) {
			if (!node.left) {
				// if (node.left === null)
				node.left = new BinaryTreeNode(element);
				break;
			}
			node = node.left;
		} else {
			if (!node.right) {
				// if (node.right === null)
				node.right = new BinaryTreeNode(element);
				break;
			}
			node = node.right;
		}
	}
	return root;
}

const root = new BinaryTreeNode(5);

const node1 = new BinaryTreeNode(3);
const node2 = new BinaryTreeNode(7);

root.left = node1;
root.right = node2;

const node3 = new BinaryTreeNode(1);
const node4 = new BinaryTreeNode(4);

node1.left = node3;
node1.right = node4;

const node5 = new BinaryTreeNode(6);
const node6 = new BinaryTreeNode(9);

node2.left = node5;
node2.right = node6;

console.log(addNodeToBinarySearchTree(root, 6));
