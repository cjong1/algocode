/* 

Given a string pattern of 0s, 1s, and ?s, generate all 0-1 strings that match this pattern.
(Ex: Given "1?00?101", return ["10000101", "10001101", "11000101", "11001101"].

input: string
output: array of permutations

time complexity likely to be exponential

*/
var binString = function(str, accumResult){
  result = accumResult || []; // before the first recursive call, we initialize growing result as []
  var options = [0, 1];

  // turn string into array
  var arr = str.split('');

  // get index of first ?
  var nextMark = arr.indexOf('?');

  // no more questions marks
  if (nextMark === -1) {
    // meaning it is a viable permutation to add to accumulating final output
    result.push(str);
  } else {
  // if there are still ?s
    // two options for swapping  
    for (var j = 0; j < options.length; j++) {
      var repl = options[j]; // 0 or 1

      // swap the ? for 0 or 1
      var swap = arr;
      swap[nextMark] = repl;
      console.log('this is swap joined: ', swap.join(''));

      binString(swap.join(''), result);

    }
  }

  return result;
}

console.log(binString('1?00?101')); // ["10000101", "10001101", "11000101", "11001101"]  // find where the first ? occurs


// NOTE
/*
  check out the console.logs and pay attention to the order in which final permutations are being formed 
  (note how the recursion moves depth first, after drawing out the tree-like path of this alg)
*/
