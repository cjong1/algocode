/*

invert

    4
  1   3
5  6 7  8

into 

    4
  3   1
8  7 6  5

*/

var invertTree = function(root) {
  if (root === null){
    return root;
  }
  
  if (root.left === null && root.right === null){
    return root;
  }
  
  // actual swap
  var temp = root.left;
  root.left = root.right;
  root.right = temp;
  
  if (root.left){
    invertTree(root.left);
  }
  if (root.right){
    invertTree(root.right);
  }
  
  return root;
};