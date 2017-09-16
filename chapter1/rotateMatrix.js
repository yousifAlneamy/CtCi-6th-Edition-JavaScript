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
