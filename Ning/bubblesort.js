var bubbleSort = function(array) {
  for (i = 0; i < array.length;i++) {
    var swapHappened = false;
    // a single pass through
    var limit = array.length - 1;
    for (var j = 0; j < limit; j++) {
      var el = array[j];
      var next = array[j+1];
      // compar
      if (el > next) {
        // swap
        array[j] = next;
        array[j+1] = el;
        swapHappened = true;
      }
    }
    limit--;
    if (!swapHappened) {
      return array;
    }
  }
  return array;
};

// O(n^2)
// EC: still O(n^2) since we're talking worst case
// Moar EC: nope, it is still quadratic time, because even though there are fewer, it still grows at a polynomial rate

console.log(bubbleSort([5,4,3,2,1]));