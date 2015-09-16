/*
how to partition into groups

    //  array[p..q-1] are values known to be <= to array[r]
    //  array[q..j-1] are values known to be > array[r]
    //  array[j..r-1] haven't been compared with array[r]
    // If array[j] > array[r], just increment j.
    // If array[j] <= array[r], swap array[j] with array[q],
    //   increment q, and increment j. 
    // Once all elements in array[p..r-1]
    //  have been compared with array[r],
    //  swap array[r] with array[q], and return q.

*/

// helper function simply swaps two items in an array, changing the original array
var swap = function(array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

// does the actual sorting comparison
var partition = function(array, p, r) {
  var lowerBound = p;
  // elements with ind lowerBound-1 are lower
  var upperBound = p;
  // elements between lowerBound and upperBound -1 are higher
  var pivot = r;

  while (upperBound <r){
    if (array[upperBound] <= array[pivot]) {
      swap(array,upperBound, lowerBound);
      lowerBound++;
    }
    // either way, the upperbound advances
    upperBound++;
  }

  // swap to position pivot correctly between lower and upper
  swap(array, lowerBound, r);
  return lowerBound;
};

var array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 4, 6];
var q = partition(array, 0, array.length-1);
console.log('arr ', array );

// quickSort recursively

var quickSort = function(array, left ,right) {
  if (left === undefined) {
    left = 0;
  }
  if (right === undefined) {
    right = array.length-1;
  }

  if (right > left) {
    var pivot = partition(array, left, right);
    quickSort(array, left, pivot-1);
    quickSort(array, pivot+1, right);
  }
}


// sort the whole thing
var array2 = [9, 7, 5, 11, 12, 2, 14, 3, 10, 4, 6];
quickSort(array2);
console.log(array2);