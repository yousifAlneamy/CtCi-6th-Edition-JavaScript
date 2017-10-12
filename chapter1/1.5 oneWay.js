/**
 * 1.5
 * One Away: There are three types of edits that can be performed on strings: insert a character,
 * remove a character, or replace a character. Given two strings, write a function to check if they are
 * one edit (or zero edits) away.
 * EXAMPLE
 * pale, pIe -> true
 * pales. pale -> true
 * pale. bale -> true
 * pale. bake -> false
 * @param {string} str1
 * @param {string} str2
 */

function oneWay(str1, str2) {
	const len1 = str1.length;
	const len2 = str2.length;

	if (Math.abs(len1 - len2) > 1) {
		return false;
	}

	let index1 = 0,
		index2 = 0,
		edit = 0;

	while (index1 < len1 || index2 < len2) {
		if (str1.charAt(index1) === str2.charAt(index2)) {
			index1++;
			index2++;
		} else if (str1.charAt(index1 + 1) === str2.charAt(index2)) {
			index1++;
			edit++;
		} else if (str1.charAt(index1) === str2.charAt(index2 + 1)) {
			index2++;
			edit++;
		} else {
			index1++;
			index2++;
			edit++;
		}
		if (edit > 1) return false;
	}
	return true;
}
// check the book solution
console.log(oneWay("apshle", "apggle"));
