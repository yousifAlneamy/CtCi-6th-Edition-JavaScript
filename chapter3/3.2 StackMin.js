/**
 * 3.2
 * Stack Min: How would you design a stack which, in addition to push and pop, has a function min
 * which returns the minimum element? Push, pop and min should all operate in 0(1) time.
 */
class NodeWithMin {
	constructor(data, next = null, min) {
		this.data = data;
		this.next = next;
		this.min = min; // each node keep track its min value
	}
}

class StackMin {
	constructor() {
		this.top = null;
	}

	push(data) {
		const newNode = new NodeWithMin(data, this.top);

		newNode.min = this.top ? Math.min(this.top.min, data) : data; // set min for this new node

		this.top = newNode;
	}

	pop() {
		if (this.top === null) {
			throw { Error: "Empty stack!" };
		}
		const data = this.top.data;
		this.top = this.top.next;
		return data;
	}
	get minVal() {
		if (this.top === null) {
			throw { Error: "Stack is empty" };
		}
		return this.top.min;
	}
}

const stackMin = new StackMin();
stackMin.push(2);
console.log(JSON.stringify(stackMin));
stackMin.push(3);
console.log(JSON.stringify(stackMin));
stackMin.push(4);
console.log(JSON.stringify(stackMin));
stackMin.push(1.4);
console.log(JSON.stringify(stackMin));
stackMin.push(1);
console.log(JSON.stringify(stackMin));

console.log("min: ", stackMin.minVal);

console.log(stackMin.pop(), JSON.stringify(stackMin));
console.log(stackMin.pop(), JSON.stringify(stackMin));
console.log(stackMin.pop(), JSON.stringify(stackMin));
console.log(stackMin.pop(), JSON.stringify(stackMin));
console.log("min: ", stackMin.minVal);
console.log(stackMin.pop(), JSON.stringify(stackMin));

try {
	console.log("min: ", stackMin.minVal);
	console.log(stackMin.pop(), JSON.stringify(stackMin));
} catch (e) {
	console.log(e);
}
