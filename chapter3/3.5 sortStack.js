/**
 * 2.5
 * Sort Stack: Write a program to sort a stack such that the smallest items are on the top. You can use
 * an additional temporary stack, but you may not copy the elements into any other data structure
 * (such as an array). The stack supports the following operations: push, pop, peek, and isEmpty.
 * @param {array} stack1
 */
function sortStack(stack1 = []) {
	const stack2 = [];
	while (stack1.length) {
		console.log(stack1, stack2);
		const item = stack1.pop();
		let count = 0;
		while (stack2.length && item < stack2[stack2.length - 1]) {
			count++;
			stack1.push(stack2.pop());
		}
		stack2.push(item);
		while (count > 0) {
			count--;
			stack2.push(stack1.pop());
		}
	}

	while (stack2.length) {
		stack1.push(stack2.pop());
	}
	return stack1;
}

console.log(sortStack([2, 10, 4, 12, 1]));
