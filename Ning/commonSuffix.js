// Given an array of strings, return the longest common suffix. 
// (Ex: Given ["carnation", "persuasion", "satisfaction"], return "ion"). 
// Return an empty string if there is no common suffix.

var commonSuffix = function(arr){
  var suff = ''; // default empty string
  // the shortest word will be the limiting factor
  var sorted = arr.sort(function(a,b){
    return a.length - b.length; // like a.length > b.length (when truth or positive, a will move further in array)
  });
  var shortest = sorted[0];
  // init array for words of equal length
  var equalized = [];
  // iterate through the remaining words and chop them
  for (var i = 1; i < arr.length; i++) {
    var word = arr[i];
    equalized.push(word.substr(word.length-shortest.length));
  }

  return suff;
};

console.log(commonSuffix(["carnation", "persuasion", "satisfaction"])); // 'ion'