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

/**
 * 3.1
 * Three in One: Describe how you could use a single array to implement three stacks.
 */
class ThreeInOne {
	constructor() {
		this.top1 = -1;
		this.top2 = -1;
		this.top3 = -1;
		this.stack = [];
	}

	addToFirst(item) {
		this.top1++;
		this.stack.splice(this.top1, 0, item);
		this.top2++;
		this.top3++;
	}
	addToSecond(item) {
		this.top2++;
		this.stack.splice(this.top2, 0, item);
		this.top3++;
	}
	addToThird(item) {
		this.top3++;
		this.stack.push(item); // same as this.stack.splice(this.top3, 0, item);
	}
	popFromFirst() {
		if (this.top1 === -1) {
			throw { Error: "First Stack is empty" };
		}
		const data = this.stack.splice(this.top1, 1);
		this.top1--;
		this.top2--;
		this.top3--;
		return data[0];
	}

	popFromSecond() {
		if (this.top2 === this.top1) {
			throw { Error: "Second Stack is empty" };
		}
		const data = this.stack.splice(this.top2, 1);
		this.top2--;
		this.top3--;
		return data[0];
	}
	popFromThird() {
		if (this.top3 === this.top2) {
			throw { Error: "Third Stack is empty" };
		}
		const data = this.stack.pop(); // same as this.stack.splice(this.top3, 1); and data will be an array
		this.top3--;
		return data;
	}
}

const threeInOne = new ThreeInOne();
threeInOne.addToFirst(1);
threeInOne.addToFirst(2);
threeInOne.addToFirst(3);
console.log(threeInOne);
threeInOne.addToSecond(1);
threeInOne.addToSecond(2);
threeInOne.addToSecond(3);
console.log(threeInOne);
threeInOne.addToThird(1);
threeInOne.addToThird(2);
threeInOne.addToThird(3);
console.log(threeInOne);

console.log(threeInOne.popFromFirst(), threeInOne);
console.log(threeInOne.popFromFirst(), threeInOne);

console.log(threeInOne.popFromSecond(), threeInOne);
console.log(threeInOne.popFromSecond(), threeInOne);
console.log(threeInOne.popFromSecond(), threeInOne);

try {
	console.log(threeInOne.popFromSecond(), threeInOne);
} catch (e) {
	console.log(e);
}

console.log(threeInOne.popFromThird(), threeInOne);
console.log(threeInOne.popFromThird(), threeInOne);
console.log(threeInOne.popFromThird(), threeInOne);

try {
	console.log(threeInOne.popFromThird(), threeInOne);
} catch (e) {
	console.log(e);
}
