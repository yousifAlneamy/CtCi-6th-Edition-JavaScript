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

class MyStack {
	constructor(top = null) {
		this.top = top;
	}
	pop() {
		if (this.top === null) {
			// or just return null as I usually do
			throw { Error: "Empty stack!" };
		}
		const item = this.top.data;
		this.top = this.top.next;
		return item;
	}
	push(data) {
		const newNode = new Node(data, this.top); // so this newNode is linked to top element
		this.top = newNode; // reassign top to the new created node
	}
	peek() {
		if (this.top === null) {
			// or just return null as I usually do
			throw { Error: "Empty stack!" };
		}
		return this.top.data;
	}
	isEmpty() {
		return this.top === null;
	}
}

const stack = new MyStack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log("Top: ", stack.peek());

while (!stack.isEmpty()) {
	console.log(stack.pop());
}
console.log("isEmpty", stack.isEmpty());
