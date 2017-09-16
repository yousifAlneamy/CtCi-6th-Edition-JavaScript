/**
 * 1.3
 * URLify: Write a method to replace all spaces in a string with '%20: You may assume that the string
 * has sufficient space at the end to hold the additional characters, and that you are given the "true"
 * length of the string. (Note: If implementing in Java, please use a character array so that you can
 * perform this operation in place.)
 * EXAMPLE
 * Input: "Mr John Smith "J 13
 * Output: "Mr%20J ohn%20Smith"
 * @param {string} str
 * @param {number} len
 */
function URLify(str, len) {
	if (len === 0) {
		throw { Error: "Empty string" };
	}

	str = str.trim();
	str = str.replace(/\s+/g, " "); // replace consultive spaces with 1 space

	let arr = str.split(" "); // split string at each space

	return arr.join("%20"); // join arr with '%20'
}

let str = "Mr John  Smith    ";
console.log(URLify(str, str.length));
