/*
	Largest palindrome product
	A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
	Find the largest palindrome made from the product of two 3-digit numbers.
 */

function isPalindrome(n) {
	var reverse = n.toString().split('').reverse().join('');
	return (n.toString() === reverse);
}

function getPalindromeProducts() {
	var pal = [];
	for (var i=999; i>316; i--) {   //looping until 316 because 316 * 316 < 6 digits
		for (var j=999; j>316; j--) {
			var prod = i * j;
			if (prod % 11 == 0 && isPalindrome(prod)) { //palindrome with even number of digits is divisible by 11
				pal.push(prod);
			}
		}
	}
	return pal;
}

console.log('Largest palindrome from product of two 3-digit numbers is', Math.max.apply(null, getPalindromeProducts()));
// Largest palindrome from product of two 3-digit numbers is 906609
