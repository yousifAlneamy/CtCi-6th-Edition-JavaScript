class BinaryTreeNode {
	constructor(data, left = null, right = null) {
		this.data = data;
		this.left = left;
		this.right = right;
	}
}

/**
 * 2.8
 * First Common Ancestor: Design an algorithm and write code to find the first common ancestor
 * of two nodes in a binary tree. Avoid storing additional nodes in a data structure. NOTE: This is not
 * necessarily a binary search tree.
 * @param {BinaryTreeNode} root
 * @param {BinaryTreeNode} node1
 * @param {BinaryTreeNode} node2
 */
function firstCommonAncestor1(root, node1, node2) {
	if (!root || !node1 || !node2) {
		return null;
	}

	if (node1 === node2) {
		// if node1 and node2 are same, then return their parent
		return getParent(root, node1);
	}
	const left = areNodesFound(root.left, node1, node2);
	const right = areNodesFound(root.right, node1, node2);

	if (left && right) {
		return root;
	}

	if (left && !right) {
		// check whether if one of the nodes is parent of the other
		if (root === node1 || root === node2) {
			return root;
		}
		return firstCommonAncestor1(root.left, node1, node2);
	}
	if (!left && right) {
		// check whether if one of the nodes is parent of the other
		if (root === node1 || root === node2) {
			return root;
		}
		return firstCommonAncestor1(root.right, node1, node2);
	}
	return null;
}

function getParent(root, child) {
	if (!root) {
		return null;
	}
	const queue = [root];
	while (queue.length) {
		const processNode = queue.shift();
		const { left, right } = processNode;

		if (child === left || child === right) {
			return processNode;
		}

		if (left) {
			queue.push(left);
		}
		if (right) {
			queue.push(right);
		}
	}
	return null;
}

function areNodesFound(root, node1, node2) {
	if (!root) {
		return false;
	}

	if (root === node1 || root === node2) {
		return true;
	}
	// else
	return areNodesFound(root.left, node1, node2) || areNodesFound(root.right, node1, node2);
}

/************************/

/**
 *
 * @param {BinaryTreeNode} root
 * @param {BinaryTreeNode} node1
 * @param {BinaryTreeNode} node2
 *
 * Inserting parent property into the nodes while traversing the tree
 *
 * In this algorithm, I assumed that node1 or node2 may not be in the tree, and if so, it'd return null
 */
function firstCommonAncestor2(root, node1, node2) {
	if (!root || !node1 || !node2) {
		return null;
	}

	root.parent = null;
	const nodesFoundInTree = traverseAndInsertParentPropertyIntoTree(root, node1, node2);
	if (nodesFoundInTree < 2) {
		// if node1 and/or node2 not found in tree, then return null
		return null;
	}
	if (node1 === node2) {
		return node1.parent;
	}

	const dec = {};
	let p = node1;
	let id = 0;
	while (p) {
		// fill the dec{} up to the most top parent (root)
		p.id = ++id;
		dec[p.id] = true;
		p = p.parent;
	}

	p = node2;
	while (p) {
		// whenever found a match in the dec{}, common ancestor found!
		if (dec[p.id]) {
			return p;
		}
		p = p.parent;
	}
	// else
	return null;
}

/**
 *
 * this function will traverse the tree and create a parent property in each node that it encounters
 */
function traverseAndInsertParentPropertyIntoTree(root, node1, node2) {
	if (!root || !node1 || !node2) {
		return NaN;
	}
	let countFoundNodes = 0;
	if (root === node1) {
		// this to handle sending same nodes as the root
		countFoundNodes++;
	}
	if (root === node2) {
		countFoundNodes++;
	}

	let queue = [root];
	while (queue.length && countFoundNodes < 2) {
		const processNode = queue.shift();
		const { left, right } = processNode;

		if (left) {
			left.parent = processNode;
			countFoundNodes += left === node1 ? 1 : 0;

			countFoundNodes += left === node2 ? 1 : 0;
			queue.push(left);
		}

		if (right) {
			right.parent = processNode;

			countFoundNodes += right === node1 ? 1 : 0;

			countFoundNodes += right === node2 ? 1 : 0;

			queue.push(right);
		}
	}
	return countFoundNodes;
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

console.log("firstCommonAncestor1", firstCommonAncestor1(tree, node4, node3));
console.log("firstCommonAncestor2", firstCommonAncestor2(tree, node4, node3));
