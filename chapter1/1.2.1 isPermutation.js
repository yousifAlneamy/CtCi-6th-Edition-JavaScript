/**
 * 1.2
 * Check Permutation: Given two strings, write a method to decide if one is a permutation of the
 * other.
 * @param {string} str1
 * @param {string} str2
 */
function isPermutation(str1, str2) {
	if (typeof str1 !== "string" || typeof str2 !== "string") {
		throw { Error: "Passed arguments should be string" };
	}

	if (!str1 || !str2) {
		return false;
	}
	if (str1.length !== str2.length) {
		return false;
	}

	let dec = {}; // dictionary to hold chars and their count

	for (let ch of str1) {
		dec[ch] = dec[ch] ? dec[ch] + 1 : 1;
	}

	for (let ch of str2) {
		if (!dec.hasOwnProperty(ch) || dec[ch] === 0) {
			return false;
		}
		dec[ch]--;
	}

	return true;
}

console.log(isPermutation("laia", "aila"));
