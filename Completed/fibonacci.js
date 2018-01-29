//Fibonacci Challenge!

//Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.

//The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.

//As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.


function sumFibonacci(num) {
  var Fibonacci = [1,1];
  var sum = 1;
  for (var i = 1; Fibonacci[i] <= num; i++) {
    Fibonacci.push(Fibonacci[i]+Fibonacci[i-1]);
    if (Fibonacci[i] % 2 === 1) {
      sum += Fibonacci[i];
    }
  }
  return sum;
}



//TEST CASES
//sumFibonacci(1000); should return 1785.
//sumFibonacci(4000000); should return 4613732.
//sumFibonacci(4); should return 5.
//sumFibonacci(75024); should return 60696.
//sumFibonacci(75025); should return 135721.