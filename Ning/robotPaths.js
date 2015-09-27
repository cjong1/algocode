/*
  input: a n x n matrix
  output: the number of unique paths that can be drawn from matrix[0][0] 
          to matrix[n-1][n-1]
*/

// make a board class
var Board = function(n){
  this.matrix = [];
  for(var i = 0; i < n; i++){
    this.matrix.push([]);
    for(var j = 0; j < n; j++){
      this.matrix[i].push(false);
    }
  }
};

Board.prototype.toggleMove = function(r,c){
  this.matrix[r][c] = !this.matrix[r][c];
}

var findPaths = function(n){
  var count = 0;
  var board = new Board(n);

  var walk = function(r,c){
    // check if move is out of bounds
    if (r<0) {return false;}
    if (r>n-1) {return false;}

    if (c<0) {return false;}
    if (c>n-1){return false;}

    if (r === n-1 && c === n-1){
      count++;
      return;
    }

    // if it has not yet been occupied
    if (!board.matrix[r][c]){
      // place
      board.toggleMove(r,c);
      // walk other options
      walk(r+1, c);

      walk(r-1, c);

      walk(r, c+1);

      walk(r, c-1);

      // unplace
      board.toggleMove(r,c);
    }
  }

  walk(0,0);
  return count;
}

console.log("ANSWER: ", findPaths(1));
console.log("ANSWER: ", findPaths(2));
console.log("ANSWER: ", findPaths(3));
console.log("ANSWER: ", findPaths(4));
console.log("ANSWER: ", findPaths(5));
