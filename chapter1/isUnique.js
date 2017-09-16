/**
 * 1.1
 * Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
 * cannot use additional data structures?
 * @param {string} str
 */
function isUnique(str) {
	if (typeof str !== "string") {
		throw { Error: "Passed argument should be of type string" };
	}
	let dec = {}; // dictionary to hold chars
	for (let ch of str) {
		// check whether dec has already this char
		if (dec[ch]) {
			return false;
		}
		dec[ch] = true;
	}
	return true;
}

console.log(isUnique("jshetmpoiuax:/><;"));
try {
	console.log(isUnique(20));
} catch (e) {
	console.log(e);
}
