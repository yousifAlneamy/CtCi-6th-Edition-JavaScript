/**
 * 3.3
 * Stack of Plates: Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
 * Therefore, in real life, we would likely start a new stack when the previous stack exceeds some
 * threshold. Implement a data structure SetOfStacks that mimics this. SetOfStacks should be
 * composed of several stacks and should create a new stack once the previous one exceeds capacity.
 * SetOfStacks. push () and SetOfStacks. pop () should behave identically to a single stack
 * (that is, pop ( ) should return the same values as it would if there were just a single stack).
 * FOLLOW UP
 * Implement a function popAt (int index) which performs a pop operation on a specific sub-stack.
 */

class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class SetOfStacks {
	constructor(maxSize = 4) {
		this.maxSize = maxSize;
		this.stacksSet = [{ top: null, size: 0 }];
	}
	push(item) {
		const stacksSet = this.stacksSet;
		let index = stacksSet.length - 1;
		if (stacksSet[index].size >= this.maxSize) {
			stacksSet.push({ top: null, size: 0 });
			index++;
		}

		const newNode = new Node(item);
		newNode.next = stacksSet[index].top;
		stacksSet[index].top = newNode;
		stacksSet[index].size++;
	}

	pop() {
		const stacksSet = this.stacksSet;
		let index = stacksSet.length - 1;

		while (stacksSet[index].size === 0) {
			if (index === 0) {
				throw { Error: "stack is empty!" };
			}

			stacksSet.pop();
			index--;
		}

		const data = stacksSet[index].top.data;
		stacksSet[index].top = stacksSet[index].top.next;
		stacksSet[index].size--;
		return data;
	}
	//FOLLOW UP
	popAt(index = -1) {
		const stacksSet = this.stacksSet;
		let maxIndex = stacksSet.length - 1;
		if (index < 0 || index > maxIndex) {
			throw { Error: "Invalid index!" };
		}

		if (stacksSet[index].size === 0) {
			throw { Error: "stack is empty!" };
		}

		const data = stacksSet[index].top.data;
		stacksSet[index].top = stacksSet[index].top.next;
		stacksSet[index].size--;
		return data;
	}
}

const stackSet = new SetOfStacks(3);

stackSet.push(1);
console.log(stackSet);
stackSet.push(2);
console.log(stackSet);
stackSet.push(3);
console.log(stackSet);
stackSet.push(4);
console.log(JSON.stringify(stackSet));
stackSet.push(5);
console.log(JSON.stringify(stackSet));

console.log(stackSet.popAt(1), JSON.stringify(stackSet));
console.log(stackSet.popAt(1), JSON.stringify(stackSet));
console.log(stackSet.popAt(0), JSON.stringify(stackSet));
console.log(stackSet.pop(), JSON.stringify(stackSet));
console.log(stackSet.pop(), JSON.stringify(stackSet));

try {
	console.log(stackSet.pop(), JSON.stringify(stackSet));
} catch (e) {
	console.log(e);
}
