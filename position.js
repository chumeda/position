
function position(sortedlist, target) {
    for(i=0; i<sortedlist.length; i++) {
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