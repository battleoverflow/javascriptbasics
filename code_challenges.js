// Code Challenge 1 - Array Sort
// 1, 10, 5, 15, 2, 7, 28, 900, 45, 18, 27

const arraySort = [1, 10, 5, 15, 2, 7, 28, 900, 45, 18, 27];
// console.log(arraySort);
arraySort.sort(function (a, b) {
	return a - b;
});

console.log(arraySort);
