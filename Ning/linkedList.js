var Node = function(val){
  this.val = val;
  this.next = null;
}

var LinkedList = function() {
  this.head = null;
  this.tail = null; 
}

LinkedList.prototype.addToTail = function(val){
  // create node
  var node = new Node(val);
  // if the head does not currently exist
  if (!this.head) {
    this.head = node;
  }
  // if a tail already does exist
  if (this.tail){
    this.tail.next = node;
  }

  // set as new tail
  this.tail = node;
};

LinkedList.prototype.removeHead = function(){
  var oldHead = this.head;
  var oldSecond = this.head.next;

  this.head = oldSecond;

  return oldHead.value;

};

LinkedList.prototype.contains = function(value){
  var node = this.head;
  while(node){
    if (node.value === value) {
      return true;
    }
    node = node.next;
  }
  return false;
};
  