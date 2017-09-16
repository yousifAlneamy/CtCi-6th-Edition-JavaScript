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
