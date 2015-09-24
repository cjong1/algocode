// Khan Academy has a good diagram

var merge = function(arr, left, middle, right) {
  //create left and right arrays (that will be merged into one)
  var leftArr = arr.slice(left, middle+1); 
  var rightArr = arr.slice(middle+1, right+1);

  var leftInd = 0;
  var rightInd = 0;

  var k = left; // the original array's index

  // loop until both index pointers of arrays being merged have hit the end
  while(leftInd < leftArr.length || rightInd < rightArr.length){
    // if left side was smaller or equal
    if (rightInd === rightArr.length || leftArr[leftInd] <= rightArr[rightInd]) {
      arr[k] = leftArr[leftInd];
      leftInd++;
    } else {
      arr[k] = rightArr[rightInd];
      rightInd++;
    }
    k++;
  }
};


// Takes in an array and recursively merge sorts it
var mergeSort = function(array, p, r) {
   if (p===undefined){
    p = 0;
   } 
   if (r===undefined){
    r = array.length-1;
   }

  if(r-p>=1){
    var q = Math.floor((r-p)/2) + p;
    mergeSort(array, p, q);
    mergeSort(array, q+1, r);
    merge(array, p, q, r);
  }
};

// testing mergeSort
var array = [14, 7, 3, 12, 9, 11, 6, 2];
mergeSort(array);
console.log("Array after sorting: " + array);   // [2, 3, 6, 7, 9, 11, 12, 14])

// testing the merge function
var mergeArr = [3, 7, 12, 14, 2, 6, 9, 11];
merge(mergeArr, 0, Math.floor((mergeArr.length-1) / 2), mergeArr.length-1);
console.log('adsf :',mergeArr);

// testing mergeSort with negative numbers and odd length
var testArr = [5, -1, 26, -3, 90];
mergeSort(testArr);
console.log(testArr);

//extra notes

// in case we just check && exlusively in the main while condition

  // while(leftInd < leftArr.length){
  //   arr[k]=leftArr[leftInd];
  //   k++;
  //   leftInd++;
  // }
  // while(rightInd < rightArr.length){
  //   arr[k]=rightArr[rightInd];
  //   k++;
  //   rightInd++;
  // }
