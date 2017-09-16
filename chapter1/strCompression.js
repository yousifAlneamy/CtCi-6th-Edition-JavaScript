/**
 * 1.6
 * String Compression: Implement a method to perform basic string compression using the counts
 * of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the
 * "compressed" string would not become smaller than the original string, your method should return
 * the original string. You can assume the string has only uppercase and lowercase letters (a - z).
 * @param {string} str
 */
function strCompression(str) {
	if (typeof str !== "string") {
		throw { Error: "Argument should be string" };
	}

	const len = str.length;
	if (len === 0) {
		return "";
	}

	let count = 0;
	let newStr = "";
	for (let i = 0; i < len; i++) {
		count++;
		if (i + 1 === len || str.charAt(i) !== str.charAt(i + 1)) {
			newStr += str.charAt(i) + count;
			count = 0;
		}
	}

	if (newStr.length > len) {
		return str;
	}
	return newStr;
}

console.log(strCompression("aabcccccccccccccccccccccccaaa"));
