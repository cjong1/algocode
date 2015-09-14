// worker function
var insert = function(array, rightIndex, value) {
  // only if the old is greater than value being inserted
    var i;
    for(i = rightIndex; i>=0 && array[i]>value; i--){
      array[i+1] = array[i];
    }
    array[i+1] = value;
};

var array = [3, 5, 7, 11, 13, 2, 9, 6];

insert(array, 4, 2); //  [2, 3, 5, 7, 11, 13, 9, 6]



// ACTUAL insertionSort function
var insertionSort = function(array){
  var i;
  for(i=0; i<array.length-1; i++){
    insert(array,i,array[i+1]);
  }
  console.log(array);
}





var arr1 = [22, 11, 99, 88, 9, 7, 42];
insertionSort(arr1); //  [7, 9, 11, 22, 42, 88, 99]

var arr2 = [-1, 20, 4, 34, 19, -5];
insertionSort(arr2); //  [-5, -1, 4, 19, 20, 34]


