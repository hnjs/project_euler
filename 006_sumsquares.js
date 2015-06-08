/*
Sum square difference
The sum of the squares of the first ten natural numbers is,
1^2 + 2^2 + ... + 10^2 = 385

The square of the sum of the first ten natural numbers is,
(1 + 2 + ... + 10)2 = 552 = 3025

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
 */


// range includes low value and excludes high value, step increment by 1
function range(low, high) {
	var result = [];
	while (low < high) {
		result.push(low++);
	}
	return result;
}

// main function to check difference of first n natural numbers
function sumSquares(n) {
	var natural = range(1, n+1),
		sum 	= n * (n + 1) / 2,
		sqrSum 	= sum * sum,
		sumSqr 	= natural.map(function(digit){return digit*digit;}).reduce(function(a,b){return a+b;});

	return sqrSum - sumSqr;
}

console.log(sumSquares(100)); // 25164150