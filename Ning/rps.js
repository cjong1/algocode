/*
  Rock, Paper, Scissors
  input : n (number of throws)
  output: array of all possible permutations
*/  

// recursive with slicing
var rps = function(tries){
  var solutions = [];

  var choices = ['Rock', 'Paper', 'Scissors'];

  var findCombo = function(accum){
    if (accum.length === tries){
      solutions.push(accum);
      return;
    }

    for(var i = 0; i < choices.length; i++){
      var chose = choices[i];

      var copy = accum.slice();
      copy.push(chose);
      findCombo(copy);
    }
  }

  findCombo([]);

  return solutions;
};

// with backtracking
var rps = function(tries){
  var solutions = [];
  var choices = ['Rock', 'Paper', 'Scissors'];

  var findCombo = function(currSeq){
    if (currSeq.length === tries){
      solutions.push(currSeq.slice());
      return;
    }

    for(var i = 0; i < choices.length; i++){
      var chose = choices[i];

      currSeq.push(chose);
      findCombo(currSeq);
      currSeq.pop();
    }
  }

  findCombo([]);

  return solutions;
};

var test = 2;

console.log(rps(test));