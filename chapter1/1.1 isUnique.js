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

//What if you cannot use additional data structures?
function isUnique2(str) {
	if (typeof str !== "string") {
		throw { Error: "Passed argument should be of type string" };
	}
	let checker = 0;
	for (let i = 0; i < str.length; i++) {
		let val = str.charCodeAt(i) - 97; // 'a' = 97
		if ((checker & (1 << val)) > 0) {
			return false;
		}
		checker |= 1 << val;
	}
	return true;
}

console.log(isUnique2("ali"));
try {
	console.log(isUnique2(20));
} catch (e) {
	console.log(e);
}
