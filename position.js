/**
 * accepts a sorted array of integers and a target value and
 * returns the index where the target value is found
 * or if the target value is not found,
 * returns the index where it would be if it were inserted in order
 * @param sortedlist - the array of integers for initializing function
 * @param target - target value to be found
 * @returns {*}
 */


function position(sortedlist, target) {
  for(var i=0; i<sortedlist.length; i++) {
    if(sortedlist[i] === target) {
      return i;
    }
    else if(sortedlist[i] > target) {
      return i--;
    }

  }
  return sortedlist.length;
}

console.log(position([1,3,5,6], 7));