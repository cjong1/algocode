/*
Write a sum method which will work properly when invoked using either syntax below.

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5

*/

var sum = function(){
  if (arguments.length == 2) {
    return arguments[0] + arguments[1];
  } else {
    // sum(2)(3)
    // this the case where sum(2) actually returns a function that acts on (3)
    return function(y) { 
      return x + y;
    }; 
  }
}