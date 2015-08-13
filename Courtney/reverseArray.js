// take in an array of integers and output a reversed version

var test = [1,2,3,4];

var add = function(numArray){
  // your code here
  return numArray.reduce(function(a,b){return a+b;})
};

console.log(add(test)); // should be 4, 3, 2, 1