/*
  input: integer for n x n board
  output: array of flat arrays, each representing a solution with Queen on row

*/

var Board = function(n){
  this.matrix = [];
  for(var rows = 0; rows < n; rows++){
    this.matrix.push([]);
    for(var cols = 0; cols<n; cols++){
      this.matrix[rows][cols] = '.';
    }
  }
};

Board.prototype.togglePiece = function(r, c) {
  this.matrix[r][c] = this.matrix[r][c] === 'Q' ? '.': 'Q';
}

Board.prototype.check = function(r,c){
  // run all the way up to top row if needed
  for(var above = r-1; above >= 0; above--){
    // column
    if (this.matrix[above][c] === 'Q') {return false;}
    // minDiag
    if (this.matrix[above][above - (r-c)] === 'Q') {return false;}
    // majDiag
    if (this.matrix[above][r+c-above] === 'Q') {return false; }
  }
  return true;
}

// var newBoard = new Board(1);
// console.log(newBoard);


var nQueens = function(n){
  var board = new Board(n);
  // console.log('this is board: ', board.matrix);
  var solutions = [];

  var solve = function(board, row) {
    if (row === n) {
      // it successfully made it through
      var copied = copyBoard(board.matrix);
      solutions.push(copied);
      return;
    } else {
      // for every column
      for(var i = 0; i < n; i++){
        // check
        if (board.check(row, i)){
          //place
          board.togglePiece(row, i);
          // solve one row deeper
          solve(board, row+1);
          // unplace
          board.togglePiece(row, i);
        }
      }
    }
  } 
  solve(board, 0);
  return solutions;
}




var copyBoard = function(matrix){
  var copied = [];
  for(var i = 0; i < matrix.length; i++){
    copied.push(matrix[i].slice());
  }
  return copied;
};

var flatten = function(matrix){
  var output = [];
  for(var i = 0; i < matrix.length; i++){
    output = output.concat(matrix[i]);
  }
  return output;
};

console.log(nQueens(4));






///// incomplete flat array solution


var FlatBoard = function(n){
  this.board = [];
  var els = n*n;
  for(var i = 0; i < els; i++){
    this.board[i] = '.';
  }
};

FlatBoard.prototype.place = function(loc){
  if (this.board[loc] === 'Q') {
    this.board[loc] = '.';
  } else {
    this.board[loc] = 'Q';
  }
};

FlatBoard.prototype.check = function(loc){
  var n = Math.sqrt(this.board.length);
  // never need to check row (iterate by row)
  // never need to check below (we got top to bottom)

  // find its currentRow and Col         for loc = 7
  var spotRow = Math.floor(loc/n);      // 2
  var spotCol = loc%n;                  // 1

  // check spots above
  for (var currRow = 0; currRow < spotRow; currRow++) {

    var colCheck = currRow*(n) + spotCol;
    var minDiag = loc - (spotRow - currRow)*(n+1);
    var majDiag = loc - (spotRow - currRow)*(n-1);
    if (this.board[colCheck] === 'Q') {return false}
    if (this.board[minDiag] === 'Q') {return false}
    if (this.board[majDiag] === 'Q') {return false}
  };
  
  return true;
};

// for(var spot = 0; spot < n;){
//   // if the current spot is safe
//   if (board.check(spot)){
//     // place piece there
//     board.place(spot);
//     // when it comes time to go to the next row
//     spot = Math.floor(spot/n);
//     spot+=n;

//     // if you've now reached the end then push to solutions
//     if (spot >= n*n){
//       var copied = copyBoard(board.board);
//       solutions.push(copied);
//       return;
//     }
//   } else {
//     continue;
//   }
// }