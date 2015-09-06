/*
Given an integer n, write a function that 
returns count of trailing zeroes in n!.

Examples:
Input: n = 5
Output: 1 
Factorial of 5 is 20 which has one trailing 0.

Input: n = 20
Output: 4
Factorial of 20 is 2432902008176640000 which has
4 trailing zeroes.

Input: n = 100
Output: 24

*/

// the approach is to count the number of prime factors of 5



var trailingZeros = function(n) {
  var count = 0;

  // as long as n (or 25 or 125 etc) has a 5 (or 25 etc) still in it
  for(var i = 5; n/i>=1; i*=5) {
    // i will grow as powers of 5 (5, 25, 125, ...) to account for extra 5s
    count+=Math.floor(n/i);
  }

  return count;
}

// 25! has 6 0s
console.log(trailingZeros(25));