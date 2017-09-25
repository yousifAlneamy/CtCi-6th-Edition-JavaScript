/**
 * 1.4
 * Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome.
 * A palindrome is a word or phrase that is the same forwards and backwards. A permutation
 * is a rea rrangement of letters. The palindrome does not need to be limited to just dictionary words.
 * EXAMPLE
 * Input: Tact Coa
 * Output: True (permutations: "taco cat". "atco cta". etc.)
 * @param {string} str
 */

function isPalindrome(str) {
	str = str.toLowerCase();
	let dec = {};
	let countOdd = 0;

	const isChar = c => c >= "a" && c <= "z";

	for (let c of str) {
		if (isChar(c)) {
			if (dec[c]) {
				dec[c]++;
			} else {
				dec[c] = 1;
			}

			if (dec[c] % 2 === 0) {
				countOdd--;
			} else {
				countOdd++;
			}
		}
	}

	return countOdd <= 1;
}

console.log(isPalindrome("Tact Coa"));
console.log(isPalindrome("Tact xCoa"));
