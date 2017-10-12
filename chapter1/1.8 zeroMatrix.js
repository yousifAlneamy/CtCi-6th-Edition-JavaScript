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

	for (let i = 0; i < rowDec.length; i++) {
		if (rowDec[i]) {
			nullifyRow(arr, i);
		}
	}
	for (let i = 0; i < colDec.length; i++) {
		if (colDec[i]) {
			nullifyCol(arr, i);
		}
	}
	return arr;
}
function nullifyRow(arr, row) {
	for (let i = 0; i < arr[0].length; i++) {
		arr[row][i] = 0;
	}
}

function nullifyCol(arr, colon) {
	for (let i = 0; i < arr.length; i++) {
		arr[i][colon] = 0;
	}
}
console.log(
	zeroMatrix([
		[0, 2, 3, 4, 1],
		[6, 2, 8, 9, 10],
		[11, 12, 1, 14, 15],
		[16, 17, 18, 19, 20],
		[0, 22, 23, 1, 25]
	])
);
