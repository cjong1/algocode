var BinarySearchTree = function(val){
  this.val = val;
  this.left = null;
  this.right = null;
}

// assuming storing only unique values
BinarySearchTree.prototype.insert = function(val) {
  if (this.val > val){
    if (this.left === null) {
      this.left = new BinarySearchTree(val);
    } else {
      this.left.insert(val):
    }
  } else if (this.val < val) {
    if (this.right === null) {
      this.right = new BinarySearchTree(val);
    } else {
      this.right.insert(val);
    }
  } else {
    throw new Error('the tree contains the value already');
  }
};

BinarySearchTree.prototype.contains = function(val) {
  if (val === this.val) {
    return true;
  } else if (val < this.val) {
    if (!this.left){
      return false;
    } else {
      return this.left.contains(val);
    }
  } else {
    if (!this.right) {
      return false;
    } else {
      return this.right.contains(val);
    }
  }
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  callback(this.val);
  if (this.left){
    this.left.depthFirstLog(callback);
  }
  if (this.right){
    this.right.depthFirstLog(callback);
  }
};