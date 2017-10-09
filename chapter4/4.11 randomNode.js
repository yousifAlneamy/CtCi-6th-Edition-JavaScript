/**
 * 4.11
 * Random Node: You are implementing a binary search tree class from scratch, which, in addition
 * to insert, find, and delete, has a method getRandomNode() which returns a random node
 * from the tree. All nodes should be equally likely to be chosen. Design and implement an algorithm
 * for getRandomNode, and explain how you would implement the rest of the methods.
 */
class BinarySearchTreeNode {
	constructor(data) {
		this.data = data;
		this.length = 1;
		this.left = null;
		this.right = null;
	}

	insertInOrder(newData) {
		if (newData <= this.data) {
			if (this.left === null) {
				this.left = new BinarySearchTreeNode(newData);
			} else {
				this.left.insertInOrder(newData);
			}
		} else {
			if (this.right === null) {
				this.right = new BinarySearchTreeNode(newData);
			} else {
				this.right.insertInOrder(newData);
			}
		}
		this.length++;
	}
	get size() {
		return this.length;
	}
	find(value) {
		if (this.data === value) {
			return this;
		}
		if (value <= this.data) {
			return this.left ? this.left.find(value) : null;
		} else {
			return this.right ? this.right.find(value) : null;
		}
	}

	getRandomNode() {
		let nodeNumber = getRandomArbitrary(1, this.size);

		console.log(nodeNumber);
		const queue = [this];

		while (queue.length) {
			const processNode = queue.shift();

			if (!--nodeNumber) {
				return processNode;
			}
			if (processNode.left) {
				queue.push(processNode.left);
			}
			if (processNode.right) {
				queue.push(processNode.right);
			}
		}
		return null;
	}
}
function getRandomArbitrary(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

let node = new BinarySearchTreeNode(10);
node.insertInOrder(18);
node.insertInOrder(1);
node.insertInOrder(4);
node.insertInOrder(11);

console.log(node);
console.log("random node: ", node.getRandomNode());
