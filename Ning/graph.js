var Graph = function(){
  this._nodes = {};
};

var Graph = function(){
  this._nodes= {};
};

Graph.prototype.addNode = function(val){
  // so that trying to add a repeating value does NOT wipe iteslf clean
  this._nodes[val]= this._nodes[val] || {edges:{}};
};

Graph.prototype.contains = function(val){
  return this._nodes[val] ? true: false;
};

Graph.prototype.removeNode = function(val){
  if (this._nodes[val]) {
    delete this._nodes[val];
  }
};

Graph.prototype.addEdge = function(node1, node2){
  this._nodes[node1].edges[node2] = node2;
  this._nodes[node2].edges[node1] = node1; 
};

Graph.prototype.hasEdge = function(node1, node2){
  return this._nodes[node1].edges[node2] === node2;
};

Graph.prototype.removeEdge = function(node1, node2){
  delete this._nodes[node1].edges[node2];
  delete this._nodes[node2].edges[node1]; 
};

Graph.prototype.forEachNode = function(callback){
  for(var node in this._nodes){
    callback(node);
  }
};