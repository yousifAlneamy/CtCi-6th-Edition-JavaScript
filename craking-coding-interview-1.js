/**
 * 1.1
 * Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
 * cannot use additional data structures?
 * @param {string} str
 */
function isUnique(str) {
	if (typeof str !== "string") {
		throw { Error: "Passed argument should be string" };
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
/////////////////////////////////////////////////////////

// What is a permutation?

/**
 *
 * @param {string} str
 */
// check this video to understand the idea of this code: https://youtu.be/nYFd7VHKyWQ
function permutation(str) {
	let dec = {};
	for (let c of str) {
		if (dec[c]) {
			dec[c]++;
		} else {
			dec[c] = 1;
		}
	}
	console.log(dec);
	let permutationArr = [];
	calcMutations(str, dec);
	return permutationArr;

	function calcMutations(str, dec, arrMutation = []) {
		for (let c in dec) {
			if (dec[c] > 0) {
				const dec2 = {};
				Object.assign(dec2, dec);
				dec2[c]--;
				const arrMutation2 = [...arrMutation];
				arrMutation2.push(c);
				calcMutations(str, dec2, arrMutation2);
			}
		}
		if (str.length <= arrMutation.length) {
			permutationArr.push(arrMutation.join(""));
		}
	}
}

console.log(permutation("aabc"));

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

function ownWay(str1, str2) {
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
console.log(ownWay("apsle", "aple"));

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

/**
 * 1.7
 * Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4
 * bytes, write a method to rotate the image by 90 degrees. (an you do this in place?
 * @param {array} arr
 */

function rotateMatrix(arr) {
	let n = arr.length - 1;
	for (let i = 0; i < Math.floor(arr.length / 2); i++) {
		for (let j = i; j < n - i; j++) {
			let temp = arr[i][j];
			arr[i][j] = arr[n - j][i];
			arr[n - j][i] = arr[n - i][n - j];
			arr[n - i][n - j] = arr[j][n - i];
			arr[j][n - i] = temp;
		}
	}

	return arr;
}

console.log(
	rotateMatrix([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]])
);

1.8;

/**
 * 1.8
 * Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
 * column are set to O.
 * @param {array} arr
 */

function zeroMatrix(arr) {
	let rowDec = new Array(arr.length);
	let colDec = new Array(arr[0].length);

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[0].length; j++) {
			if (arr[i][j] === 0) {
				rowDec[i] = true;
				colDec[j] = true;
			}
		}
	}
	console.log(rowDec, colDec);

	for (let i = 0; i < arr.length; i++) {
		let rowZeroFlag = rowDec[i];
		for (let j = 0; j < arr[0].length; j++) {
			if (rowZeroFlag) {
				arr[i][j] = 0;
			} else if (colDec[j]) {
				arr[i][j] = 0;
			}
		}
	}
	return arr;
}
console.log(
	zeroMatrix([[0, 2, 3, 4, 1], [6, 0, 8, 9, 10], [11, 12, 1, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 1, 25]])
);

/**
 * 1.9
 * String Rotation: Assume you have a method isSubst ring which checks if one word is a substring
 * of another. Given two strings, 51 and 52, write code to check if 52 is a rotation of 51 using only one
 * call to isSubstring (e.g., "waterbottle" is a rotation of"erbottlewat").
 * @param {string} str1 
 * @param {string} str2 
 */

function stringRotation(str1, str2) {
	if (typeof str1 !== "string" || typeof str2 !== "string") {
		throw { Error: "Passed arguments should be of type string" };
	}
	if (str1.length !== str2.length) {
		return false;
	}
	return (str2 + str2).includes(str1);
}

console.log(stringRotation("waterbottle", "erbottlewat"));
