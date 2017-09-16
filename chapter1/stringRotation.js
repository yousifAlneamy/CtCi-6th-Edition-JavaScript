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
