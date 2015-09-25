/*
  input: unsorted array, and integer k
  output: k elements that product highest product
  
  consider:
    negative numbers
    duplicates
    less than two elements in array or is not array
*/

var maxProductOfK = function(arr, k){
  // sort it based on absolute value and take the k highest
  var sorted = arr.sort(function(a,b){
    return Math.abs(a) - Math.abs(b);
  }); 

  var theHighest = sorted.slice(arr.length-k);
  console.log('the high', theHighest);

  // organize the rest in true sort
  var theRest = sorted.slice(0, arr.length-k).sort(function(a,b){
    return a-b;
  });
  console.log('the rest', theRest);

  var try1 = 0;
  var try2 = 0;
  var try3 = 0;
  // now the answer will be either the product of everything in theHighest
  try1 = theHighest.reduce(function(a,b){
    return a*b;
  });
  console.log(try1);

  if (try1 > 0){
    return theHighest;
  }
  // OR if it was negative
  // sort so that postive is on left and negative is on right
  theHighest.sort(function(a,b){
    return a < 0;
  });

  // now remove smallest negative number theHighest[theHighest.length-1] 
  //    and switch for next largest positive number in theRest, theRest[theRest.length-1];
  var cand1 = theHighest.slice();
  cand1.pop();
  cand1.push(theRest[theRest.length-1]);
  try2 = cand1.reduce(function(a,b){
    return a*b;
  });

  // now remove smallest postiive and switch for largest negative
  var cand2 = theHighest.slice();
  cand2.shift();
  cand2.push(theRest[0]);
  try3 = cand2.reduce(function(a,b){
    return a*b;
  });

  return try2 > try3 ? cand1 : cand2;
}


// test

var test = [-6, -4, -3, -1, 0, 1, 2];

console.log(maxProductOfK(test, 4));


