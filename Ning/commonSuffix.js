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

  var cutoff = shortest.length;

  for(var j = shortest.length-1; j>=0; j--) {
    // go through each word
    for(var k = 0; k < equalized.length; k++) {
      var eachWord = equalized[k];
      if (eachWord[j] !== shortest[j]) {
        // returns up to where the difference occured
        return shortest.slice(j+1);
      }
    }
  }
  // the only way to reach this return is if the previous conditional return never fired
  return shortest;
};

console.log(commonSuffix(["carnation", "persuasion", "satisfaction"])); // 'ion'