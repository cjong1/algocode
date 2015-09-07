// given a sorted array, perform a binary search for a target value
// return the index

var binSearch = function(arr, target) {
  var minInd = 0;
  var maxInd = arr.length-1;

  // guess is the middle between minInd and maxInd
  var guess;


  while(maxInd>= minInd){
    guess = Math.floor((maxInd - minInd)/2) + minInd;
    if (arr[guess] === target) {
      return guess;
    }
    else if (arr[guess] < target) {
      minInd = guess+1;
    } else {
      maxInd = guess -1;
    }
  }
  // only reaches this point if the while loop 
  //  finished search without finding match
  return -1;
};

var x = binSearch([1,2,3,4,5,6,7,8,9,10], 1);
console.log(x);