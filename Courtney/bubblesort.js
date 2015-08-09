/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// 5 4 3 2 1 
// 4 3 2 1 5
// 3 2 1 4 5
// 2 1 3 4 5 
// 1 2 3 4 5 
// Introduce i into the global scope so we can test function efficiency
var i;

// Feel free to add helper functions if needed.


var bubbleSort = function(array) {
  // Your code here.
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

console.log(bubbleSort([6,5,4,3,2,1]));