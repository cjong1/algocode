/*
  input: string of numbers
  output: array of the possible letter combinations
*/

var phoneDigitsToLetters = {
  0: ['0'],
  1: ['1'],
  2: ['A','B','C'],
  3: ['D','E','F'],
  4: ['G','H','I'],
  5: ['J','K','L'],
  6: ['M','N','O'],
  7: ['P','Q','R','S'],
  8: ['T','U','V'],
  9: ['W','X','Y','Z']
};

var findCombos = function(numString){
  var solutions = [];

  var findWord = function(accum, remainingNums){
    if (remainingNums.length === 0){
      solutions.push(accum);
      return;
    }

    // take the first letter of choices
    var currNum = remainingNums[0];
    remainingNums = remainingNums.substr(1);

    var choices = phoneDigitsToLetters[currNum]; // ['A', 'B', 'C']

    for (var i = 0; i < choices.length; i++) {
      var letter = choices[i];
      findWord(accum+letter, remainingNums);
    }
  };

  findWord('', numString);
  return solutions;
};


var test = "23";

// console.log(findCombos(test));


// now write it iteratively

var findCombos = function(numString){
  var solutions = [];
  var end;
  var cycle = [''];
  var toBeAdded = [];


  for(end = 0; end < numString.length; end++){
    var currNum = numString[end];
    var choices = phoneDigitsToLetters[currNum];

    // only clear toBeAdded for the beginning of a new cycle
    toBeAdded = [];

    console.log('this is cycle: ', cycle);
    for(var i = 0; i < cycle.length; i++){  // [A,B,C], [AA, AB, AC, BA, BB, BC, CA, CB, CC]
      var prev = cycle[i];

      for(var j = 0; j < choices.length; j++){
        var letter = choices[j];
        toBeAdded.push(prev+letter);
      }
      console.log(' this is to be added: ', toBeAdded);

    }
    // at the end of each cycle, toBeAdded becomes the new cycle
    cycle = toBeAdded;
  }

  return cycle;
};


var test = "23";

console.log(findCombos(test));

