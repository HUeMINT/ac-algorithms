/*

Given a number, insert dashes ('-') between each two odd numbers and return it as a string
Remember 0 is an even number. Assume the input will contain at least 1 digit.

Hint: Check out toString() method at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString

*/

/**
Examples:

var result = dashInsert(454793);
console.log(result) // "4547-9-3"

var result = dashInsert(44);
console.log(result) // "44"

var result = dashInsert(0);
console.log(result) // "0"

var result = dashInsert(13);
console.log(result) // "1-3"

**/

function dashInsert(number) {
	// Create variables
	// Change parameter to string
	// Change string to array of strings
	var array = number.toString().split('');
	var result = '';
	// Test if each set of two consecutive numbers are odd
	// Insert dash after first of two odds only
	for (var i = 0; i < array.length; i++) {
		if (array[i] % 2 === 1 && array[i + 1] % 2 === 1) {
			result += array[i] + '-';
		} else {
			result += array[i];
		}
	}
	return result;
}