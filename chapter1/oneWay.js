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

	let i = 0,
		k = 0,
		edit = 0;

	while (i < len1 || k < len2) {
		if (str1.charAt(i) === str2.charAt(k)) {
			i++;
			k++;
		} else if (str1.charAt(i + 1) === str2.charAt(k)) {
			i++;
			edit++;
		} else if (str1.charAt(i) === str2.charAt(k + 1)) {
			k++;
			edit++;
		} else {
			i++;
			k++;
			edit++;
		}
		if (edit > 1) return false;
	}
	return true;
}
// check the book solution
console.log(oneWay("apsle", "aple"));
