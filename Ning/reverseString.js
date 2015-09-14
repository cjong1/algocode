var reverseString = function(str){
  if (str.length === 1){
    return str;
  } else {
    return str[str.length-1] + reverseString(str.slice(0, str.length-1));
  }

}

console.log(reverseString('9949482')); // rats