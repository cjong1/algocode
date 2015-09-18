/*

given an array of n elements, where the contents are within [0....n]

find the missing element

*/


var missingNumber = function(nums) {
  var n = nums.length;
  
/* using n as the array's limit to our advantage
   the final total if what was missing were present would be
     n + n-1 + n-2 .... + 0
  
  ex) consider array [0,1,3]
    the limitation is such that adding the missing element should total to 4
    now: since 3 has to be the highest number, once the array has 4 elements (is full)
         then it its max is 4 and everything under it
*/

  // therefore: the missing number is just maxPossible - arraySum
  for(var i=0; i<nums.length; ++i){
    n+=i;
    n-=nums[i];
  }
      
  return n;
};