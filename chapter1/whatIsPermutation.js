// What is a permutation?
// checkout this video to understand the idea of this code: https://youtu.be/nYFd7VHKyWQ
/**
 *
 * @param {string} str
 */
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
