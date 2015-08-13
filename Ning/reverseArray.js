// take in an array of integers and output a reversed version

var test = [1,2,3,4];

var reverse = function(numArray, result){
  // base case
  if (numArray.length === 0){
    return result;
  }

  var output = result || [];
  var copy = numArray.slice();
  var next = copy.pop();
  output.push(next);

  return reverse(copy, output);
};

console.log(reverse(test, [])); // should be 4, 3, 2, 1