/*
write a function that takes in a callback and returns a function that executes that callback.

the exeuction of that callback will be delayed a certain period of time

BUT it will continue to be delayed that period of time anew if the returned function is again invoked
before ready.

ie Debounce: Think of it as "grouping multiple events in one". 
Imagine that you go home, enter in the elevator, doors are closing... and suddenly your neighbor 
appears in the hall and tries to jump on the elevator. 
Be polite! and open the doors for him: you are debouncing the elevator departure. 
Consider that the same situation can happen again with a third person, 
and so on... probably delaying the departure several minutes.
*/

var debounce = function(fn, delay) {
  var timer = null;
  return function(){
    var context = this;
    var args = arguments;

    clearTimeout(timer);
    timer = setTimeout(function(){
      fn.apply(context, args);
    }, delay);
  }
}