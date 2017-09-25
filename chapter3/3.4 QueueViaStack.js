/**
 * 3.4
 * Queue via Stacks: Implement a MyQueue class which implements a queue using two stacks.
 * In this question, I'v used javascript arrays and dealt with them as stacks
 */

class QueueViaStack {
	constructor() {
		this.stack1 = [];
		this.stack2 = [];
	}

	enqueue(data) {
		while (this.stack2.length) {
			this.stack1.push(this.stack2.pop());
		}

		this.stack1.push(data);
	}

	dequeue() {
		while (this.stack1.length) {
			this.stack2.push(this.stack1.pop());
		}

		if (this.stack2.length === 0) {
			throw { Error: "Queue is empty" };
		}

		return this.stack2.pop();
	}
}

const myQueue = new QueueViaStack();

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);

console.log(myQueue);

console.log(myQueue.dequeue(), myQueue);
console.log(myQueue.dequeue(), myQueue);
console.log(myQueue.dequeue(), myQueue);
try {
	console.log(myQueue.dequeue(), myQueue);
} catch (e) {
	console.log(e);
}
