class Node {
	/**
	 * @param {any} data 
	 * @param {Node} next 
	 */
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class MyQueue {
	constructor(first = null, last = null) {
		this.first = first; // first element to get removed
		this.last = last; // last element to get removed
	}

	add(data) {
		const newNode = new Node(data);
		if (this.last !== null) {
			this.last.next = newNode;
		}
		this.last = newNode;
		if (!this.first) {
			this.first = this.last;
		}
	}
	remove() {
		// if (!this.first) also works since null is a false condition in JavaScript
		if (this.first === null) {
			throw { Error: "Queue is empty" };
		}
		const data = this.first.data;
		this.first = this.first.next;
		if (this.first === null) {
			this.last = null;
		}
		return data;
	}
	peek() {
		if (this.first === null) {
			// or just if (!this.first)
			throw { Error: "Queue is empty" };
		}
		return this.first.data;
	}
	isEmpty() {
		return this.first === null;
	}
}

const queue = new MyQueue();

queue.add(1);
queue.add(2);
queue.add(3);
queue.add(4);
console.log("First is ", queue.peek());

while (!queue.isEmpty()) {
	console.log(queue.remove());
}
