/*
  Write throttle from underscore  

  Returns a function, that, when invoked, will only be triggered at most once
  during a given window of time.  See the Underbar readme for extra details
  on this function.
*/


var throttle = function(func, wait) {
  var result;

  var called = false;

  return function(){
    // if it has not yet been called already
    if (!called){
      // arguments are the args passed into this returned function (line 14)
      called = true;
      result = func.apply(this, arguments);
      setTimeout(function(){
        called = false;
      }, wait);
    } 

    return result;
  }
};


// this is with scheduling. it is NOT the same as limiting
var throttle = function(func, wait) {
  var result;

  var called = false;
  var canSched = true;
  var timeOfCall; // will use to track time elapsed through Date()
  var timeout = null;

  var actualCall = function(){
    result = func.apply(this, arguments);
    console.log('i was called');
    called = true;
    canSched = true;
    // can do a fresh call again in wait time
    timeOfCall = new Date();
    timeout=setTimeout(function(){
      called = false;
    }, wait);
    return result;
  };

  return function(){
    // if it has not yet been called already
    if (!called){
      // arguments are the args passed into this returned function (line 14)
      actualCall();
    } 
    // if it has already been called, but next call has not been scheduled already
    else if (canSched) {
      canSched = false; // now cannot schedule beyond this next
      // schedule
      var remaining = new Date() - timeOfCall;
      console.log(remaining);
      clearTimeout(timeout);
      
      setTimeout(actualCall, remaining)
    }

    return result;
  }

};