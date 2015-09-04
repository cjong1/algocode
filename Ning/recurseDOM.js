/*
  Create a function that, given a DOM Element on the page, 
    will visit the element itself and all of its 
    descendents (not just its immediate children). 
  For each element visited, the function should pass that 
    element to a provided callback function.

  The arguments to the function should be:

  a DOM element
  a callback function (that takes a DOM element as its argument)
*/

var recurseDOM = function(el, callback){
  // run callback on el
  callback(el);

  // if it has children, loop over them and run recurseDOM on each child
  for (var i = 0; i < el.childNodes.length; i++) {
    recurseDOM(el.childNodes[i], callback);
  }
};

// the above is depth-first pre-order