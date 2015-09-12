var Tree = function(val){
  this.value = val;
  this.children = [];
}

Tree.prototype.addChild = function(val) {
  var tree = new Tree(val);
  this.children.push(tree);
};

Tree.prototype.contains = function(val) {
  var found = false;

  var subRoutine = function(node){
    if (node.value === val){
      found = true;
    } else {
      for(var i = 0; i < node.children.length; i++) {
        subRoutine(node.children[i]);
      }
    }
  }

  subRoutine(this);
  return found;

}

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * addChild    O(n)   linear time operation (needs to traverse to the end of the tree)
 * contains    O(n)   linear time operation (needs to traverse through tree to check if inside)
 *
 */