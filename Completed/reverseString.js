// Write a function that takes in a string and returns that string with all the characters in reverse order

// one parameter will input a string
function reverseChar(str) {
    // one variable stores the array of letters after splitting the string
    var array = str.split('');
    // one variable stores the concatenated letters in reverse order
    var output = '';
    // one for loop concatenates the letters from the end position in the array to the zero position
    for (var i = array.length-1; i >= 0; i--) {
      output += array[i];
    }
    // the function returns the output variable
    return output;
}