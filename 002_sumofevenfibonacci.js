/*
	Even Fibonacci numbers
	Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
	1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
	By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
 */

// Argument evenSum takes a boolean value
// true - returns sum of even fibonacci
// false - returns sum of odd fibonacci
// if no argument passed, returns sum of all fibonacci

function sumOfFibonacci(evenSum) {
	var fib 	= [1, 2],
		MAX 	= 4e6,
		first 	= 0,
		second 	= 1;

	while(true) {
		var next = fib[first] + fib[second];
		if (next > MAX) {break;}
		fib[++second] = next;
		first++;
	}

	return fib.filter(filterNum).reduce(function(a,b){return a+b;});

	function filterNum(n) {
		if (evenSum === undefined) {return true;}
		return (evenSum) ? n%2 == 0 : n%2 != 0;
	}
}

console.log(sumOfFibonacci()); 		// 9227463
console.log(sumOfFibonacci(true)); 	// 4613732
console.log(sumOfFibonacci(false));	// 4613731