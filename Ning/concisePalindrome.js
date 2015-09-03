/*
Write a simple function (less than 80 characters) that returns 
a boolean indicating whether or not a string is a palindrome.
*/

var isPal = function(str){
  for (var i = 0; i < str.length/2; i++) {
    if (str[i] !== str[str.length-1-i]){
      return false;
    }
  }
  return true;
};

console.log(isPal('racecar'));
console.log(isPal('pillow'));

// OR more robustly,

var isPalindrome = function(str) {
    str = str.replace(/\W/g, '').toLowerCase(); // replaces all non alphanumerics with empty string
    return (str === str.split('').reverse().join('')); // check if the reverse equals itself
};

console.log(isPalindrome("boring"));                 
console.log(isPalindrome("lion oil"))