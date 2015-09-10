/*

Last In, First Out

*/

var Stack = function(){
  this._size = 0;
  this._storage = {};
}

Stack.prototype.push = function(val){
  this._storage[this._size] = val;
  this._size++;
};

Stack.prototype.pop = function(){
  var popped = this._storage[this._size-1];
  delete this._storage[this._size-1];
  this._size--;
  return popped;
};

Stack.prototype.isEmpty = function(){
  return this._size === 0;
}